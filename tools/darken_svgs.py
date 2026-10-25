# Recolor the talk's animated diagrams (light theme) for the dark page; also swaps the old model name.
import re
SRC = '/home/chengzhiliu_google_com/code/talk/svg/'
MAP = {  # light-theme colour -> dark-theme colour
    '#1B2340': '#E7ECF5', '#6B7280': '#8C96AA', '#B8C0CF': '#3A4358', '#9AA3B5': '#56607A', '#D9DEE8': '#2C3550',
    '#F4F6FA': '#121828', '#F3EEFF': '#1C1735', '#E8F7F4': '#0E2522', '#E6F6EC': '#0F2519', '#0F1A33': '#C8D6F0',
    '#2F6FDB': '#5B9BFF', '#7C4DDB': '#A58BFF', '#1F9D55': '#3CCF8E', '#0E9F8E': '#2BD4BD', '#E5484D': '#FF6B6B',
}
for name in ['formulation', 'protocols', 'pipeline']:
    s = open(SRC + name + '.svg').read().replace('StreamMind', 'StreamVibe')
    s = re.sub(r'(<(?:rect|path|circle|ellipse|polygon)\b[^>]*?)fill="#FFFFFF"', r'\1fill="#101624"', s, flags=re.I)  # panels and background
    for a, b in MAP.items():
        s = re.sub(re.escape(a), b, s, flags=re.I)
    s = s.replace('<style>', '<style>\ntext:not([fill]) { fill: #E7ECF5; }', 1)  # unfilled text defaults to black
    open(f'static/svg/{name}.svg', 'w').write(s)
    print(name, 'white text kept:', len(re.findall(r'<text[^>]*fill="#FFFFFF"', s, flags=re.I)))
