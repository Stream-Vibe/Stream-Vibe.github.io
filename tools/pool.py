# Candidate pool for the demo gallery: source/domain guess + quality filter over talk/demo_candidates.json.
import json, re, collections
EB = '/home/chengzhiliu_google_com/code/eval_bench/'
cand = json.load(open('/home/chengzhiliu_google_com/code/talk/demo_candidates.json'))
meta = {}
for f in ['ps40k_828', 'glmt_balanced_2000', 'cmmcruc_1500']:
    for l in open(EB + f'data/normalized/{f}.jsonl'):
        r = json.loads(l); meta[r['eval_id']] = r['metadata']
LEVEL = {'ps40k': 'Explicit', 'glmt': 'Implicit', 'cmmcruc': 'Dynamic'}
SUB = {'PS-I': 'Single Event', 'PS-P': 'Transition', 'PS-R': 'Recurring', 'PS-A': 'Single Event',
       'G': 'Guidance', 'L': 'Learning', 'M': 'Monitoring', 'T': 'Tool use', 'CM': 'Revision', 'MC': 'Composition', 'RUC': 'Interruption'}
SRC_DOMAIN = [  # (regex on source string, domain)
    (r'fingertip|android|mobile|aitw|phone', 'GUI · Mobile'),
    (r'agentnet|videocua|gui360|gui-world|videogui|guiworld|osworld|mind2web|screen', 'GUI · Desktop'),
    (r'evostruggle|egoexo|holoassist|egoschema|ego4d|epic|assembly|nusar|barista|egoper|ego', 'Egocentric'),
    (r'youcook|cook|recipe|food', 'Cooking'),
    (r'video_mmlu|tutorial|activitynet|coin|crosstask|howto', 'Tutorials'),
    (r'charades|vsi|nextqa|video-mme|mlvu|scannet', 'Everyday'),
]
def source(eid, m, video):
    return ' '.join([eid, m.get('source', ''), m.get('video_key', ''), video]).lower()
def domain(s):
    for rx, d in SRC_DOMAIN:
        if re.search(rx, s): return d
    return '?'
pool = []
for ds, L in cand.items():
    suite, fam = ds.split('_', 1)
    for c in L:
        m = meta[c['eid']]; s = source(c['eid'], m, c['video'])
        o = c['ours']; ng = o['n_gold']
        bgood = max(b['good'] for b in c['base'].values())
        ok = o['good'] >= 1 and o['fp'] <= ng + 1 and o['good'] >= bgood and c['dur'] <= 190
        if ok:
            pool.append(dict(eid=c['eid'], suite=c['suite'], level=LEVEL[suite], sub=SUB[fam], fam=fam, domain=domain(s),
                             src=(m.get('source') or '')[:40], dur=c['dur'], score=c['score'], ours=o, users=c['users'], video=c['video']))
print(len(pool))
cnt = collections.Counter((p['level'], p['domain']) for p in pool)
for k, v in sorted(cnt.items()): print(k, v)
json.dump(pool, open('/home/chengzhiliu_google_com/code/streamvibe_site/_work/pool.json', 'w'), ensure_ascii=False, indent=1)
