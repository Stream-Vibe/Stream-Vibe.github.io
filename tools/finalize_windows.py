# Hand-reviewed window demos (>=720p, English UI, no tutorials or burned-in text): 5 Physical + 5 Digital -> static/gallery.js.
import json
C = {c['key']: c for c in json.load(open('_work/win_cands.json'))}
PICK = {  # key -> (environment, title); two environments x 5, clearest contrast first
    'w019': ('Physical', 'The moment the coffee button is pressed'),
    'w020': ('Physical', 'When the skier starts down the slope'),
    'w053': ('Physical', 'When she asks about the camera'),
    'w006': ('Physical', 'Mug scrambled eggs, with questions mid-task'),
    'w043': ('Physical', 'Brewing espresso, interrupted'),
    'w001': ('Digital', 'Styling headings in a Word report'),
    'w016': ('Digital', 'Renting a van on Expedia'),
    'w052': ('Digital', 'Scheduling a message in Zulip'),
    'w002': ('Digital', 'Zotero cleanup: answer, then keep tracking'),
    'w003': ('Digital', 'Skyscanner search: answer, then recap'),
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
