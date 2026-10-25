# StreamVibe project page

Source of https://stream-vibe.github.io/ — *StreamVibe: Proactive Video Agents for Evolving User Intent*.

Static site, no build step: `index.html`, `static/{style.css,main.js,gallery.js}`, animated SVGs in `static/svg/`.
Before pushing, run `python3 tools/stamp_assets.py` (cache-busting versions on CSS/JS).
Preview locally: `python3 -m http.server` and open http://localhost:8000.

Design: dark launch-page style (Inter + JetBrains Mono, 64 px grid, pointer spotlight on `.card`), paper figures on white `.paper` panels.
Chart palette on dark: blue `#3987e5`, coral `#e0704a`, violet `#8a6ff0` (validated), baselines `#3a4256`.

Regenerating assets (paths point at the cluster checkout; video work runs on a compute node):
- `tools/render_figs.py` — paper figure PDFs (Overleaf clone) → `static/img/*.webp`.
- Demo gallery (10 Physical + 10 Digital, shown as two endless marquee rows):
  `tools/mine_all.py` mines on-time StreamVibe reply windows over every trace → `_work/windows_all.json`;
  `tools/mine_gallery.py _work/windows_all.json _work/win_cands_all.json` keeps >=720p sources with nothing missed or stray, adds baselines;
  `tools/finalize_windows.py` holds the hand-reviewed picks (English UI, no tutorials, no burned-in text) → `static/gallery.js` + `_work/encode.tsv`;
  `tools/encode_gallery.sh` encodes `static/video/gallery/`.
- Promo video: `static/video/promo.mp4` is `code/talk/video/StreamVibe_promo_v3.mp4` (rebuild steps in the talk README).
- Animated SVGs in `static/svg/` are the talk diagrams (`code/talk/svg`) with the name replaced.
- Results are charts only: key-result charts and the explorer read numbers hard-coded in `static/main.js` (StreamVibe-Bench main table + paper Fig. 4); keep them in sync with the paper.
