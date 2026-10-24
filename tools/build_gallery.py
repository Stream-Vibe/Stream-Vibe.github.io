# Build gallery records (users, gold help points, StreamVibe + baseline responses) for the reviewed candidates,
# score how clear the contrast is, and keep the best few per scenario.
import json, re, sys
from pathlib import Path
EB = Path('/home/chengzhiliu_google_com/code/eval_bench')
sys.path.insert(0, str(EB / 'scripts'))
from score_ps40k_joy import load_traces, match_within, read_jsonl

OURS = 'q46v6f500-wise-a070-hr17e'
BASES = {'joyai': 'JoyAI', 'mmduet2': 'MMDuet2', 'vispeak': 'ViSpeak', 'livestar': 'LiveStar', 'mage-vl': 'Mage-VL'}
MAN = {'glmt': 'glmt_balanced_2000', 'ps40k': 'ps40k_828', 'cmr': 'cmmcruc_1500'}
DIRS = {'glmt': ['outputs/glmt_v1'], 'ps40k': ['outputs/ps40k_v1'], 'cmr': ['outputs/cmmcruc_v1', 'outputs/cmmcruc_tail_v1']}
SCEN_OLD = {  # first-pass review-sheet ids (superseded by the >=720p pass)
    'Egocentric': [0, 1, 2, 3, 4, 5, 6, 17, 18, 21, 23, 36, 37, 52, 58, 59, 61, 68],
    'GUI · Desktop': [7, 8, 9, 10, 11, 12, 24, 25, 26, 27, 28, 29, 30, 56],
    'GUI · Mobile': [13, 14, 15, 31, 32, 33, 34, 48, 50],
    'Cooking': [39, 40, 41, 51, 55, 63, 69],
    'Sports & Skills': [35, 43, 46, 47, 49, 53, 62, 64, 65],
    'Everyday & Learning': [16, 19, 22, 38, 42, 44, 45, 60, 66, 67, 70],
}
# >=720p pass: every candidate whose source video has a short side of at least 720 px
LEVEL = {'ps40k': 'Explicit', 'glmt': 'Implicit', 'cmmcruc': 'Dynamic'}
SUB = {'PS-I': 'Single Event', 'PS-P': 'Transition', 'PS-R': 'Recurring', 'PS-A': 'Single Event',
       'G': 'Guidance', 'L': 'Learning', 'M': 'Monitoring', 'T': 'Tool use', 'CM': 'Revision', 'MC': 'Composition', 'RUC': 'Interruption'}
hires = set()
for l in open('_work/allres.tsv'):
    v, r = l.rstrip('\n').split('\t')
    m = re.search(r'(\d+)x(\d+)', r)
    if m and min(int(m.group(1)), int(m.group(2))) >= 720: hires.add(v)
review, seen = [], set()
for ds, L in json.load(open('/home/chengzhiliu_google_com/code/talk/demo_candidates.json')).items():
    suite, fam = ds.split('_', 1)
    for c in L:
        if c['video'] in hires and c['eid'] not in seen and c['ours']['good'] >= 1:
            seen.add(c['eid'])
            review.append(dict(rid=len(review), eid=c['eid'], suite=c['suite'], level=LEVEL[suite], sub=SUB[fam], video=c['video'], dur=c['dur']))
scen_of = {r['rid']: '?' for r in review}

judges = {}
def judge(arm):
    if arm not in judges:
        p = EB / f'scores/cache_psjoy/{arm}.dense_self.answers.json'
        if not p.exists(): p = EB / f'scores/cache_qualified4_native_20260908/{arm}.dense_self.answers.json'
        judges[arm] = json.load(open(p))
    return judges[arm]
traces = {}
def trace(arm, suite, eid):
    key = (arm, suite if arm in (OURS, 'joyai') else 'native')
    if key not in traces:
        dirs = [EB / d / arm / 'dense_self' for d in DIRS[suite]] if arm in (OURS, 'joyai') else [EB / f'outputs/qualified4_native_20260908/{arm}/dense_self']
        traces[key] = {}
        for d in dirs: traces[key].update(load_traces(d))
    return traces[key].get(eid)
rows = {}
for s, f in MAN.items():
    for r in read_jsonl(EB / f'data/normalized/{f}.jsonl'): rows[r['eval_id']] = r
