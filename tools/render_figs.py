# Render the paper's figure PDFs to web images.
import pymupdf, sys
from PIL import Image
P = '/home/chengzhiliu_google_com/code/overleaf_streamvibe/'
figs = {'teaser': 'intro2-balanced.pdf', 'bench': 'fig2.pdf', 'method': 'method11.pdf',
        'transfer': 'fig4.pdf', 'diagnostics': 'fig5.pdf', 'ablation': 'figure/rq234_analysis.pdf', 'cases': 'fig7.pdf'}
for k, f in figs.items():
    doc = pymupdf.open(P + f); pg = doc[0]
    txt = pg.get_text()
    print(k, 'pages', len(doc), 'StreamMind' in txt, 'StreamHunch' in txt, 'StreamVibe' in txt, pg.rect)
    pix = pg.get_pixmap(dpi=300 if pg.rect.width < 700 else 200, alpha=False)
    im = Image.frombytes('RGB', (pix.width, pix.height), pix.samples)
    if im.width > 2400: im = im.resize((2400, round(im.height * 2400 / im.width)), Image.LANCZOS)
    im.save(f'static/img/{k}.webp', quality=90, method=6)
    print('  ->', im.size)
