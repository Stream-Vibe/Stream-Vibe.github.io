# Keep the hand-reviewed demos with a clear contrast; emit static/gallery.js and the clip encode list.
import json, re
A = {o['rid']: o for o in json.load(open('_work/gallery_hires.json'))}
PICK = {  # rid in gallery_hires.json -> (scenario shown on the page, short title); all sources >= 720p, English UI
    127: ('Egocentric', 'The moment the coffee button is pressed'),
    128: ('Egocentric', 'Picking up the red sanding tool'),
    126: ('Egocentric', 'When the skier starts down the slope'),
    124: ('Cooking & Everyday', 'Tell me when the turkey goes in'),
    132: ('Cooking & Everyday', 'When he opens the hatchback door'),
    131: ('Cooking & Everyday', 'When she asks about the camera'),
    77: ('Office & Web', 'Calibrating a plot in Grabit'),
    73: ('Office & Web', 'Customizing a Nextcloud dashboard'),
    86: ('Office & Web', 'Building a to-do table in Word'),
    0: ('Office & Web', 'Excel charts, then the request changes'),
    33: ('Office & Web', 'Anki setup with interrupting questions'),
    44: ('Creative & Dev Tools', 'VS Code setup with quick questions'),
    72: ('Creative & Dev Tools', 'Learning Joplin step by step'),
    12: ('Creative & Dev Tools', 'Photoshop composite, request revised'),
}
NAMES = {'joyai': 'JoyAI', 'mmduet2': 'MMDuet2', 'vispeak': 'ViSpeak', 'livestar': 'LiveStar', 'mage-vl': 'Mage-VL'}
out, enc = [], []
for rid, (scen, title) in PICK.items():
    o = A[rid]
    ev_t = [u['t'] for u in o['users']] + [g['t'] for g in o['gold']] + [r['t'] for r in o['ours']]
    act = [g['t'] for g in o['gold']] + [r['t'] for r in o['ours']]
    start = max(0.0, min(act) - 12) if min(act) > 16 else 0.0  # skip long silent lead-ins
    end = min(o['dur'], max(max(ev_t) + 7, start + 18))
    speed = max(1.0, round((end - start) / 32 * 4) / 4)
    key = f"g{rid:02d}"
    gold_by = {gi: g for gi, g in enumerate(o['groups'])}
    resp = []
    for r in o['ours']:
        g = gold_by.get(r['gold']) if r['gold'] is not None else None
        resp.append(dict(t=r['t'], text=r['text'], hit=g is not None and (r['judge'] or 0) >= 0.75,
                         base=[dict(name=NAMES[a], **{k: b[k] for k in ('tag', 'color', 'text')}) for a, b in g['base'].items()] if g else None))
    out.append(dict(key=key, scenario=scen, title=title, level=o['level'], sub=o['sub'], speed=speed, start=start, end=end,
                    users=[dict(t=u['t'], text=u['text']) for u in o['users']],
                    gold=[g['t'] for g in o['gold']], resp=resp, counts=o['counts'],
                    lanes={k: [t for t in v if start <= t <= end] for k, v in o['lanes'].items()}))
    enc.append(f"{key}\t{o['video']}\t{start}\t{end}\t{speed}")
s = json.dumps(out, ensure_ascii=False, indent=1)
assert 'StreamMind' not in s
open('static/gallery.js', 'w').write('window.GALLERY = ' + s + ';\n')
open('_work/encode.tsv', 'w').write('\n'.join(enc) + '\n')
for d in out: print(d['key'], d['scenario'], d['level'], d['end'], d['speed'], len(d['resp']))