clean = lambda t: re.sub(r'<\|im_end\|>|</?response>', '', t or '').strip()

def build(c):
    row = rows[c['eid']]; users, gold, sec = [], [], 0.0
    for m in row['messages']:
        if m['role'] == 'user':
            mt = re.search(r'<([\d.]+) seconds>', m['content']); sec = float(mt.group(1)) if mt else sec
            t = re.sub(r'\n?<[\d.]+ seconds>\n<image>', '', m['content']).strip()
            if t: users.append(dict(t=sec, text=t))
        elif m['content'].startswith('</response>'):
            gold.append(dict(t=sec, text=clean(m['content'])))
    gt = [g['t'] for g in gold]
    arms = {}
    for arm in [OURS] + list(BASES):
        tr = trace(arm, c['suite'], c['eid'])
        if not tr: continue
        preds = [s for s in tr['steps'] if s['pred_action'] == 'response']
        hit = match_within(gt, [s['second'] for s in preds], 2.0); inv = {p: g for g, p in hit.items()}
        j = judge(arm)
        arms[arm] = [dict(t=s['second'], text=clean(s['pred_text']), gold=inv.get(i),
                          judge=j.get(f"{arm}|{c['eid']}|{s['turn']}")) for i, s in enumerate(preds)]
    return users, gold, arms

def tag(resps, gi, gtime):
    m = [r for r in resps if r['gold'] == gi]
    if m:
        r = m[0]; ok = (r['judge'] or 0) >= 0.75
        return dict(tag='Correct' if ok else 'Wrong content', color='1F9D55' if ok else 'E08A1E', text=r['text'], t=r['t'])
    near = [r for r in resps if abs(r['t'] - gtime) <= 8 and r['gold'] is None]
    if near:
        r = min(near, key=lambda r: abs(r['t'] - gtime))
        return dict(tag='Premature' if r['t'] < gtime else 'Late', color='E5484D', text=r['text'], t=r['t'])
    return dict(tag='Silent', color='E5484D', text='', t=None)

out = []
for c in review:
    users, gold, arms = build(c)
    if OURS not in arms or len(arms) < 4: continue
    ours = arms[OURS]
    ours_good = sum(1 for r in ours if r['gold'] is not None and (r['judge'] or 0) >= 0.75)
    extra = sum(1 for r in ours if r['gold'] is None)
    texts = [r['text'] for r in ours]; dup = len(texts) - len(set(texts))
    bases = {a: arms[a] for a in BASES if a in arms}
    groups, bfail = [], 0
    for gi, g in enumerate(gold):
        om = [r for r in ours if r['gold'] == gi]
        row = dict(t=g['t'], gold=g['text'], ours=om[0] if om else None, base={})
        for a, rs in bases.items():
            row['base'][a] = tag(rs, gi, g['t']); bfail += row['base'][a]['tag'] != 'Correct'
        groups.append(row)
    over = {a: len(rs) for a, rs in bases.items()}
    ng = len(gold)
    contrast = ours_good / ng - 0.3 * extra / max(1, ng) - 0.3 * dup + 0.5 * bfail / (ng * len(bases))
    out.append(dict(rid=c['rid'], eid=c['eid'], suite=c['suite'], level=c['level'], sub=c['sub'], scenario=scen_of[c['rid']],
                    video=c['video'], dur=c['dur'], users=users, gold=gold, ours=ours, groups=groups,
                    counts={'StreamVibe': len(ours), **{BASES[a]: n for a, n in over.items()}},
                    lanes={'StreamVibe': [r['t'] for r in ours], **{BASES[a]: [r['t'] for r in rs] for a, rs in bases.items()}},
                    ours_good=ours_good, extra=extra, dup=dup, contrast=round(contrast, 3)))
json.dump(out, open('_work/gallery_hires.json', 'w'), ensure_ascii=False, indent=1)
for s in ['?']:
    L = sorted([o for o in out if o['scenario'] == s], key=lambda o: -o['contrast'])
    for o in L[:70]: print(f"  #{o['rid']:<3}{o['contrast']:>6} {o['level'][:3]} {o['sub']:<13} good={o['ours_good']}/{len(o['gold'])} extra={o['extra']} dup={o['dup']} {o['counts']}")
