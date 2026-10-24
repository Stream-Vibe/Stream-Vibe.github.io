# Hand-reviewed window demos (>=720p, English UI, no tutorials or burned-in text): 10 Physical + 10 Digital -> static/gallery.js.
import json
C = {c['key']: c for c in json.load(open('_work/win_cands_all.json'))}
PICK = {  # key in win_cands_all.json -> (environment, title); 10 per environment, all intent levels where available
    'w054': ('Physical', 'The moment the coffee button is pressed'),
    'w056': ('Physical', 'When the skier starts down the slope'),
    'w057': ('Physical', 'When she asks about the camera'),
    'w014': ('Physical', 'Microwave mug shakshuka'),
    'w018': ('Physical', 'Swapping a toy car’s rear wheel'),
    'w023': ('Physical', 'Cleaning a sink with baking soda paste'),
    'w102': ('Physical', 'Mug scrambled eggs, with questions mid-task'),
    'w149': ('Physical', 'Tortilla chips and salsa, interrupted'),
    'w154': ('Physical', 'Garage cleanup, interrupted'),
    'w080': ('Physical', 'Fixing a garden hose, interrupted'),
    'w044': ('Digital', 'Customizing a Nextcloud dashboard'),
    'w048': ('Digital', 'Scheduling a message in Zulip'),
    'w052': ('Digital', 'Renting a van on Expedia'),
    'w016': ('Digital', 'Pixel-art rendering in Blender'),
    'w049': ('Digital', 'Slicing an image in Photoshop'),
    'w085': ('Digital', 'Zotero cleanup: answer, then keep tracking'),
    'w086': ('Digital', 'Skyscanner search: answer, then recap'),
    'w166': ('Digital', 'Element settings, with side questions'),
    'w153': ('Digital', 'Updating a WeKan board, interrupted'),
    'w128': ('Digital', 'Setting up Bitwarden, interrupted'),
}
out, enc = [], []
for k, (env, title) in PICK.items():
    c = C[k]
    k2 = 'v' + k[1:]  # new namespace so clips never collide with earlier picks
    out.append(dict(key=k2, env=env, title=title, level=c['level'], sub=c['sub'], speed=1.0, start=c['start'], end=c['end'],
                    users=c['users'], gold=c['gold'], resp=c['resp'], counts=c['counts'], lanes=c['lanes']))
    enc.append(f"{k2}\t{c['video']}\t{c['start']}\t{c['end']}\t1.0")
s = json.dumps(out, ensure_ascii=False, indent=1)
assert 'StreamMind' not in s
open('static/gallery.js', 'w').write('window.GALLERY = ' + s + ';\n')
open('_work/encode.tsv', 'w').write('\n'.join(enc) + '\n')
import collections; print(collections.Counter((d['level'], d['env']) for d in out))
