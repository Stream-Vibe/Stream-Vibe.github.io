// Nav reveal, figure lightbox, interactive demo player, results table.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const esc = s => s.replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  const nav = $('.topnav');
  const onScroll = () => nav.classList.toggle('show', scrollY > innerHeight * 0.6);
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  document.querySelectorAll('.figure img').forEach(img => img.addEventListener('click', () => {
    const lb = document.createElement('div'); lb.className = 'lightbox';
    lb.innerHTML = `<img src="${img.src}" alt="">`; lb.onclick = () => lb.remove();
    document.body.appendChild(lb);
  }));
  addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.lightbox').forEach(l => l.remove()); });

  $('#copyBib').onclick = () => navigator.clipboard.writeText($('#bibText').textContent).then(() => {
    $('#copyBib').textContent = 'Copied!'; setTimeout(() => $('#copyBib').textContent = 'Copy', 1500);
  });

  // ---------------- demo player ----------------
  const D = window.DEMOS, levels = ['Explicit', 'Implicit', 'Dynamic'];
  const video = $('#demoVideo'), chat = $('#demoChat'), fill = $('#plFill'), marks = $('#plMarks');
  let cur = null, shown = new Set(), level = 'Implicit';
  const fmt = t => `0:${String(Math.floor(t)).padStart(2, '0')}`;

  levels.forEach(l => {
    const b = document.createElement('button'); b.textContent = `${l} intents`; b.dataset.l = l;
    b.onclick = () => selectLevel(l); $('#demoTabs').appendChild(b);
  });

  function selectLevel(l) {
    level = l;
    document.querySelectorAll('#demoTabs button').forEach(b => b.classList.toggle('on', b.dataset.l === l));
    const picker = $('#demoPicker'); picker.innerHTML = '';
    D.filter(d => d.level === l).forEach(d => {
      const th = document.createElement('div'); th.className = 'th'; th.dataset.k = d.key;
      th.innerHTML = `<img src="static/video/${d.key}.jpg" alt="" loading="lazy"><div><small>${esc(d.chip)}</small>${esc(d.title)}</div>`;
      th.onclick = () => load(d); picker.appendChild(th);
    });
    load(D.find(d => d.level === l));
  }

  function events(d) {
    const ev = d.users.map((u, i) => ({ t: u.t, kind: 'user', id: 'u' + i, u }));
    d.groups.forEach((g, i) => ev.push({ t: g.t, kind: 'help', id: 'g' + i, g }));
    return ev.sort((a, b) => a.t - b.t || (a.kind === 'user' ? -1 : 1));
  }

  function load(d) {
    cur = d; cur.ev = events(d);
    document.querySelectorAll('#demoPicker .th').forEach(t => t.classList.toggle('on', t.dataset.k === d.key));
    video.src = `static/video/${d.key}.mp4`; video.poster = `static/video/${d.key}.jpg`;
    reset();
    video.addEventListener('loadedmetadata', () => {
      marks.innerHTML = cur.ev.map(e => `<i class="${e.kind === 'user' ? 'mk-user' : 'mk-help'}" style="left:${100 * e.t / video.duration}%"></i>`).join('');
    }, { once: true });
    $('#plMeta').textContent = `${d.chip} · ${d.speed}× speed`;
    if (inView) video.play().catch(() => {});
  }

  function reset() {
    shown.clear();
    chat.innerHTML = '<div class="chat-hint">Responses appear here as the stream plays.</div>';
  }

  function render(e) {
    const hint = $('.chat-hint', chat); if (hint) hint.remove();
    const real = t => fmt(t * cur.speed);  // seconds into the original video segment
    if (e.kind === 'user') {
      const m = document.createElement('div'); m.className = 'msg user' + (e.u.update ? ' update' : '');
      m.innerHTML = `<span class="who">USER${e.u.update ? `<span class="upd">${esc(cur.update_label || 'Update')}</span>` : ''}<span class="ts">${real(e.t)}</span></span>${esc(e.u.text)}`;
      chat.appendChild(m);
    } else {
      const m = document.createElement('div'); m.className = 'msg ours';
      m.innerHTML = `<span class="who">STREAMVIBE-VL<span class="ts">${real(e.t)}</span></span>${esc(e.g.ours)}`;
      chat.appendChild(m);
      const bl = document.createElement('div'); bl.className = 'baselines';
      bl.innerHTML = e.g.base.map(b => `<div class="bl"><b>${esc(b.name)}</b><span class="tag" style="background:#${b.color}">${esc(b.tag)}</span>` +
        (b.text ? `<span class="txt">${esc(b.text)}</span>` : '<span class="silent">(no response)</span>') + '</div>').join('');
      chat.appendChild(bl);
    }
    chat.scrollTop = chat.scrollHeight;
  }

  video.addEventListener('timeupdate', () => {
    if (!cur) return;
    const t = video.currentTime;
    fill.style.width = `${100 * t / (video.duration || 1)}%`;
    cur.ev.forEach(e => { if (e.t <= t + 0.05 && !shown.has(e.id)) { shown.add(e.id); render(e); } });
  });
  video.addEventListener('ended', () => setTimeout(() => { reset(); video.currentTime = 0; video.play().catch(() => {}); }, 2500));
  video.addEventListener('play', () => $('#plPlay').textContent = '❚❚');
  video.addEventListener('pause', () => $('#plPlay').textContent = '▶');
  $('#plPlay').onclick = () => video.paused ? video.play() : video.pause();
  $('#plRestart').onclick = () => { reset(); video.currentTime = 0; video.play(); };
  $('.pl-bar').addEventListener('click', e => {
    const r = e.currentTarget.getBoundingClientRect(), t = (e.clientX - r.left) / r.width * video.duration;
    reset(); cur.ev.forEach(ev => { if (ev.t <= t) { shown.add(ev.id); render(ev); } });
    video.currentTime = t;
  });

  let inView = false;
  new IntersectionObserver(([en]) => {
    inView = en.isIntersecting;
    if (inView) video.play().catch(() => {}); else video.pause();
  }, { threshold: 0.35 }).observe($('.player'));

  selectLevel(level);

  // ---------------- results table ----------------
  const cols = ['P', 'R', 'F1', 'FPR', 'ANS', 'C-F1'], lowBetter = new Set([3]);
  const R = {
    point: [
      ['Proprietary Models', [
        ['Gemini-3.1-Pro', [62.34, 68.52, 65.28, 41.40, 45.22, 29.52, 70.92, 85.58, 77.56, 43.57, 67.46, 52.32, 62.87, 84.59, 72.13, 58.81, 51.15, 36.89]],
        ['GPT-Realtime-2.1', [57.78, 74.09, 64.93, 64.87, 51.10, 33.18, 69.67, 70.95, 70.30, 29.83, 55.92, 39.31, 62.99, 84.47, 72.17, 55.37, 45.64, 32.94]],
        ['Gemini-3.8-Flash', [60.34, 77.40, 67.81, 50.69, 51.37, 34.84, 81.55, 80.45, 81.00, 27.09, 82.63, 66.93, 62.96, 84.52, 72.16, 60.25, 60.56, 43.70]]]],
      ['Open-Source Offline Models', [
        ['Qwen3-VL-8B', [51.25, 82.28, 63.16, 89.05, 40.91, 25.84, 56.38, 57.85, 57.11, 83.71, 80.51, 45.98, 54.37, 87.56, 67.08, 93.88, 45.01, 30.19]],
        ['Qwen3.5-9B', [52.95, 91.36, 67.04, 81.45, 44.59, 29.89, 57.42, 61.23, 59.26, 49.17, 78.37, 46.45, 56.74, 90.93, 69.88, 78.89, 47.50, 33.19]],
        ['JoyAI-VL-Interaction', [52.50, 90.10, 66.34, 81.88, 40.06, 26.58, 58.38, 79.21, 67.22, 67.32, 81.63, 54.87, 57.48, 72.20, 64.00, 62.60, 45.23, 28.95]]]],
      ['Ours', [
        ['StreamVibe-VL (SFT)', [57.14, 62.90, 59.88, 47.90, 49.89, 29.88, 59.71, 85.64, 70.36, 71.34, 85.92, 60.46, 58.56, 58.85, 58.70, 49.13, 56.68, 33.27]],
        ['StreamVibe-VL (RL)', [57.33, 64.89, 60.88, 46.19, 55.32, 33.68, 61.59, 86.66, 72.01, 67.91, 85.11, 61.28, 58.94, 75.86, 66.34, 62.93, 59.25, 39.31]]]],
    ],
    traj: [
      ['Open-Source Offline Models', [
        ['Qwen3-VL-8B', [3.56, 40.05, 6.54, 19.30, 36.78, 2.40, 3.99, 35.54, 7.17, 26.46, 40.34, 2.89, 2.88, 48.89, 5.44, 18.64, 25.31, 1.38]],
        ['Qwen3.5-9B', [9.37, 47.62, 15.66, 19.30, 16.63, 2.60, 7.94, 52.48, 13.79, 14.56, 44.98, 6.20, 4.87, 51.65, 8.90, 20.95, 27.67, 2.46]],
        ['JoyAI-VL-Interaction', [4.67, 95.44, 8.90, 30.87, 20.21, 1.80, 4.39, 37.96, 7.87, 18.87, 46.83, 3.69, 3.15, 76.70, 6.05, 64.52, 21.64, 1.31]]]],
      ['Open-Source Streaming Models', [
        ['MMDuet2', [19.45, 38.65, 25.88, 7.90, 22.71, 5.88, 15.98, 36.50, 22.23, 4.13, 74.26, 16.51, 13.06, 35.51, 19.10, 5.24, 39.10, 7.47]],
        ['Mage-VL', [20.70, 50.25, 29.32, 6.11, 10.23, 3.00, 8.56, 51.94, 14.70, 5.50, 8.19, 1.20, 11.97, 52.88, 19.52, 6.20, 6.10, 1.19]],
        ['LiveStar', [14.96, 19.95, 17.10, 4.81, 3.60, 0.62, 6.84, 24.95, 10.74, 6.27, 25.43, 2.73, 7.29, 12.92, 9.32, 2.86, 8.05, 0.75]],
        ['ViSpeak', [20.66, 74.71, 32.37, 12.75, 10.19, 3.30, 8.41, 74.03, 15.10, 12.67, 62.98, 9.51, 13.51, 72.32, 22.77, 14.19, 16.85, 3.84]],
        ['VideoLLM-Online', [12.29, 5.04, 7.15, 1.44, 17.89, 1.28, 6.33, 17.66, 9.32, 5.32, 31.88, 2.97, 17.86, 14.75, 16.16, 1.28, 8.69, 1.40]]]],
      ['Ours', [
        ['StreamVibe-VL (SFT)', [18.20, 29.39, 22.48, 6.33, 38.93, 8.75, 18.49, 28.51, 22.43, 3.80, 61.79, 13.86, 10.01, 43.20, 16.25, 12.25, 38.98, 6.34]],
        ['StreamVibe-VL (RL)', [21.53, 34.48, 26.51, 2.02, 40.86, 10.83, 24.57, 28.20, 26.26, 1.49, 72.83, 19.13, 14.80, 30.65, 19.96, 5.68, 44.62, 8.91]]]],
    ],
  };

  function drawTable(k) {
    const rows = R[k].flatMap(([, rs]) => rs);
    const rank = j => {  // best and second-best value of column j over the whole block
      const v = [...new Set(rows.map(r => r[1][j]))].sort((a, b) => lowBetter.has(j % 6) ? a - b : b - a);
      return [v[0], v[1]];
    };
    const rk = Array.from({ length: 18 }, (_, j) => rank(j));
    let h = '<thead><tr><th rowspan="2">Model</th>' + levels.map(l => `<th colspan="6" class="cat">${l}</th>`).join('') + '</tr><tr>' +
      levels.map(() => cols.map((c, i) => `<th${i === 0 ? ' class="cat"' : ''}>${c}${lowBetter.has(i) ? '↓' : '↑'}</th>`).join('')).join('') + '</tr></thead><tbody>';
    R[k].forEach(([grp, rs]) => {
      h += `<tr class="grp"><td colspan="19">${grp}</td></tr>`;
      rs.forEach(([name, v]) => {
        const ours = name.startsWith('StreamVibe');
        h += `<tr${ours ? ' class="ours"' : ''}><td>${ours ? `<b>${name}</b>` : name}</td>` + v.map((x, j) => {
          const c = [j % 6 === 0 ? 'sep' : '', j % 6 === 5 ? 'shade' : '', x === rk[j][0] ? 'best' : x === rk[j][1] ? 'second' : ''].filter(Boolean).join(' ');
          return `<td class="${c}">${x.toFixed(2)}</td>`;
        }).join('') + '</tr>';
      });
    });
    $('#resTable').innerHTML = h + '</tbody>';
  }
  document.querySelectorAll('#resSeg button').forEach(b => b.onclick = () => {
    document.querySelectorAll('#resSeg button').forEach(x => x.classList.toggle('on', x === b)); drawTable(b.dataset.k);
  });
  drawTable('traj');
})();
