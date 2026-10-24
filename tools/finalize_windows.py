# Hand-reviewed window demos (>=720p, English UI, no tutorials or burned-in text): 5 per intent level -> static/gallery.js.
import json
C = {c['key']: c for c in json.load(open('_work/win_cands.json'))}
PICK = {  # key -> (environment, title)
    'w019': ('Physical', 'The moment the coffee button is pressed'),
    'w020': ('Physical', 'When the skier starts down the slope'),
    'w021': ('Physical', 'Picking up the red sanding tool'),
    'w053': ('Physical', 'When she asks about the camera'),
    'w028': ('Physical', 'Each time the white mug is picked up'),
    'w001': ('GUI', 'Styling headings in a Word report'),
    'w016': ('GUI', 'Renting a van on Expedia'),
    'w050': ('GUI', 'Shopping for a desk on Amazon'),
    'w052': ('GUI', 'Scheduling a message in Zulip'),
    'w007': ('GUI', 'Exporting a video in Photoshop'),
    'w006': ('Physical', 'Mug scrambled eggs, with questions mid-task'),
    'w038': ('Physical', 'Cream cheese toast, interrupted'),
    'w043': ('Physical', 'Brewing espresso, interrupted'),
    'w002': ('GUI', 'Zotero cleanup: answer, then keep tracking'),
    'w003': ('GUI', 'Skyscanner search: answer, then recap'),
}
out, enc = [], []
for k, (env, title) in PICK.items():
    c = C[k]
    out.append(dict(key=k, env=env, title=title, level=c['level'], sub=c['sub'], speed=1.0, start=c['start'], end=c['end'],
                    users=c['users'], gold=c['gold'], resp=c['resp'], counts=c['counts'], lanes=c['lanes']))
    enc.append(f"{k}\t{c['video']}\t{c['start']}\t{c['end']}\t1.0")
s = json.dumps(out, ensure_ascii=False, indent=1)
assert 'StreamMind' not in s
open('static/gallery.js', 'w').write('window.GALLERY = ' + s + ';\n')
open('_work/encode.tsv', 'w').write('\n'.join(enc) + '\n')
import collections; print(collections.Counter((d['level'], d['env']) for d in out))
