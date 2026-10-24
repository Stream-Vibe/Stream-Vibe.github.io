# Append ?v=<content hash> to the local CSS/JS references in index.html, so a browser holding a cached older
# script never runs it against a newer page (GitHub Pages serves static files with max-age=600).
import hashlib, re
h = open('index.html').read()
for f in ['static/style.css', 'static/main.js', 'static/gallery.js']:
    v = hashlib.md5(open(f, 'rb').read()).hexdigest()[:8]
    h = re.sub(re.escape(f) + r'(\?v=[0-9a-f]+)?"', f'{f}?v={v}"', h)
open('index.html', 'w').write(h)
print(re.findall(r'static/(?:style\.css|main\.js|gallery\.js)\?v=\w+', h))
