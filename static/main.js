// Page behaviour: nav, reveal, hero parallax, demo player + gallery, key result charts, results explorer.
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

  // ---------- hero tagline: rotate the phrase every 3.2 s ----------
  const rot = $$('#rotator span');
  if (rot.length && !reduce) {
    let ri = 0;
    setInterval(() => {
      const prev = rot[ri]; prev.classList.remove('on'); prev.classList.add('out');
      setTimeout(() => prev.classList.remove('out'), 650);
      ri = (ri + 1) % rot.length; rot[ri].classList.add('on');
    }, 3200);
  }

  // ---------- hero: pointer parallax on the tilted video wall ----------
  const plane = $('.wall-plane'), hero = $('.hero');
  hero.addEventListener('mousemove', e => {
    const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
    plane.style.setProperty('--px', `${-x * 60}px`); plane.style.setProperty('--py', `${-y * 40}px`);
  });
  hero.addEventListener('mouseleave', () => { plane.style.setProperty('--px', '0px'); plane.style.setProperty('--py', '0px'); });
  // pause the wall videos once the hero is off screen
  new IntersectionObserver(([e]) => $$('.wall-plane video').forEach(v => e.isIntersecting ? v.play().catch(() => {}) : v.pause())).observe(hero);

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
    if (el.classList.contains('kc')) { $$('[data-w]', el).forEach(x => x.style.setProperty('--w', x.dataset.w)); $$('.db-dot.o', el).forEach(d => d.style.left = d.dataset.x + '%'); }
    if (el.classList.contains('level')) playChat(el);
  }), { threshold: 0.18 });
  $$('.stagger').forEach(g => [...g.children].forEach((ch, i) => { if (ch.classList.contains('rv')) ch.style.transitionDelay = `${i * 0.09}s`; }));
  $$('.rv').forEach(el => io.observe(el));
  // the three level cards play their conversation once, in order, when they come into view
  function playChat(card) {
    const msgs = $$('.mc', card); msgs.forEach(m => m.classList.add('hidden'));
    let i = 0;
    const step = () => {
      if (i >= msgs.length) return;
      const m = msgs[i++];
      if (m.classList.contains('a')) {
        const t = document.createElement('div'); t.className = 'mc a typing-dots show'; t.innerHTML = '<span class="typing"><i></i><i></i><i></i></span>';
        m.before(t); setTimeout(() => { t.remove(); m.classList.remove('hidden'); m.classList.add('show'); setTimeout(step, 450); }, 700);
      } else { m.classList.remove('hidden'); m.classList.add('show'); setTimeout(step, m.classList.contains('w') ? 600 : 500); }
    };
    setTimeout(step, 300);
  }
  // promo frame grows to full size as it scrolls into view
  const pf = $('#promoFrame');
  const growPromo = () => { const r = pf.getBoundingClientRect(); const p = Math.max(0, Math.min(1, 1 - (r.top - innerHeight * 0.15) / (innerHeight * 0.7))); pf.style.setProperty('--s', (0.9 + 0.1 * p).toFixed(4)); };
  addEventListener('scroll', growPromo, { passive: true }); growPromo();

  // ---------- card spotlight follows the pointer ----------
  document.addEventListener('mousemove', e => {
    const c = e.target.closest && e.target.closest('.card'); if (!c) return;
    const r = c.getBoundingClientRect(); c.style.setProperty('--mx', `${e.clientX - r.left}px`); c.style.setProperty('--my', `${e.clientY - r.top}px`);
  }, { passive: true });

  // ---------- lightbox ----------
  const lb = $('#lightbox');
  $$('.paper img:not(.anim-svg)').forEach(img => img.addEventListener('click', () => { $('img', lb).src = img.src; lb.classList.add('on'); }));
  lb.onclick = () => lb.classList.remove('on');
  addEventListener('keydown', e => { if (e.key === 'Escape') lb.classList.remove('on'); });

  // ---------- promo: play when visible ----------
  const promo = $('#promo');
  new IntersectionObserver(([e]) => { if (e.isIntersecting && promo.paused && !promo.dataset.touched) promo.play().catch(() => {}); else if (!e.isIntersecting) promo.pause(); }, { threshold: 0.5 }).observe(promo);
  promo.addEventListener('volumechange', () => promo.dataset.touched = 1);

  $('#copyBib').onclick = () => navigator.clipboard.writeText($('#bibText').textContent).then(() => {
    $('#copyBib').textContent = 'Copied!'; setTimeout(() => $('#copyBib').textContent = 'Copy', 1500);
  });

  $$('.anim-card .replay').forEach(b => b.onclick = () => playSvg($('.anim-svg', b.closest('.anim-card'))));

  // ---------- tabbed viewers (figures and animated diagrams); an animation restarts whenever its tab opens ----------
  $$('[data-viewer]').forEach(v => {
    const btns = $$('.tab-bar button[data-i]', v), panes = $$('.pane', v), rep = $('.replay', v);
    const show = i => {
      btns.forEach((b, k) => b.classList.toggle('on', k === i)); panes.forEach((p, k) => p.classList.toggle('on', k === i));
      const svg = $('.anim-svg', panes[i]); v.classList.toggle('has-anim', !!svg); if (svg && v.classList.contains('in')) playSvg(svg);
    };
    btns.forEach((b, i) => b.onclick = () => show(i));
    if (rep) rep.onclick = () => { const s = $('.pane.on .anim-svg', v); if (s) playSvg(s); };
  });

  // =====================================================================
  // Demo theater + gallery
  // =====================================================================
  const G = window.GALLERY;
  let cur = null, shown = new Set(), tvVisible = false;
  const tv = $('#tv'), chat = $('#tvChat'), lanes = $('#lanes');
  const fmt = t => `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;

  // two endless rows (Physical drifts left, Digital drifts right); each row holds its cards twice so the loop is seamless
  const card = d => {
    const others = Object.entries(d.counts).filter(([k]) => k !== 'StreamVibe').map(([, v]) => v);
    return `<div class="mcard" data-k="${d.key}"><div class="media"><img src="static/video/gallery/${d.key}.jpg" alt="" loading="lazy">
      <video muted loop playsinline preload="none" data-src="static/video/gallery/${d.key}.mp4"></video>
      <span class="lvl ${d.level}">${d.level} · ${esc(d.sub)}</span><span class="ttl">${esc(d.title)}</span></div>
      <div class="meta"><span>replies in clip</span><span><b>StreamVibe ${d.counts.StreamVibe}</b> · baselines ${Math.min(...others)}–${Math.max(...others)}</span></div></div>`;
  };
  $('#marquees').innerHTML = ['Physical', 'Digital'].map((env, i) => {
    const L = G.filter(d => d.env === env), html = L.map(card).join('');
    return `<div class="mrow${i ? ' rev' : ''}"><div class="mrow-head"><i></i>${env}<span>${L.length} clips · ${env === 'Physical' ? 'egocentric and everyday scenes' : 'desktop and web applications'}</span></div>
      <div class="mview"><div class="track" style="--dur:${L.length * 9}s">${html}${html}</div></div></div>`;
  }).join('');
  $$('#marquees .mcard').forEach(c => {
    const d = G.find(x => x.key === c.dataset.k), v = $('video', c);
    c.addEventListener('mouseenter', () => { if (!v.src) v.src = v.dataset.src; v.play().catch(() => {}); });
    c.addEventListener('mouseleave', () => v.pause());
    c.onclick = () => { load(d, true); $('#theater').scrollIntoView({ behavior: 'smooth', block: 'center' }); };
  });

  function events(d) {
    // the first request always opens the clip; later turns only if they fall inside it
    const ev = d.users.map((u, i) => ({ t: Math.max(u.t, d.start), kind: 'user', id: 'u' + i, u, first: i === 0 })).filter((e, i) => i === 0 || d.users[i].t >= d.start);
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
    $$('#marquees .mcard').forEach(c => c.classList.toggle('on', c.dataset.k === d.key));
    tv.src = `static/video/gallery/${d.key}.mp4`; tv.poster = `static/video/gallery/${d.key}.jpg`;
    $('#tvBadge').innerHTML = `<i></i>LIVE · ${d.level} intent · ${esc(d.sub)} · ${esc(d.env)}`;
    $('#tvSpeed').textContent = d.speed > 1 ? `${d.speed}×` : '1×';
    $('#tvTitle').textContent = d.title;
    buildLanes(d); reset();
    cur.ev.forEach(e => { if (e.t <= d.start + 0.05) { shown.add(e.id); render(e, true); } });
    if (play || tvVisible) tv.play().catch(() => $('#tvBig').classList.add('on'));
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
  tv.addEventListener('ended', () => setTimeout(() => { if (tv.ended) $('#tvRestart').click(); }, 3500));
  tv.addEventListener('play', () => { $('#tvPlay').textContent = '❚❚'; $('#tvBig').classList.remove('on'); });
  tv.addEventListener('pause', () => { $('#tvPlay').textContent = '▶'; if (!tv.ended) $('#tvBig').classList.add('on'); });
  $('#tvBig').onclick = () => tv.play();
  $('#tvPlay').onclick = () => tv.paused ? tv.play() : tv.pause();
  $('#tvRestart').onclick = () => { reset(); cur.ev.forEach(e => { if (e.t <= cur.start + 0.05) { shown.add(e.id); render(e, true); } }); tv.currentTime = 0; tv.play(); };
  lanes.addEventListener('click', e => {
    const a = $('.lane-area', lanes).getBoundingClientRect();
    const t = cur.start + Math.max(0, Math.min(1, (e.clientX - a.left) / a.width)) * (cur.end - cur.start);
    reset(); cur.ev.forEach(ev => { if (ev.t <= t) { shown.add(ev.id); render(ev, true); } });
    tv.currentTime = (t - cur.start) / cur.speed; tv.play().catch(() => {});
  });
  new IntersectionObserver(([e]) => { tvVisible = e.isIntersecting; if (tvVisible) tv.play().catch(() => {}); else tv.pause(); }, { threshold: 0.3 }).observe($('#theater'));
  load(G.find(d => d.env === 'Physical' && d.level === 'Implicit') || G[0]);

  // =====================================================================
  // Key result charts: dot-pair (dumbbell) rows and small horizontal bars, drawn as HTML so they animate with CSS
  // =====================================================================
  const tipEl = document.createElement('div'); tipEl.className = 'chart-tip global'; document.body.appendChild(tipEl);
  const hoverTip = (el, html) => {
    el.addEventListener('mousemove', e => { tipEl.innerHTML = html; tipEl.style.left = `${e.clientX + 14}px`; tipEl.style.top = `${e.clientY - 10}px`; tipEl.style.opacity = 1; });
    el.addEventListener('mouseleave', () => tipEl.style.opacity = 0);
  };
  function dumbbell(box, rows, lo, hi, oursName, baseName, dec = 2) {
    const x = v => (100 * (v - lo) / (hi - lo)).toFixed(2);
    box.innerHTML = `<div class="db">${rows.map(([lab, b, o]) => `
      <div class="db-row"><span class="db-lab">${lab}</span><span class="db-track"><span class="db-in">
        <i class="db-line" data-w="1" style="left:${x(b)}%;width:${x(o) - x(b)}%"></i>
        <i class="db-dot b" style="left:${x(b)}%"></i><i class="db-dot o" data-x="${x(o)}" style="left:${x(b)}%"></i>
        <span class="db-v b" style="left:${x(b)}%">${b.toFixed(dec)}</span><span class="db-v o" style="left:${x(o)}%">${o.toFixed(dec)}</span>
      </span></span><span class="db-delta"><span>+${(o - b).toFixed(dec === 2 ? 2 : 1)}</span></span></div>`).join('')}</div>`;
    $$('.db-row', box).forEach((r, i) => hoverTip(r, `<b>${rows[i][0]}</b><br>${oursName}: <b>${rows[i][2].toFixed(dec)}</b><br>${baseName}: ${rows[i][1].toFixed(dec)}`));
  }
  function hbars(box, groups) {
    box.innerHTML = groups.map(([title, items, max]) => `<div class="hb"><div class="hb-t">${title}</div>${items.map(([n, v, o]) => `
      <div class="hb-row${o ? ' o' : ''}"><span class="hb-n">${n}</span><span class="hb-tr"><i data-w="${(100 * v / max).toFixed(1)}%"></i></span><span class="hb-v">${v.toFixed(1)}</span></div>`).join('')}</div>`).join('');
    $$('.hb-row', box).forEach(r => hoverTip(r, `<b>${$('.hb-n', r).textContent}</b><br>${$('.hb-t', r.parentNode).textContent}: <b>${$('.hb-v', r).textContent}</b>`));
  }
  dumbbell($('#kBench'), [['Explicit', 5.88, 10.83], ['Implicit', 16.51, 19.13], ['Dynamic', 7.47, 8.91]], 0, 22, 'StreamVibe-VL (RL)', 'MMDuet2');
  hbars($('#kTransfer'), [
    ['EgoProactive · macro', [['StreamVibe-VL (RL)', 59.5, 1], ['StreamVibe-VL (SFT)', 53.0, 1], ['Qwen3.5-9B', 46.2], ['JoyAI-VL-Interaction', 41.0]], 65],
    ['IPIBench · understanding', [['StreamVibe-VL (RL)', 20.4, 1], ['StreamVibe-VL (SFT)', 8.3, 1], ['Qwen3.5-9B', 9.8], ['JoyAI-VL-Interaction', 7.4]], 24]]);
  dumbbell($('#kGeneral'), [['MVBench', 66.90, 69.30], ['Video-MME', 67.30, 68.70], ['Video-MME (sub.)', 70.00, 70.60], ['OVO-Bench', 57.71, 59.29]], 56, 72, 'StreamVibe-VL (RL)', 'Qwen3.5-9B', 1);

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
  // ranked horizontal bars per intent level; bars animate between metric/setting choices
  const MET = ['P', 'R', 'Timing F1', 'FPR', 'Answer score', 'Content F1'];
  let exK = 'traj', exM = 5;
  const COLS = { Explicit: '#3987e5', Implicit: '#e0704a', Dynamic: '#8a6ff0' };
  function drawExplorer() {
    const rows = R[exK].flatMap(([grp, rs]) => rs.map(([n, v]) => ({ n, v, grp })));
    const low = exM === 3, panels = $('#exPanels');
    if (!panels.children.length) panels.innerHTML = levels.map(l => `<div class="ex-panel" data-l="${l}"><h5><i style="background:${COLS[l]}"></i>${l} intents</h5><div class="ex-rows"></div></div>`).join('');
    levels.forEach((l, li) => {
      const j = li * 6 + exM, box = $(`.ex-panel[data-l="${l}"] .ex-rows`, panels);
      const sorted = rows.map(r => ({ ...r, x: r.v[j] })).sort((a, b) => low ? a.x - b.x : b.x - a.x);
      const max = Math.max(...sorted.map(r => r.x)) * 1.05 || 1;
      box.innerHTML = sorted.map(r => `<div class="ex-row${r.n.startsWith('StreamVibe') ? ' o' : ''}" data-n="${r.n}" data-g="${r.grp}" data-x="${r.x}">
        <span class="nm">${r.n}</span><span class="tr"><span class="bar" data-w="${100 * r.x / max}"></span></span><span class="v">${r.x.toFixed(1)}</span></div>`).join('');
      requestAnimationFrame(() => requestAnimationFrame(() => $$('.bar', box).forEach(b => b.style.width = b.dataset.w + '%')));
    });
    $('#exNote').textContent = (low ? 'lower is better · ' : 'higher is better · ') + (exK === 'traj' ? 'model runs over the whole stream with its own history' : 'gold history; streaming models do not support this setting');
    const tip = $('#exTip'), card = $('#explorer');
    $$('.ex-row', panels).forEach(r => {
      r.addEventListener('mousemove', e => {
        const cr = card.getBoundingClientRect();
        tip.innerHTML = `<b>${r.dataset.n}</b> <span class="muted">· ${r.dataset.g}</span><br>${r.closest('.ex-panel').dataset.l} · ${MET[exM]} <b>${(+r.dataset.x).toFixed(2)}</b>`;
        tip.style.left = `${Math.min(e.clientX - cr.left + 14, cr.width - 230)}px`; tip.style.top = `${e.clientY - cr.top - 12}px`; tip.style.opacity = 1;
      });
      r.addEventListener('mouseleave', () => tip.style.opacity = 0);
    });
  }
  $$('#exSet button').forEach(b => b.onclick = () => { $$('#exSet button').forEach(x => x.classList.toggle('on', x === b)); exK = b.dataset.k; drawExplorer(); });
  $$('#exMet button').forEach(b => b.onclick = () => { $$('#exMet button').forEach(x => x.classList.toggle('on', x === b)); exM = +b.dataset.m; drawExplorer(); });
  drawExplorer();
})();
