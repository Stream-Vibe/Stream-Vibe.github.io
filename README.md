# StreamVibe project page

Source of https://stream-vibe.github.io/ — *StreamVibe: Proactive Video Agents for Evolving User Intent*.

Static site, no build step: `index.html`, `static/{style.css,main.js,gallery.js}`, animated SVGs in `static/svg/`.
Preview locally: `python3 -m http.server` and open http://localhost:8000.

Regenerating assets (paths point at the cluster checkout; video work runs on a compute node):
- `tools/render_figs.py` — paper figure PDFs (Overleaf clone) → `static/img/*.webp`.
- Demo gallery: `tools/build_gallery.py` scores candidates (source ≥720p only) → `_work/gallery_hires.json`;
  `tools/finalize_gallery.py` holds the hand-reviewed picks (English UI, clear contrast) → `static/gallery.js` + `_work/encode.tsv`;
  `tools/encode_gallery.sh` encodes `static/video/gallery/`.
- Promo video: `static/video/promo.mp4` is `code/talk/video/StreamVibe_promo_v3.mp4` (rebuild steps in the talk README). `tools/promo/` keeps the older v2 renderer for reference.
- Animated SVGs in `static/svg/` are the talk diagrams (`code/talk/svg`) with the name replaced.
- Main-results table and the Content-F1 chart data are hard-coded in `static/main.js`; keep them in sync with the paper.
