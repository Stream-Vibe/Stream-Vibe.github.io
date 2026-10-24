# StreamVibe project page

Source of https://stream-vibe.github.io/ — *StreamVibe: Proactive Video Agents for Evolving User Intent*.

Static site (no build step): `index.html`, `static/{style.css,main.js,demos.js}`.

- `tools/render_figs.py` re-renders `static/img/*.webp` from the paper figure PDFs (Overleaf clone).
- `tools/build_demos.py` regenerates `static/demos.js` from the talk demo metadata.
- `tools/encode_clips.sh` trims/encodes the demo clips (run on a compute node).

Preview locally: `python3 -m http.server` and open http://localhost:8000.
