# Over-select ~65 candidates for visual review, round-robin over subtypes inside each (level, domain).
import json, collections, itertools
pool = json.load(open('_work/pool.json'))
QUOTA = {('Dynamic', 'Egocentric'): 7, ('Dynamic', 'GUI · Desktop'): 6, ('Dynamic', 'GUI · Mobile'): 3, ('Dynamic', 'Tutorials'): 3,
         ('Dynamic', 'Everyday'): 2, ('Dynamic', '?'): 3, ('Implicit', 'GUI · Desktop'): 7, ('Implicit', 'GUI · Mobile'): 4,
         ('Implicit', 'Egocentric'): 4, ('Implicit', 'Cooking'): 3, ('Implicit', 'Everyday'): 3, ('Implicit', 'Tutorials'): 3,
         ('Implicit', '?'): 3, ('Explicit', '?'): 20}
g = collections.defaultdict(lambda: collections.defaultdict(list))
for p in sorted(pool, key=lambda p: -p['score']): g[(p['level'], p['domain'])][p['sub']].append(p)
out = []
for k, q in QUOTA.items():
    subs = list(g[k].values()); picked = []
    for row in itertools.zip_longest(*subs):
        picked += [x for x in row if x]
    out += picked[:q]
for i, p in enumerate(out): p['rid'] = i
json.dump(out, open('_work/review.json', 'w'), ensure_ascii=False, indent=1)
with open('_work/review.tsv', 'w') as f:
    for p in out: f.write(f"{p['rid']}\t{p['video']}\t{p['dur']}\n")
print(len(out))
