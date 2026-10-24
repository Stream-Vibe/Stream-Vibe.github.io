# Mine demo windows over every trace (not just promo3's): StreamVibe replies matched to a help point within 2 s with
# judge >= 0.75, grouped into runs (<=30 s span). Same record format as talk/scripts/promo3/windows.json.
import json, re, sys
from pathlib import Path
EB = Path('/home/chengzhiliu_google_com/code/eval_bench')
sys.path.insert(0, str(EB / 'scripts'))
from score_ps40k_joy import load_traces, read_jsonl

OURS = 'q46v6f500-wise-a070-hr17e'
SUITES = {'glmt': ('data/normalized/glmt_balanced_2000.jsonl', ['outputs/glmt_v1']),
          'ps40k': ('data/normalized/ps40k_828.jsonl', ['outputs/ps40k_v1']),
          'cmr': ('data/normalized/cmmcruc_1500.jsonl', ['outputs/cmmcruc_v1', 'outputs/cmmcruc_tail_v1'])}
J = json.load(open(EB / f'scores/cache_psjoy/{OURS}.dense_self.answers.json'))
clean = lambda t: re.sub(r'<\|im_end\|>|</?response>', '', t or '').strip()
out = []
for suite, (man, dirs) in SUITES.items():
    rows = {r['eval_id']: r for r in read_jsonl(EB / man)}
    tr = {}
    for d in dirs: tr.update(load_traces(EB / d / OURS / 'dense_self'))
    for eid, t in tr.items():
        r = rows.get(eid)
        if not r: continue
        st = t['steps']
        gold = [s['second'] for s in st if s['gold_action'] == 'response']
        preds = [s for s in st if s['pred_action'] == 'response']
        users, sec = [], 0.0
        for m in r['messages']:
            if m['role'] != 'user': continue
            mt = re.search(r'<([\d.]+) seconds>', m['content']); sec = float(mt.group(1)) if mt else sec
            u = re.sub(r'\n?<[\d.]+ seconds>\n<image>', '', m['content']).strip()
            if u: users.append((sec, u))
        used, ev = set(), []
        for p in preds:
            g = min((g for g in gold if abs(g - p['second']) <= 2 and g not in used), key=lambda g: abs(g - p['second']), default=None)
            jv = J.get(f"{OURS}|{eid}|{p['turn']}")
            if g is not None: used.add(g)
            ev.append(dict(t=p['second'], gold=g, good=g is not None and jv is not None and jv >= 0.75, j=jv, text=clean(p['pred_text'])))
        i = 0
        while i < len(ev):
            if not ev[i]['good']: i += 1; continue
            k = i
            while k + 1 < len(ev) and ev[k + 1]['good'] and ev[k + 1]['t'] - ev[i]['t'] <= 30: k += 1
            run = ev[i:k + 1]
            missed = [g for g in gold if run[0]['t'] - 2 <= g <= run[-1]['t'] + 2 and g not in {e['gold'] for e in run}]
            texts = [e['text'] for e in run]
            if not missed and len(set(texts)) == len(texts):
                out.append(dict(suite=suite, eid=eid, dataset=r['dataset'], source=r['metadata'].get('source'), video=r['video_path'],
                                dur=len(st), n=len(run), span=run[-1]['t'] - run[0]['t'], replies=[(e['t'], e['j'], e['text']) for e in run],
                                users=[u for u in users if u[0] <= run[-1]['t']]))
            i = k + 1
json.dump(out, open('_work/windows_all.json', 'w'), ensure_ascii=False, indent=1)
from collections import Counter
print(len(out), Counter(c['dataset'][:5] for c in out))
