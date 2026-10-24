# StreamVibe project page

Source of https://stream-vibe.github.io/ — *StreamVibe: Proactive Video Agents for Evolving User Intent*.

Static site, no build step: `index.html`, `static/{style.css,main.js,gallery.js}`, animated SVGs in `static/svg/`.
Preview locally: `python3 -m http.server` and open http://localhost:8000.

Regenerating assets (paths point at the cluster checkout; video work runs on a compute node):
- `tools/render_figs.py` — paper figure PDFs (Overleaf clone) → `static/img/*.webp`.
- Demo gallery (5 per intent level): `tools/mine_gallery.py` takes the on-time reply windows mined by `code/talk/scripts/promo3/mine.py`
  (`windows.json`), keeps >=720p sources with nothing missed or stray inside the window, adds baseline behaviour → `_work/win_cands.json`;
  `tools/finalize_windows.py` holds the hand-reviewed picks (English UI, no tutorials, no burned-in text) → `static/gallery.js` + `_work/encode.tsv`;
  `tools/encode_gallery.sh` encodes `static/video/gallery/`. (`build_gallery.py`/`finalize_gallery.py` are the earlier whole-video version.)
- Promo video: `static/video/promo.mp4` is `code/talk/video/StreamVibe_promo_v3.mp4` (rebuild steps in the talk README). `tools/promo/` keeps the older v2 renderer for reference.
- Animated SVGs in `static/svg/` are the talk diagrams (`code/talk/svg`) with the name replaced.
- Results are charts only (no tables): the Content-F1 bars and the per-metric explorer read the main-results numbers hard-coded in `static/main.js`; keep them in sync with the paper.
