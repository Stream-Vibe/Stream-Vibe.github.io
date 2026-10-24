# Window-level demo candidates: talk/scripts/promo3/windows.json (runs of on-time, judge>=0.75 StreamVibe replies with
# nothing missed inside) restricted to >=720p sources, with baseline behaviour over the same window.
import json, re, sys
from pathlib import Path
EB = Path('/home/chengzhiliu_google_com/code/eval_bench')
sys.path.insert(0, str(EB / 'scripts'))
from score_ps40k_joy import load_traces, match_within, read_jsonl

OURS = 'q46v6f500-wise-a070-hr17e'
BASES = {'joyai': 'JoyAI', 'mmduet2': 'MMDuet2', 'vispeak': 'ViSpeak', 'livestar': 'LiveStar', 'mage-vl': 'Mage-VL'}
DIRS = {'glmt': ['outputs/glmt_v1'], 'ps40k': ['outputs/ps40k_v1'], 'cmr': ['outputs/cmmcruc_v1', 'outputs/cmmcruc_tail_v1']}
SUB = {'PS-I': 'Single Event', 'PS-P': 'Transition', 'PS-R': 'Recurring', 'PS-A': 'Single Event', 'G': 'Guidance', 'L': 'Learning',
       'M': 'Monitoring', 'T': 'Tool use', 'CM': 'Revision', 'MC': 'Composition', 'RUC': 'Interruption'}
level = lambda ds: 'Explicit' if ds.startswith('ps40k') else 'Implicit' if ds.startswith('glmt') else 'Dynamic'
clean = lambda t: re.sub(r'<\|im_end\|>|</?response>', '', t or '').strip()

res = {}
for f in ['_work/allres.tsv', '_work/win_res.tsv']:
    for l in open(f):
        v, r = l.rstrip('\n').split('\t'); m = re.search(r'(\d+)x(\d+)', r)
        if m: res[v] = tuple(map(int, m.groups()))
W = [w for w in json.load(open('/home/chengzhiliu_google_com/code/talk/scripts/promo3/windows.json'))
     if w['video'] in res and min(res[w['video']]) >= 720]

judges, traces = {}, {}
def judge(arm):
    if arm not in judges:
        p = EB / f'scores/cache_psjoy/{arm}.dense_self.answers.json'
        if not p.exists(): p = EB / f'scores/cache_qualified4_native_20260908/{arm}.dense_self.answers.json'
        judges[arm] = json.load(open(p))
    return judges[arm]
def trace(arm, suite, eid):
    key = (arm, suite if arm in (OURS, 'joyai') else 'native')
    if key not in traces:
        dirs = [EB / d / arm / 'dense_self' for d in DIRS[suite]] if arm in (OURS, 'joyai') else [EB / f'outputs/qualified4_native_20260908/{arm}/dense_self']
        traces[key] = {}
        for d in dirs: traces[key].update(load_traces(d))
    return traces[key].get(eid)

out = []
for w in W:
    suite, eid = w['suite'], w['eid']
    tr = trace(OURS, suite, eid); st = tr['steps']
    gold = [s['second'] for s in st if s['gold_action'] == 'response']
    gold_txt = {s['second']: clean(s.get('gold_text') or '') for s in st if s['gold_action'] == 'response'}
    users = [dict(t=u[0], text=u[1]) for u in w['users']]
    r0, r1 = w['replies'][0][0], w['replies'][-1][0]
    lvl = level(w['dataset'])
    if lvl == 'Dynamic':  # the window must show the change: an update turn shortly before/inside, answered inside
        upd = [u for u in users[1:] if r0 - 15 <= u['t'] <= r1]
        if not upd: continue
        ws = max(0.0, min(upd[0]['t'], r0) - 8)
    else:
        ws = max(0.0, r0 - 10)
    we = min(len(st), r1 + 5)
    gin = [g for g in gold if ws <= g <= we]
    if any(g not in [round(x[0]) for x in w['replies']] and not any(abs(g - x[0]) <= 1 for x in w['replies']) for g in gin):
        continue  # a gold point inside the widened window that we did not hit
    ours_all = [s for s in st if s['pred_action'] == 'response' and ws <= s['second'] <= we]
    if len(ours_all) != w['n']: continue  # stray StreamVibe replies inside the widened window
    base, lanes, counts, fails = {}, {}, {}, 0
    for a, nm in BASES.items():
        bt = trace(a, suite, eid)
        if not bt: continue
        preds = [s for s in bt['steps'] if s['pred_action'] == 'response']
        hit = match_within(gold, [s['second'] for s in preds], 2.0); inv = {p: g for g, p in hit.items()}
        j = judge(a)
        lanes[nm] = [s['second'] for s in preds if ws <= s['second'] <= we]; counts[nm] = len(lanes[nm])
        for gi, g in enumerate(gold):
            if g not in gin: continue
            m = [s for i, s in enumerate(preds) if inv.get(i) == gi]
            if m:
                ok = (j.get(f"{a}|{eid}|{m[0]['turn']}") or 0) >= 0.75
                tg = dict(tag='Correct' if ok else 'Wrong content', color='1F9D55' if ok else 'E08A1E', text=clean(m[0]['pred_text']))
            else:
                near = [s for s in preds if abs(s['second'] - g) <= 8]
                tg = (dict(tag='Premature' if near[0]['second'] < g else 'Late', color='E5484D', text=clean(near[0]['pred_text'])) if near
                      else dict(tag='Silent', color='E5484D', text=''))
            fails += tg['tag'] != 'Correct'
            base.setdefault(g, []).append(dict(name=nm, **tg))
    if len(lanes) < 4: continue
    resp = []
    for t, jv, text in w['replies']:
        g = min(gin, key=lambda g: abs(g - t)) if gin else None
        resp.append(dict(t=t, text=text, hit=True, base=base.get(g)))
    nb = len(lanes)
    contrast = round(w['n'] + fails / max(1, len(gin) * nb) + 0.02 * sum(counts.values()) / nb, 3)
    fam = w['dataset'].split('_', 1)[1]
    out.append(dict(key=f"w{len(out):03d}", eid=eid, suite=suite, level=lvl, sub=SUB.get(fam, fam), video=w['video'], res=res[w['video']],
                    source=w['source'], start=ws, end=we, users=users, gold=gin, resp=resp,
                    counts={'StreamVibe': w['n'], **counts}, lanes={'StreamVibe': [x[0] for x in w['replies']], **lanes}, contrast=contrast))
json.dump(out, open('_work/win_cands.json', 'w'), ensure_ascii=False, indent=1)
import collections
print(len(W), len(out), collections.Counter(o['level'] for o in out))
