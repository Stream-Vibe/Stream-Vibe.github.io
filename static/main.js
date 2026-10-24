// Page effects (reveal, counters, hero canvas, typer, tilt), demo theater + gallery, results chart and table.
(() => {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---------- nav, progress, active link ----------
  const nav = $('#topnav'), prog = $('#progress');
  const secs = $$('.topnav .links a').map(a => [a, $(a.getAttribute('href'))]);
  const onScroll = () => {
    nav.classList.toggle('show', scrollY > innerHeight * 0.7);
    prog.style.width = `${100 * scrollY / (document.body.scrollHeight - innerHeight)}%`;
    let cur = null; secs.forEach(([a, s]) => { if (s && s.getBoundingClientRect().top < 140) cur = a; });
    secs.forEach(([a]) => a.classList.toggle('active', a === cur));
  };
  addEventListener('scroll', onScroll, { passive: true }); onScroll();

  // ---------- title word stagger ----------
  $$('.title .w').forEach((w, i) => w.style.animationDelay = `${0.25 + i * 0.08}s`);

  // ---------- typer ----------
  const lines = ['Watches the stream.', 'Infers the intent.', 'Keeps up as it changes.', 'Speaks only when it helps.'];
  let li = 0, ci = 0, del = false;
  const typer = $('#typer');
  (function tick() {
    const L = lines[li];
    typer.textContent = L.slice(0, ci);
    if (!del && ci === L.length) { del = true; return setTimeout(tick, 1500); }
    if (del && ci === 0) { del = false; li = (li + 1) % lines.length; }
    ci += del ? -1 : 1;
    setTimeout(tick, del ? 28 : 55);
  })();

  // ---------- hero canvas: frames streaming past ----------
  const cv = $('#streamCanvas'), cx = cv.getContext('2d');
  let W, H, parts = [];
  const resize = () => { W = cv.width = cv.offsetWidth * devicePixelRatio; H = cv.height = cv.offsetHeight * devicePixelRatio; };
  resize(); addEventListener('resize', resize);
  for (let i = 0; i < 70; i++) parts.push({ x: Math.random(), y: Math.random(), v: 0.0006 + Math.random() * 0.0016, r: 0.6 + Math.random() * 1.8, h: Math.random() < 0.5 ? 210 : (Math.random() < 0.5 ? 15 : 265) });
  let heroVisible = true;
  new IntersectionObserver(([e]) => heroVisible = e.isIntersecting).observe($('.hero'));
  (function draw() {
    if (heroVisible && !reduce) {
      cx.clearRect(0, 0, W, H);
      parts.forEach(p => {
        p.x += p.v; if (p.x > 1.05) { p.x = -0.05; p.y = Math.random(); }
        const x = p.x * W, y = p.y * H, len = 40 * p.r * devicePixelRatio;
        const g = cx.createLinearGradient(x - len, y, x, y);
        g.addColorStop(0, `hsla(${p.h},90%,70%,0)`); g.addColorStop(1, `hsla(${p.h},90%,72%,.75)`);
        cx.strokeStyle = g; cx.lineWidth = p.r * devicePixelRatio; cx.beginPath(); cx.moveTo(x - len, y); cx.lineTo(x, y); cx.stroke();
      });
    }
    requestAnimationFrame(draw);
  })();

  // ---------- reveal + counters + animated svgs ----------
  const countUp = el => {
    const to = +el.dataset.to, dec = +(el.dataset.dec || 0), pre = el.dataset.pre || '', suf = el.dataset.suf || '';
    const t0 = performance.now(), dur = 1600;
    const step = now => {
      const p = Math.min(1, (now - t0) / dur), e = 1 - Math.pow(1 - p, 3);
      el.textContent = pre + (to * e).toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }) + suf;
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const playSvg = img => { img.src = `${img.dataset.src}?t=${Date.now()}`; };
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target; el.classList.add('in'); io.unobserve(el);
    $$('.num[data-to]', el).forEach(countUp);
    if (el.matches('.num[data-to]')) countUp(el);
    $$('.anim-svg', el).forEach(playSvg);
    if (el.dataset.chat) miniChat(el);
    if (el.id === 'chartCard') drawChart(true);
  }), { threshold: 0.18 });
  $$('.rv').forEach(el => io.observe(el));
  $$('.replay').forEach(b => b.onclick = () => playSvg($('#' + b.dataset.for)));

  // ---------- tilt ----------
  $$('.tilt').forEach(el => {
    el.addEventListener('mousemove', e => {
      const r = el.getBoundingClientRect(), x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-4px)`;
    });
    el.addEventListener('mouseleave', () => el.style.transform = '');
  });

  // ---------- level mini chats (looping) ----------
  function miniChat(card) {
    const box = $('.mini-chat', card), script = JSON.parse(card.dataset.chat);
    let i = 0;
    const next = () => {
      if (i === script.length) { i = 0; return setTimeout(() => { box.innerHTML = ''; next(); }, 2600); }
      const [k, t] = script[i++];
      $$('.mc.w', box).forEach(n => n.remove());
      const m = document.createElement('div'); m.className = 'mc ' + k;
      m.textContent = k === 'w' ? 'watching… silent' : t; box.appendChild(m);
      setTimeout(next, k === 'w' ? 1300 : 1100);
    };
    next();
  }

  // ---------- lightbox ----------
  const lb = $('#lightbox');
  $$('.figure img').forEach(img => img.addEventListener('click', () => { $('img', lb).src = img.src; lb.classList.add('on'); }));
  lb.onclick = () => lb.classList.remove('on');
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('on'); });

  // ---------- promo: play when visible ----------
  const promo = $('#promo');
  new IntersectionObserver(([e]) => { if (e.isIntersecting && promo.paused && !promo.dataset.touched) promo.play().catch(() => {}); else if (!e.isIntersecting) promo.pause(); }, { threshold: 0.5 }).observe(promo);
  promo.addEventListener('volumechange', () => promo.dataset.touched = 1);

  $('#copyBib').onclick = () => navigator.clipboard.writeText($('#bibText').textContent).then(() => {
    $('#copyBib').textContent = 'Copied!'; setTimeout(() => $('#copyBib').textContent = 'Copy', 1500);
  });

  // ---------- figure tabs ----------
  $$('#figTabs .tab-bar button').forEach(b => b.onclick = () => {
    $$('#figTabs .tab-bar button').forEach(x => x.classList.toggle('on', x === b));
    $$('#figTabs .tabfig').forEach((f, i) => f.classList.toggle('on', i === +b.dataset.i));
  });

  // =====================================================================
  // Demo theater + gallery
  // =====================================================================
  const G = window.GALLERY;
  const SCEN = ['All', ...new Set(G.map(d => d.scenario))], LEVELS = ['All levels', 'Explicit', 'Implicit', 'Dynamic'];
  let scen = 'All', lvl = 'All levels', cur = null, shown = new Set(), tvVisible = false;
  const tv = $('#tv'), chat = $('#tvChat'), lanes = $('#lanes');
  const fmt = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

  SCEN.forEach(s => {
    const b = document.createElement('button'); b.dataset.s = s;
    b.innerHTML = `${esc(s)}<span class="ct">${s === 'All' ? G.length : G.filter(d => d.scenario === s).length}</span>`;
    b.onclick = () => { scen = s; filter(); }; $('#scenChips').appendChild(b);
  });
  LEVELS.forEach(l => {
    const b = document.createElement('button'); b.dataset.l = l; b.textContent = l;
    b.onclick = () => { lvl = l; filter(); }; $('#levelChips').appendChild(b);
  });
  G.forEach(d => {
    const c = document.createElement('div'); c.className = 'card-d'; c.dataset.k = d.key;
    const others = Object.entries(d.counts).filter(([k]) => k !== 'StreamVibe').map(([, v]) => v);
    c.innerHTML = `<div class="media"><img src="static/video/gallery/${d.key}.jpg" alt="" loading="lazy"><video muted loop playsinline preload="none" data-src="static/video/gallery/${d.key}.mp4"></video>
      <span class="lvl ${d.level}">${d.level} · ${esc(d.sub)}</span><div class="play"><span>▶</span></div></div>
      <div class="info"><div class="scn">${esc(d.scenario)}</div><div class="ttl">${esc(d.title)}</div>
      <div class="cmp">replies: <b>StreamVibe ${d.counts.StreamVibe}</b> · baselines ${Math.min(...others)}–${Math.max(...others)}</div></div>`;
    const v = $('video', c);
    c.addEventListener('mouseenter', () => { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); });
    c.addEventListener('mouseleave', () => v.pause());
    c.onclick = () => { load(d, true); $('#theater').scrollIntoView({ behavior: 'smooth', block: 'center' }); };
    $('#grid').appendChild(c);
  });

  function filter() {
    $$('#scenChips button').forEach(b => b.classList.toggle('on', b.dataset.s === scen));
    $$('#levelChips button').forEach(b => b.classList.toggle('on', b.dataset.l === lvl));
    const vis = G.filter(d => (scen === 'All' || d.scenario === scen) && (lvl === 'All levels' || d.level === lvl));
    $$('#grid .card-d').forEach(c => c.classList.toggle('hide', !vis.some(d => d.key === c.dataset.k)));
    if (vis.length && !vis.includes(cur)) load(vis[0]);
  }

  function events(d) {
    const ev = d.users.map((u, i) => ({ t: Math.max(u.t, d.start), kind: 'user', id: 'u' + i, u, first: i === 0 }));
    d.resp.forEach((r, i) => ev.push({ t: r.t, kind: 'resp', id: 'r' + i, r }));
    return ev.sort((a, b) => a.t - b.t || (a.kind === 'user' ? -1 : 1));
  }

  function buildLanes(d) {
    const rows = Object.entries(d.lanes);
    const span = d.end - d.start, x = t => `${Math.max(0, Math.min(100, 100 * (t - d.start) / span))}%`;
    lanes.innerHTML = rows.map(([name, ts]) => `<div class="lane${name === 'StreamVibe' ? ' ours' : ''}"><span class="nm">${esc(name)}</span>
      <div class="tr">${ts.map(t => `<i class="dot" data-t="${t}" style="left:${x(t)}"></i>`).join('')}</div><span class="ct">${d.counts[name]}×</span></div>`).join('') +
      `<div class="lane-area">${d.gold.filter(t => t >= d.start - 2 && t <= d.end).map(t => `<div class="goldband" style="left:calc(${x(t - 2)});width:${100 * 4 / span}%"></div>`).join('')}<div class="playhead" id="ph"></div></div>`;
  }

  function load(d, play) {
    cur = d; cur.ev = events(d);
    $$('#grid .card-d').forEach(c => c.classList.toggle('on', c.dataset.k === d.key));
    tv.src = `static/video/gallery/${d.key}.mp4`; tv.poster = `static/video/gallery/${d.key}.jpg`;
    $('#tvBadge').innerHTML = `<i></i>LIVE · ${esc(d.scenario)} · ${d.level} · ${esc(d.sub)}`;
    $('#tvSpeed').textContent = d.speed > 1 ? `${d.speed}×` : '1×';
    $('#tvTitle').textContent = d.title;
    buildLanes(d); reset();
    if (play || tvVisible) tv.play().catch(() => {});
  }
  function reset() { shown.clear(); chat.innerHTML = '<div class="chat-hint">The conversation appears here as the stream plays.</div>'; $$('.dot', lanes).forEach(x => x.classList.remove('lit')); }

  function render(e, instant) {
    const hint = $('.chat-hint', chat); if (hint) hint.remove();
    if (e.kind === 'user') {
      const m = document.createElement('div'); m.className = 'msg user' + (e.first ? '' : ' upd');
      m.innerHTML = `<span class="who"><span>USER${e.first ? '' : ' · NEW REQUEST'}</span><span class="ts">${fmt(e.t)}</span></span>${esc(e.u.text)}`;
      chat.appendChild(m);
    } else {
      const m = document.createElement('div'); m.className = 'msg ours';
      const head = `<span class="who"><span>STREAMVIBE-VL${e.r.hit ? ' <span class="hit">✓ on time</span>' : ''}</span><span class="ts">${fmt(e.t)}</span></span>`;
      chat.appendChild(m);
      const finish = () => {
        m.innerHTML = head + esc(e.r.text);
        if (e.r.base) {
          const row = document.createElement('div'); row.className = 'base-row';
          row.innerHTML = '<span class="lbl">Baselines at this help point</span>' + e.r.base.map(b =>
            `<span class="bchip"><b>${esc(b.name)}</b><span class="t" style="background:#${b.color}">${esc(b.tag)}</span>` +
            `<span class="pop">${b.text ? esc(b.text) : '<i>(no response)</i>'}</span></span>`).join('');
          m.after(row);
        }
        chat.scrollTop = chat.scrollHeight;
      };
      if (instant) finish(); else { m.innerHTML = head + '<span class="typing"><i></i><i></i><i></i></span>'; setTimeout(finish, 450); }
      if (!instant) { const f = $('#tvFlash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
    }
    chat.scrollTop = chat.scrollHeight;
  }

  tv.addEventListener('timeupdate', () => {
    if (!cur) return;
    const t = cur.start + tv.currentTime * cur.speed;
    const ph = $('#ph'); if (ph) ph.style.left = `${Math.min(100, 100 * (t - cur.start) / (cur.end - cur.start))}%`;
    $$('.dot', lanes).forEach(x => x.classList.toggle('lit', +x.dataset.t <= t));
    cur.ev.forEach(e => { if (e.t <= t + 0.05 && !shown.has(e.id)) { shown.add(e.id); render(e); } });
  });
  tv.addEventListener('ended', () => setTimeout(() => { if (tv.ended) { reset(); tv.currentTime = 0; tv.play().catch(() => {}); } }, 3500));
  tv.addEventListener('play', () => $('#tvPlay').textContent = '❚❚');
  tv.addEventListener('pause', () => $('#tvPlay').textContent = '▶');
  $('#tvPlay').onclick = () => tv.paused ? tv.play() : tv.pause();
  $('#tvRestart').onclick = () => { reset(); tv.currentTime = 0; tv.play(); };
  lanes.addEventListener('click', e => {
    const a = $('.lane-area', lanes).getBoundingClientRect();
    const t = cur.start + Math.max(0, Math.min(1, (e.clientX - a.left) / a.width)) * (cur.end - cur.start);
    reset(); cur.ev.forEach(ev => { if (ev.t <= t) { shown.add(ev.id); render(ev, true); } });
    tv.currentTime = (t - cur.start) / cur.speed; tv.play().catch(() => {});
  });
  new IntersectionObserver(([e]) => { tvVisible = e.isIntersecting; if (tvVisible) tv.play().catch(() => {}); else tv.pause(); }, { threshold: 0.3 }).observe($('#theater'));
  filter();

  // =====================================================================
  // Results chart: trajectory Content F1 by intent level (grouped bars)
  // =====================================================================
  const CH = { cats: ['Explicit', 'Implicit', 'Dynamic'],
    series: [['StreamVibe-VL (RL)', '#2f6fd1', [10.83, 19.13, 8.91]], ['MMDuet2', '#d9653b', [5.88, 16.51, 7.47]], ['ViSpeak', '#7a57b5', [3.30, 9.51, 3.84]]] };
  $('#chartLegend').innerHTML = CH.series.map(([n, c]) => `<span><i style="background:${c}"></i>${n}</span>`).join('');
  function drawChart(animate) {
    const w = 900, h = 300, m = { l: 44, r: 10, t: 14, b: 34 }, iw = w - m.l - m.r, ih = h - m.t - m.b, max = 20;
    const y = v => m.t + ih - ih * v / max, gw = iw / CH.cats.length, bw = 46, gap = 4;
    let s = `<svg viewBox="0 0 ${w} ${h}" role="img" aria-label="Content F1 by intent level">`;
    for (let v = 0; v <= max; v += 5) s += `<line x1="${m.l}" x2="${w - m.r}" y1="${y(v)}" y2="${y(v)}" stroke="#e6e6e3" stroke-width="1"/><text x="${m.l - 8}" y="${y(v) + 4}" text-anchor="end" font-size="12" fill="#52514e">${v}</text>`;
    CH.cats.forEach((c, ci) => {
      const gx = m.l + gw * ci + gw / 2 - (CH.series.length * (bw + gap) - gap) / 2;
      CH.series.forEach(([n, col, vals], si) => {
        const v = vals[ci], x = gx + si * (bw + gap), top = y(v), hh = m.t + ih - top;
        s += `<path class="bar" data-n="${n}" data-c="${c}" data-v="${v}" d="M${x},${m.t + ih} V${top + 4} q0,-4 4,-4 h${bw - 8} q4,0 4,4 V${m.t + ih} Z" fill="${col}"
          style="transform-origin:${x}px ${m.t + ih}px;${animate ? `transform:scaleY(0);transition:transform .9s cubic-bezier(.2,.8,.2,1) ${0.1 * ci + 0.08 * si}s` : ''}"/>`;
        if (si === 0) s += `<text x="${x + bw / 2}" y="${top - 6}" text-anchor="middle" font-size="12" font-weight="700" fill="#0b0b0b">${v.toFixed(2)}</text>`;
        s += `<rect x="${x - 2}" y="${m.t}" width="${bw + 4}" height="${ih}" fill="transparent" class="hit" data-n="${n}" data-c="${c}" data-v="${v}"/>`;
      });
      s += `<text x="${m.l + gw * ci + gw / 2}" y="${h - 10}" text-anchor="middle" font-size="13" font-weight="600" fill="#0b0b0b">${c}</text>`;
    });
    $('#chart').innerHTML = s + '</svg>';
    if (animate) requestAnimationFrame(() => requestAnimationFrame(() => $$('#chart .bar').forEach(b => b.style.transform = 'scaleY(1)')));
    const tip = $('#chartTip'), card = $('#chartCard');
    $$('#chart .hit').forEach(r => {
      r.addEventListener('mousemove', e => {
        const cr = card.getBoundingClientRect();
        tip.innerHTML = `<b>${r.dataset.n}</b><br>${r.dataset.c} intents · Content F1 <b>${(+r.dataset.v).toFixed(2)}</b>`;
        tip.style.left = `${e.clientX - cr.left + 14}px`; tip.style.top = `${e.clientY - cr.top - 10}px`; tip.style.opacity = 1;
        $$('#chart .bar').forEach(b => b.classList.toggle('dim', !(b.dataset.n === r.dataset.n && b.dataset.c === r.dataset.c)));
      });
      r.addEventListener('mouseleave', () => { tip.style.opacity = 0; $$('#chart .bar').forEach(b => b.classList.remove('dim')); });
    });
  }
  drawChart(false);

  // =====================================================================
  // Results table
  // =====================================================================
  const cols = ['P', 'R', 'F1', 'FPR', 'ANS', 'C-F1'], lowBetter = new Set([3]), levels = ['Explicit', 'Implicit', 'Dynamic'];
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
    const rk = Array.from({ length: 18 }, (_, j) => {
      const v = [...new Set(rows.map(r => r[1][j]))].sort((a, b) => lowBetter.has(j % 6) ? a - b : b - a);
      return [v[0], v[1]];
    });
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
  $$('#resSeg button').forEach(b => b.onclick = () => { $$('#resSeg button').forEach(x => x.classList.toggle('on', x === b)); drawTable(b.dataset.k); });
  drawTable('traj');
})();
