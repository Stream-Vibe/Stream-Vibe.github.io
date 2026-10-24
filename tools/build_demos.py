# Convert the talk's demos.json (output-time stamps, with freeze holds) to clip-time data for the page.
import json
src = json.load(open('/home/chengzhiliu_google_com/code/talk/video/demos.json'))
out = []
for d in src:
    sp, st = d['speed'], d['start']
    clip = lambda t_src: round((t_src - st) / sp, 2)
    def users_clip(t_out):  # undo the freezes inserted at earlier holds
        n = sum(1 for g in d['groups'] if g['t_out'] < t_out - 1e-6)
        return round(max(0.0, t_out - n * d['freeze']), 2)
    out.append({
        'key': d['key'], 'level': d['level'], 'chip': d['chip'], 'title': d['title'], 'speed': sp,
        'users': [{'t': users_clip(u['t_out']), 'text': u['text'], 'update': u['update']} for u in d['users']],
        'groups': [{'t': clip(g['t_src']), 'ours': g['ours'],
                    'base': [{k: b[k] for k in ('name', 'text', 'tag', 'color')} for b in g['base']]} for g in d['groups']],
        'update_label': d.get('update_label', ''),
    })
order = {'Explicit': 0, 'Implicit': 1, 'Dynamic': 2}
out.sort(key=lambda x: order[x['level']])
s = json.dumps(out, ensure_ascii=False, indent=1)
assert 'StreamMind' not in s and 'StreamHunch' not in s
open('static/demos.js', 'w').write('window.DEMOS = ' + s + ';\n')
for x in out: print(x['key'], [u['t'] for u in x['users']], [g['t'] for g in x['groups']])
