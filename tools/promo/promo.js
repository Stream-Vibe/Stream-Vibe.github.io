// StreamVibe promo v2: every frame is a pure function of time t (seconds).
// render.js calls window.renderFrame(t) and screenshots the stage; nothing here uses CSS animations.
const TALK = 'file:///home/chengzhiliu_google_com/code/talk/';
const MEDIA = TALK + 'video/promo2/media/';
const LOGO = TALK + 'figs/streamhunch-intent-logo-light-blue.png';
const C = { blue: '#4C8DFF', teal: '#19C2AE', purple: '#A07BFF', coral: '#FF6B6B', orange: '#FF9F5A', gray: '#8A94A8',
  ink: '#141B33', muted: '#AEB9CF', soft: '#D5DCEA', green: '#2BD48A' };
const FPS = 30;

// ---------- helpers ----------
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
const lerp = (a, b, p) => a + (b - a) * p;
const P = (t, a, d) => clamp((t - a) / d);
const oc = (p) => 1 - Math.pow(1 - p, 3);
const oq = (p) => 1 - Math.pow(1 - p, 5);
const ioc = (p) => (p < 0.5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2);
const ob = (p) => { const c1 = 1.70158, c3 = c1 + 1; return p <= 0 ? 0 : 1 + c3 * Math.pow(p - 1, 3) + c1 * Math.pow(p - 1, 2); };
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const pad = (n, w) => String(n).padStart(w, '0');
const mmss = (s) => `${Math.floor(s / 60)}:${pad(Math.floor(s % 60), 2)}`;

function mk(parent, css = '', html = '', cls = '') {
  const e = document.createElement('div');
  if (cls) e.className = cls;
  e.style.cssText = css;
  if (html) e.innerHTML = html;
  parent.appendChild(e);
  return e;
}
function img(parent, css, cls = 'frame') {
  const e = document.createElement('img');
  e.className = cls;
  e.style.cssText = css;
  parent.appendChild(e);
  return e;
}
let pending = [];
function setSrc(e, url) {
  if (e._src === url) return;
  e._src = url;
  e.src = url;
  pending.push(e.decode().catch(() => {}));
}
function S(e, o) { for (const k in o) e.style[k] = o[k]; }
// appear at a (dur din), disappear at b (dur dout)
const vis = (t, a, b, din = 0.5, dout = 0.5) => oc(P(t, a, din)) * (1 - P(t, b, dout));

// words: segments [[text, cls]] -> word spans
function words(parent, segs, css = '') {
  const box = mk(parent, css);
  const spans = [];
  for (const [text, cls] of segs) {
    for (const w of text.split(/(?<= )/)) {
      const s = document.createElement('span');
      s.className = 'w' + (cls ? ' ' + cls : '');
      s.textContent = w;
      box.appendChild(s);
      spans.push(s);
    }
  }
  box._spans = spans;
  return box;
}
function animWords(box, t, start, stagger = 0.06, dur = 0.6, dy = 34) {
  box._spans.forEach((s, i) => {
    const p = oc(P(t, start + i * stagger, dur));
    S(s, { opacity: p, transform: `translateY(${(1 - p) * dy}px)`, filter: p < 1 ? `blur(${(1 - p) * 8}px)` : 'none' });
  });
}
function type(e, text, t, start, cps = 55, caret = true) {
  const n = clamp(Math.floor((t - start) * cps), 0, text.length);
  const on = t >= start && n < text.length && caret;
  e.innerHTML = esc(text.slice(0, n)) + (on ? '<span class="caret"></span>' : '');
}
function counter(e, value, t, start, dur, fmt) {
  const p = oq(P(t, start, dur));
  e.textContent = fmt(value * p);
}
const kick = (parent, text, color, css) => mk(parent, `color:${color};${css}`, esc(text), 'abs kicker');

// ---------- stage, background, HUD ----------
const stage = document.getElementById('stage');
const bg = mk(stage, 'position:absolute;inset:0;background:radial-gradient(ellipse 120% 90% at 50% 40%, #0B1124, #05070F 70%);');
const blobs = [[C.blue, 420, 300, 0.11, 0.0], [C.teal, 1500, 760, 0.09, 2.1], [C.purple, 1300, 200, 0.08, 4.2]].map(([col, x, y, w, ph]) => {
  const b = mk(bg, `position:absolute;width:1300px;height:1300px;border-radius:50%;background:radial-gradient(circle, ${col}55 0%, ${col}18 35%, transparent 65%);`);
  b._p = { x, y, w, ph };
  return b;
});
mk(bg, `position:absolute;inset:0;background-image:radial-gradient(rgba(255,255,255,.09) 1.2px, transparent 1.6px);background-size:38px 38px;
  -webkit-mask-image:radial-gradient(ellipse 75% 70% at 50% 50%, #000 30%, transparent 80%);`);
const wallBox = mk(stage, 'position:absolute;inset:0;opacity:0;overflow:hidden;');
const wallImg = img(wallBox, 'left:0;top:0;width:1920px;height:1080px;');
mk(wallBox, `position:absolute;inset:0;background:radial-gradient(ellipse 70% 62% at 50% 46%, rgba(5,7,15,.30), rgba(5,7,15,.82) 80%),
  linear-gradient(to bottom, rgba(5,7,15,.5), rgba(5,7,15,0) 35%, rgba(5,7,15,.65));`);
const scenesRoot = mk(stage, 'position:absolute;inset:0;');
const hud = mk(stage, 'position:absolute;right:56px;top:44px;display:flex;align-items:center;gap:12px;opacity:0;',
  `<img src="${LOGO}" style="width:40px;height:40px"><span style="font-size:22px;font-weight:700;letter-spacing:.5px;color:#DDE5F5">StreamVibe</span>`);
const prog = mk(stage, 'position:absolute;left:0;bottom:0;height:4px;width:0;background:linear-gradient(90deg,#4C8DFF,#19C2AE,#A07BFF);opacity:.75;');

const scenes = [];
function scene(t0, t1, build) {
  const root = mk(scenesRoot, '', '', 'scene');
  const s = { t0, t1, root };
  s.render = build(root, s);
  scenes.push(s);
  return s;
}
// standard scene exit: fade + slight zoom + blur over the last `d` seconds
function exitFx(root, t, t1, d = 0.55) {
  const e = ioc(P(t, t1 - d, d));
  S(root, { opacity: 1 - e, transform: `scale(${1 + 0.04 * e})`, filter: e > 0 ? `blur(${e * 8}px)` : 'none' });
}

// ---------- icons ----------
const ICON = {
  eye: '<svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-4 10.5c.8.8 1 1.6 1 2.5h6c0-.9.2-1.7 1-2.5A6 6 0 0 0 12 3z"/></svg>',
  list: '<svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 5l1.5 1.5L4 8M3.5 11h2v2h-2zM3.5 17l2 2M5.5 17l-2 2"/></svg>',
  shuffle: '<svg viewBox="0 0 24 24" width="44" height="44" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 3h5v5M4 20L21 3M21 16v5h-5M15 15l6 6M4 4l5 5"/></svg>',
};

// =====================================================================
// S1 · Hero
// =====================================================================
scene(0, 6.5, (root) => {
  const logo = mk(root, 'left:885px;top:200px;width:150px;height:150px;', `<img src="${LOGO}" style="width:150px;height:150px;filter:drop-shadow(0 0 30px rgba(111,168,255,.6))">`, 'abs');
  const ring = mk(root, 'left:885px;top:200px;width:150px;height:150px;border-radius:50%;border:3px solid #8FBAFF;', '', 'abs');
  const titleCss = 'left:0;right:0;top:372px;text-align:center;font-size:164px;font-weight:700;letter-spacing:2px;';
  const title = mk(root, titleCss + 'text-shadow:0 6px 40px rgba(0,0,0,.6);', '', 'abs serif');
  const letters = [...'StreamVibe'].map((ch) => { const s = document.createElement('span'); s.className = 'w'; s.textContent = ch; title.appendChild(s); return s; });
  const shine = mk(root, titleCss + `color:transparent;background:linear-gradient(100deg, transparent 42%, rgba(255,255,255,.95) 50%, transparent 58%);
    background-size:300% 100%;-webkit-background-clip:text;background-clip:text;`, 'StreamVibe', 'abs serif');
  const sub = mk(root, 'left:0;right:0;top:580px;text-align:center;font-size:54px;font-style:italic;color:#DCE4F5;text-shadow:0 3px 24px rgba(0,0,0,.7);',
    'Proactive Video Agents for Evolving User Intent', 'abs serif');
  const line = mk(root, 'left:960px;top:675px;height:2px;width:0;background:linear-gradient(90deg,transparent,#6FA8FF,#2ED3BE,#B79BFF,transparent);', '', 'abs');
  const affs = ['Google', 'UC Santa Barbara', 'UC Santa Cruz', 'Stanford', 'Oxford', 'Emory', 'Columbia'];
  const aff = mk(root, 'left:0;right:0;top:705px;text-align:center;font-size:25px;color:#B7C2D8;letter-spacing:1px;', '', 'abs');
  const affSp = affs.map((a, i) => { const s = document.createElement('span'); s.className = 'w'; s.textContent = (i ? '   ·   ' : '') + a; aff.appendChild(s); return s; });
  return (t) => {
    const lp = ob(P(t, 0.3, 0.8));
    S(logo, { opacity: P(t, 0.3, 0.4), transform: `scale(${0.4 + 0.6 * lp})` });
    const rq = P(t, 0.75, 1.3);
    S(ring, { opacity: rq > 0 ? (1 - rq) * 0.9 : 0, transform: `scale(${1 + 1.6 * oc(rq)})` });
    letters.forEach((s, i) => {
      const p = oc(P(t, 0.8 + i * 0.06, 0.8));
      S(s, { opacity: p, transform: `translateY(${(1 - p) * 60}px) scale(${0.9 + 0.1 * p})`, filter: p < 1 ? `blur(${(1 - p) * 14}px)` : 'none' });
    });
    const sp = P(t, 2.1, 1.3);
    S(shine, { opacity: sp > 0 && sp < 1 ? 1 : 0, backgroundPosition: `${lerp(110, -10, ioc(sp))}% 0` });
    const s2 = oc(P(t, 2.0, 0.9));
    S(sub, { opacity: s2, transform: `translateY(${(1 - s2) * 26}px)` });
    const lw = 640 * oc(P(t, 2.5, 1.0));
    S(line, { width: lw + 'px', left: 960 - lw / 2 + 'px' });
    affSp.forEach((s, i) => { const p = oc(P(t, 2.9 + i * 0.1, 0.6)); S(s, { opacity: p, transform: `translateY(${(1 - p) * 14}px)` }); });
    exitFx(root, t, 6.5, 0.6);
  };
});

// =====================================================================
// S2 · Motivation
// =====================================================================
scene(6.5, 17, (root) => {
  const A = mk(root, 'position:absolute;inset:0;');
  const k = kick(A, 'The problem', '#7FB0FF', 'left:0;right:0;top:300px;text-align:center;');
  const l1 = words(A, [['Today’s assistants ', ''], ['wait to be asked.', '']], 'position:absolute;left:0;right:0;top:350px;text-align:center;font-size:88px;font-weight:700;', );
  l1.classList.add('serif');
  const l2 = words(A, [['Or they act on what they ', ''], ['remember', ''], [' about you:', '']], 'position:absolute;left:0;right:0;top:490px;text-align:center;font-size:38px;color:#AEB9CF;');
  const chipsRow = mk(A, 'position:absolute;left:0;right:0;top:568px;display:flex;justify-content:center;gap:18px;');
  const chips = ['Chat history', 'Calendar', 'Email', 'Saved memories', 'User profile'].map((c) =>
    mk(chipsRow, 'background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.2);color:#C9D2E4;font-weight:600;', esc(c), 'chip'));
  const l3 = words(A, [['Not on what you are doing ', ''], ['right now.', '']], `position:absolute;left:0;right:0;top:665px;text-align:center;font-size:40px;font-weight:700;color:${C.coral};`);

  const B = mk(root, 'position:absolute;inset:0;');
  const h = words(B, [['Real help happens ', ''], ['while you act.', 'grad']], 'position:absolute;left:0;right:0;top:105px;text-align:center;font-size:82px;font-weight:700;');
  h.classList.add('serif');
  const cards = [
    ['Physical task', C.teal, 'd2_jamrolls', 20, 600, 26, 1.0, '“Walk me through these jam rolls.”', 'Trim the crusts first.'],
    ['Digital task', C.blue, 'd3_grabit', 2, 1080, 19, 1.6, '“Help me calibrate this plot.”', 'Click the max of the x-axis.'],
    ['Evolving intent', C.purple, 'dy_helmet', 30, 662, 37, 1.4, '“Wait, what color is this paper?”', 'It’s black. Back to your milestones.'],
  ].map(([label, col, key, base, n, s0, sp, q, r], i) => {
    const c = mk(B, `left:${135 + i * 560}px;top:265px;width:530px;height:520px;transform-origin:50% 100%;`, '', 'card');
    const th = mk(c, 'position:absolute;left:20px;top:20px;width:490px;height:276px;border-radius:18px;overflow:hidden;background:#000;');
    const im = img(th, 'left:0;top:0;width:490px;height:276px;');
    mk(th, `position:absolute;left:14px;top:14px;background:${col};font-size:18px;padding:6px 14px;`, esc(label), 'chip');
    mk(c, 'position:absolute;left:30px;right:30px;top:320px;font-size:31px;font-style:italic;line-height:1.25;color:#EEF2FA;', esc(q), 'serif');
    const rr = mk(c, `position:absolute;left:30px;right:26px;top:420px;display:flex;gap:14px;align-items:flex-start;`);
    mk(rr, '', `<img src="${LOGO}" style="width:44px;height:44px;margin-top:2px">`);
    const rt = mk(rr, `font-size:29px;font-weight:700;line-height:1.28;color:${col};`);
    return { c, im, key, base, n, s0, sp, r, rt, col };
  });
  const foot = words(B, [['StreamVibe', 'grad'], [' watches the task, infers what you need, and keeps up as it changes.', '']],
    'position:absolute;left:0;right:0;top:850px;text-align:center;font-size:34px;font-weight:600;color:#D5DCEA;');
  return (t) => {
    const ea = ioc(P(t, 10.9, 0.5));
    S(A, { opacity: 1 - ea, transform: `translateY(${-70 * ea}px)`, display: t > 11.5 ? 'none' : 'block' });
    S(k, { opacity: P(t, 6.6, 0.5) });
    animWords(l1, t, 6.7, 0.09, 0.7, 40);
    animWords(l2, t, 8.0, 0.05);
    chips.forEach((c, i) => { const p = ob(P(t, 8.6 + i * 0.1, 0.6)); S(c, { opacity: clamp(p), transform: `scale(${0.6 + 0.4 * p})` }); });
    // memory chips dim and get struck through when the punchline lands
    const st = P(t, 9.6, 0.5);
    chips.forEach((c) => S(c, { filter: `grayscale(1) brightness(${1 - 0.45 * st})`, textDecoration: st > 0.5 ? 'line-through' : 'none' }));
    animWords(l3, t, 9.7, 0.08, 0.6, 30);

    S(B, { display: t < 10.9 ? 'none' : 'block' });
    animWords(h, t, 11.0, 0.08, 0.7, 40);
    cards.forEach((d, i) => {
      const p = ob(P(t, 11.6 + i * 0.22, 0.9));
      S(d.c, { opacity: clamp(P(t, 11.6 + i * 0.22, 0.4)), transform: `perspective(1400px) translateY(${(1 - p) * 140}px) rotateX(${(1 - p) * 20}deg)` });
      const src = d.s0 + Math.max(0, t - 11.6) * d.sp;
      setSrc(d.im, MEDIA + `${d.key}/${pad(clamp(Math.round((src - d.base) * FPS), 0, d.n - 1), 4)}.jpg`);
      type(d.rt, d.r, t, 13.0 + i * 0.4, 32);
    });
    animWords(foot, t, 14.7, 0.04);
    exitFx(root, t, 17);
  };
});

// =====================================================================
// S3 · Three gaps
// =====================================================================
scene(17, 24, (root) => {
  const k = kick(root, 'What’s missing', '#FF8B8B', 'left:150px;top:118px;');
  const ti = words(root, [['Three gaps in today’s proactive agents', '']], 'position:absolute;left:150px;top:152px;font-size:68px;font-weight:700;');
  ti.classList.add('serif');
  const G = [
    ['01', 'Implicit intent', C.blue, 'eye', 'Users state goals, not triggers. Agents wait for an explicit cue and miss the moment.', 'Misses the moment', 'Infers emerging intents'],
    ['02', 'Stale task state', C.coral, 'list', 'Earlier replies change progress. Without tracking it, agents repeat advice or skip what is due.', 'Repeats or skips advice', 'Tracks the current state'],
    ['03', 'Evolving intent', C.teal, 'shuffle', 'Users revise, add or interrupt requests mid-task. Agents keep answering the old one.', 'Answers the old request', 'Updates active intents'],
  ].map(([num, name, col, ic, desc, bad, good], i) => {
    const c = mk(root, `left:${150 + i * 550}px;top:300px;width:510px;height:540px;`, '', 'card');
    mk(c, `position:absolute;right:30px;top:18px;font-size:96px;font-weight:800;color:rgba(255,255,255,.07);`, num);
    mk(c, `position:absolute;left:40px;top:44px;width:88px;height:88px;border-radius:50%;background:${col};display:flex;align-items:center;justify-content:center;box-shadow:0 0 40px ${col}88;`, ICON[ic]);
    mk(c, `position:absolute;left:40px;top:160px;font-size:40px;font-weight:800;color:${col};`, esc(name));
    mk(c, `position:absolute;left:40px;right:36px;top:222px;font-size:25px;line-height:1.42;color:#C5CEE0;`, esc(desc));
    const flip = mk(c, 'position:absolute;left:40px;right:40px;top:420px;height:76px;perspective:800px;');
    const b = mk(flip, `position:absolute;inset:0;border-radius:18px;background:rgba(255,107,107,.14);border:1.5px solid ${C.coral};display:flex;align-items:center;gap:12px;padding:0 22px;font-size:24px;font-weight:700;color:#FFB3B3;backface-visibility:hidden;`,
      `<span style="font-size:28px">✗</span>${esc(bad)}`);
    const g = mk(flip, `position:absolute;inset:0;border-radius:18px;background:${col}26;border:1.5px solid ${col};display:flex;align-items:center;gap:12px;padding:0 22px;font-size:24px;font-weight:700;color:#fff;backface-visibility:hidden;`,
      `<img src="${LOGO}" style="width:34px;height:34px">${esc(good)}`);
    return { c, b, g };
  });
  const cap = words(root, [['StreamVibe', 'grad'], [' closes all three.', '']], 'position:absolute;left:0;right:0;top:885px;text-align:center;font-size:40px;font-weight:700;');
  return (t) => {
    S(k, { opacity: P(t, 17.1, 0.5) });
    animWords(ti, t, 17.15, 0.06);
    G.forEach((d, i) => {
      const p = ob(P(t, 17.6 + i * 0.22, 0.8));
      S(d.c, { opacity: clamp(P(t, 17.6 + i * 0.22, 0.4)), transform: `translateY(${(1 - p) * 90}px)` });
      const f = ioc(P(t, 20.6 + i * 0.25, 0.6));
      S(d.b, { transform: `rotateX(${f * 180}deg)` });
      S(d.g, { transform: `rotateX(${f * 180 - 180}deg)` });
      S(d.c, { borderColor: f > 0.5 ? 'rgba(255,255,255,.28)' : 'rgba(255,255,255,.12)' });
    });
    animWords(cap, t, 21.7, 0.08);
    exitFx(root, t, 24);
  };
});

// =====================================================================
// S4 · StreamVibe-Bench
// =====================================================================
scene(24, 37, (root) => {
  const k = kick(root, '01 · StreamVibe-Bench', '#7FB0FF', 'left:110px;top:88px;');
  const ti = words(root, [['A benchmark for ', ''], ['implicit and evolving', 'grad'], [' intent', '']], 'position:absolute;left:110px;top:122px;font-size:66px;font-weight:700;');
  ti.classList.add('serif');
  // ---- phase A: mosaic + three levels
  const A = mk(root, 'position:absolute;inset:0;');
  const phys = [0, 13, 19, 22, 25, 31, 32, 44, 51, 56, 59, 29], digi = [2, 4, 7, 27, 33, 35, 53, 54, 50, 34];
  const order = [];
  for (let i = 0, a = 0, b = 0; i < 20; i++) {
    const r = Math.floor(i / 4), c = i % 4;
    order.push((r + c) % 2 === 0 && a < phys.length ? ['EGO', phys[a++]] : b < digi.length ? ['GUI', digi[b++]] : ['EGO', phys[a++]]);
  }
  const tiles = order.map(([tag, id], i) => {
    const r = Math.floor(i / 4), c = i % 4;
    const box = mk(A, `left:${110 + c * 208}px;top:${262 + r * 122}px;width:196px;height:110px;border-radius:12px;overflow:hidden;background:#000;
      box-shadow:0 10px 30px rgba(0,0,0,.4);border:1px solid rgba(255,255,255,.12);`, '', 'abs');
    const im = img(box, 'left:0;top:0;width:196px;height:110px;');
    mk(box, `position:absolute;right:6px;bottom:6px;font-size:13px;font-weight:800;letter-spacing:1px;padding:2px 8px;border-radius:8px;background:${tag === 'EGO' ? C.teal : C.blue};`, tag);
    return { box, im, id, r, c, off: (i * 23) % 90 };
  });
  const leg = mk(A, 'left:110px;top:880px;display:flex;gap:34px;font-size:22px;color:#C9D2E4;', `
    <span><b style="color:${C.teal}">●</b>&nbsp; Physical · egocentric &amp; real-world</span><span><b style="color:${C.blue}">●</b>&nbsp; Digital · desktop &amp; mobile GUI</span>`, 'abs');
  const LV = [
    ['Level 1', 'Explicit', C.blue, 600, '“Let me know when the water starts boiling.”', ['Single event', 'Transition', 'Recurring']],
    ['Level 2', 'Implicit', C.teal, 2000, '“Help me keep an eye on this dish.”', ['Guidance', 'Learning', 'Monitoring', 'Tool use']],
    ['Level 3', 'Dynamic', C.purple, 1500, '“…Also, tell me what to do before I move on.”', ['Revision', 'Composition', 'Interruption']],
  ].map(([lv, name, col, n, q, subs], i) => {
    const c = mk(A, `left:1000px;top:${262 + i * 205}px;width:810px;height:185px;overflow:hidden;`, '', 'card');
    mk(c, `position:absolute;left:0;top:0;bottom:0;width:8px;background:${col};`);
    mk(c, `position:absolute;left:34px;top:22px;font-size:17px;font-weight:800;letter-spacing:3px;color:${col};`, lv.toUpperCase());
    mk(c, `position:absolute;left:34px;top:42px;font-size:46px;font-weight:700;color:${col};`, name, 'serif');
    const num = mk(c, `position:absolute;right:34px;top:20px;font-size:56px;font-weight:800;text-align:right;`);
    mk(c, `position:absolute;right:34px;top:88px;font-size:16px;color:${C.muted};letter-spacing:2px;`, 'SAMPLES');
    mk(c, `position:absolute;left:250px;top:40px;width:330px;font-size:23px;font-style:italic;line-height:1.3;color:#DDE3F0;`, esc(q), 'serif');
    mk(c, `position:absolute;left:34px;top:122px;display:flex;gap:10px;`, subs.map((s) => `<span style="font-size:16px;font-weight:600;padding:4px 12px;border-radius:999px;background:${col}22;color:${col};border:1px solid ${col}66">${s}</span>`).join(''));
    const bar = mk(c, `position:absolute;left:0;bottom:0;height:5px;width:0;background:${col};box-shadow:0 0 16px ${col};`);
    return { c, num, bar, n };
  });
  // ---- phase B: stats + causal stream
  const B = mk(root, 'position:absolute;inset:0;');
  const ST = [[4.1, (v) => v.toFixed(1) + 'K', 'evaluation samples', 'explicit · implicit · dynamic', C.blue],
    [20.5, (v) => v.toFixed(1) + 'K', 'annotated help points', 'window + best time + reference', C.teal],
    [183.4, (v) => v.toFixed(1) + ' h', 'of real task video', '8.3 min per sample on average', C.purple],
    [85, (v) => Math.round(v) + 'K', 'training samples', '70K SFT + 15K RL', C.orange]].map(([v, f, a, b, col], i) => {
    const c = mk(B, `left:${110 + i * 433}px;top:270px;width:405px;height:250px;`, '', 'card');
    const num = mk(c, `position:absolute;left:34px;top:34px;font-size:88px;font-weight:800;color:${col};letter-spacing:-1px;text-shadow:0 0 40px ${col}66;`);
    mk(c, 'position:absolute;left:36px;top:150px;font-size:27px;font-weight:700;', esc(a));
    mk(c, `position:absolute;left:36px;top:192px;font-size:20px;color:${C.muted};`, esc(b));
    return { c, num, v, f };
  });
  const sl = mk(B, `left:110px;top:582px;font-size:22px;color:${C.muted};letter-spacing:1px;`, '<b style="color:#fff">1 fps causal stream</b> &nbsp;—&nbsp; every second the agent sees only the past and decides: <b style="color:#fff">stay silent</b> or <b style="color:#2BD48A">respond</b>', 'abs');
  const NC = 56, cw = 1700 / NC, wins = [[9, 12], [27, 30], [44, 47]], resp = [10, 28, 45];
  const winEls = wins.map(([a, b]) => mk(B, `left:${110 + a * cw}px;top:635px;width:${(b - a + 1) * cw}px;height:88px;border-radius:12px;background:rgba(43,212,138,.12);border:1.5px dashed rgba(43,212,138,.7);`, '<div style="position:absolute;left:0;right:0;top:94px;text-align:center;font-size:16px;color:#7FE3B4;letter-spacing:1px">HELP WINDOW</div>', 'abs'));
  const cells = [...Array(NC)].map((_, i) => {
    const r = resp.includes(i);
    return mk(B, `left:${110 + i * cw + cw / 2 - (r ? 17 : 7)}px;top:${679 - (r ? 17 : 7)}px;width:${r ? 34 : 14}px;height:${r ? 34 : 14}px;border-radius:50%;
      background:${r ? C.green : 'rgba(255,255,255,.28)'};${r ? 'box-shadow:0 0 22px #2BD48A;font-size:17px;font-weight:800;color:#06210F;display:flex;align-items:center;justify-content:center;' : ''}`, r ? 'R' : '', 'abs');
  });
  const tags = mk(B, 'left:0;right:0;top:830px;display:flex;justify-content:center;gap:20px;', '', 'abs');
  const tagEls = ['Explicit · Implicit · Dynamic', 'Physical + Digital', 'Pointwise + trajectory evaluation', 'Every sample checked by 4 reviewers'].map((s) =>
    mk(tags, 'background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.2);font-size:21px;font-weight:600;', esc(s), 'chip'));
  return (t) => {
    S(k, { opacity: P(t, 24.1, 0.5) });
    animWords(ti, t, 24.15, 0.07);
    const ea = ioc(P(t, 30.6, 0.6));
    S(A, { opacity: 1 - ea, transform: `scale(${1 - 0.05 * ea})`, display: t > 31.3 ? 'none' : 'block' });
    tiles.forEach((d) => {
      const p = oc(P(t, 24.5 + (d.r + d.c) * 0.07, 0.7));
      S(d.box, { opacity: p, transform: `perspective(900px) rotateY(${(1 - p) * 85}deg) scale(${0.8 + 0.2 * p})` });
      setSrc(d.im, MEDIA + `tiles/${d.id}/${pad((Math.floor(Math.max(0, t - 24) * 15) + d.off) % 90, 3)}.jpg`);
    });
    S(leg, { opacity: P(t, 25.6, 0.6) });
    LV.forEach((d, i) => {
      const p = oc(P(t, 25.0 + i * 0.3, 0.8));
      S(d.c, { opacity: p, transform: `translateX(${(1 - p) * 120}px)` });
      counter(d.num, d.n, t, 25.3 + i * 0.3, 1.4, (v) => Math.round(v).toLocaleString('en-US'));
      S(d.bar, { width: `${810 * (d.n / 2000) * oq(P(t, 25.4 + i * 0.3, 1.4))}px` });
    });
    S(B, { display: t < 30.8 ? 'none' : 'block' });
    ST.forEach((d, i) => {
      const p = ob(P(t, 31.0 + i * 0.15, 0.8));
      S(d.c, { opacity: clamp(P(t, 31.0 + i * 0.15, 0.4)), transform: `translateY(${(1 - p) * 70}px)` });
      counter(d.num, d.v, t, 31.1 + i * 0.15, 1.6, d.f);
    });
    S(sl, { opacity: P(t, 32.0, 0.6) });
    winEls.forEach((w, i) => S(w, { opacity: P(t, 32.3 + i * 0.25, 0.5) }));
    cells.forEach((c, i) => {
      const r = resp.includes(i), p = r ? ob(P(t, 32.4 + i * 0.045, 0.5)) : oc(P(t, 32.4 + i * 0.045, 0.3));
      S(c, { opacity: clamp(p), transform: `scale(${r ? p : 0.4 + 0.6 * p})` });
    });
    tagEls.forEach((c, i) => { const p = ob(P(t, 34.6 + i * 0.12, 0.6)); S(c, { opacity: clamp(p), transform: `scale(${0.7 + 0.3 * p})` }); });
    exitFx(root, t, 37);
  };
});

// =====================================================================
// S5 · Method (two components, then one second inside StreamVibe)
// =====================================================================
scene(37, 55, (root) => {
  const k = kick(root, '02 · Method', '#C3AEFF', 'left:110px;top:88px;');
  const t1 = words(root, [['Two problems, ', ''], ['two components', 'grad']], 'position:absolute;left:110px;top:122px;font-size:66px;font-weight:700;');
  const t2 = words(root, [['One second inside ', ''], ['StreamVibe', 'grad']], 'position:absolute;left:110px;top:122px;font-size:66px;font-weight:700;');
  t1.classList.add('serif'); t2.classList.add('serif');
  // ---- phase A
  const A = mk(root, 'position:absolute;inset:0;');
  const L = mk(A, 'left:110px;top:250px;width:830px;height:560px;', '', 'card');
  mk(L, `position:absolute;left:40px;top:34px;font-size:17px;font-weight:800;letter-spacing:3px;color:${C.teal};`, 'PROBLEM 1 · EVIDENCE GROUNDING');
  mk(L, 'position:absolute;left:40px;top:62px;font-size:54px;font-weight:700;', 'StreamVibe-VL', 'serif');
  mk(L, `position:absolute;left:40px;top:132px;font-size:23px;color:${C.muted};`, 'learns <b style="color:#fff">when</b> and <b style="color:#fff">what</b> to say, straight from the stream');
  const stg = [['STAGE 1', 'Adaptive streaming SFT', 'every second is a silence / respond decision; adaptive weights stop it collapsing into always-silent or always-talking'],
    ['STAGE 2', 'Localized trajectory RL', 'GRPO on short causal rollouts around help points, with point-level and trajectory-level rewards']].map(([a, b, c], i) => {
    const e = mk(L, `position:absolute;left:40px;right:40px;top:${200 + i * 180}px;height:150px;border-radius:20px;background:rgba(25,194,174,.10);border:1.5px solid rgba(25,194,174,.55);padding:20px 26px;`,
      `<div style="display:flex;align-items:center;gap:14px"><span style="font-size:15px;font-weight:800;letter-spacing:2px;padding:4px 12px;border-radius:8px;background:${C.teal};color:#04201C">${a}</span>
       <span style="font-size:30px;font-weight:800">${b}</span></div><div style="font-size:20px;line-height:1.4;color:#C5CEE0;margin-top:12px">${c}</div>`);
    return e;
  });
  const arrow = mk(L, `position:absolute;left:400px;top:352px;width:4px;height:26px;background:linear-gradient(${C.teal},transparent);`);
  const R = mk(A, 'left:980px;top:250px;width:830px;height:560px;', '', 'card');
  mk(R, `position:absolute;left:40px;top:34px;font-size:17px;font-weight:800;letter-spacing:3px;color:${C.purple};`, 'PROBLEM 2 · STATE TRACKING');
  mk(R, 'position:absolute;left:40px;top:62px;font-size:54px;font-weight:700;', 'StreamVibe-Harness', 'serif');
  mk(R, `position:absolute;left:40px;top:132px;font-size:23px;color:${C.muted};`, 'keeps every intent as a <b style="color:#fff">persistent, updatable state</b>');
  const hs = [['Interaction state', 'active intents, task progress, delivered replies'], ['Intent lifecycle', 'each intent is its own stateful instance'],
    ['Hierarchical memory', 'recent detail kept, older history compressed'], ['State integration', 'merged context to the policy; replies written back']].map(([a, b], i) =>
    mk(R, `position:absolute;left:${40 + (i % 2) * 385}px;top:${200 + Math.floor(i / 2) * 180}px;width:365px;height:155px;border-radius:20px;background:rgba(160,123,255,.10);border:1.5px solid rgba(160,123,255,.55);padding:22px 24px;`,
      `<div style="font-size:26px;font-weight:800;color:#D9CCFF">${a}</div><div style="font-size:20px;line-height:1.4;color:#C5CEE0;margin-top:10px">${b}</div>`));
  const beam = mk(A, 'left:940px;top:525px;width:40px;height:6px;border-radius:3px;', '', 'abs');
  const capA = mk(A, 'left:0;right:0;top:860px;text-align:center;font-size:27px;color:#D5DCEA;', 'The harness decides <b style="color:#D9CCFF">which intents are still valid</b>; the policy decides <b style="color:#8FF0E2">when and what to say</b>. &nbsp;<span style="color:#8A94A8">Training-free · model-agnostic</span>', 'abs');
  // ---- phase B: one second inside StreamVibe (jam rolls, real reply at 31 s)
  const B = mk(root, 'position:absolute;inset:0;');
  const S0 = 27, RATE = 0.95, sim = (t) => S0 + Math.max(0, t - 44.6) * RATE;   // simulated video second (bread work starts at 27 s)
  const T_R = 44.6 + (31 - S0) / RATE, T_U = 44.6 + (34 - S0) / RATE;
  mk(B, `left:110px;top:236px;font-size:17px;font-weight:800;letter-spacing:3px;color:${C.muted};`, 'LIVE STREAM · 1 FPS', 'abs');
  const strip = mk(B, 'left:110px;top:266px;width:1700px;height:160px;overflow:hidden;', '', 'abs');
  const SW = 236, cellsB = [...Array(9)].map(() => {
    const c = mk(strip, 'position:absolute;top:0;width:222px;height:125px;border-radius:12px;overflow:hidden;background:#000;');
    const im = img(c, 'left:0;top:0;width:222px;height:125px;');
    const lb = mk(strip, `position:absolute;top:131px;width:222px;text-align:center;font-size:17px;color:${C.muted};`);
    return { c, im, lb };
  });
  const user1 = mk(B, 'left:110px;top:450px;width:900px;font-size:23px;color:#DDE3F0;', `<b style="color:#fff">User:</b> <i class="serif" style="font-size:27px">“Walk me through making these mini bread jam rolls.”</i> &nbsp;<span style="color:${C.coral};font-weight:700">no trigger named</span>`, 'abs');
  const user2 = mk(B, `left:1060px;top:442px;padding:10px 20px;border-radius:16px;background:rgba(160,123,255,.18);border:1.5px solid ${C.purple};font-size:22px;`, `<b style="color:#D9CCFF">User @ 34 s:</b> <i class="serif" style="font-size:26px">“Also tell me when to slice it.”</i>`, 'abs');
  const H = mk(B, `left:110px;top:520px;width:900px;height:420px;border-color:${C.purple}aa;`, '', 'card');
  mk(H, `position:absolute;left:32px;top:24px;font-size:24px;font-weight:800;color:#D9CCFF;`, 'StreamVibe-Harness · interaction state S<sub>t</sub>');
  const row = (y, label) => { mk(H, `position:absolute;left:32px;top:${y}px;font-size:20px;font-weight:700;color:${C.muted};width:170px;`, label); return mk(H, `position:absolute;left:210px;top:${y - 10}px;right:30px;display:flex;gap:12px;align-items:center;`); };
  const rI = row(110, 'Active intents'), rP = row(210, 'Task progress'), rM = row(310, 'Memory');
  const chip = (p, html, col) => mk(p, `padding:10px 18px;border-radius:14px;border:1.5px solid ${col};background:${col}22;font-size:22px;font-weight:600;`, html);
  const i1 = chip(rI, '<i>i</i><sub>1</sub> jam rolls · open', C.purple), i2 = chip(rI, '<i>i</i><sub>2</sub> slicing · added', C.purple);
  const prA = chip(rP, 'crusts not trimmed yet', C.gray), prB = chip(rP, '✓ crusts trimmed · next: flatten the bread', C.green);
  const mem = chip(rM, '', C.gray);
  const pol = mk(B, `left:1060px;top:520px;width:750px;height:420px;border-color:${C.teal}aa;`, '', 'card');
  mk(pol, `position:absolute;left:32px;top:24px;font-size:24px;font-weight:800;color:#8FF0E2;`, 'StreamVibe-VL policy π');
  mk(pol, `position:absolute;left:32px;top:68px;font-size:22px;color:${C.muted};`, 'context &nbsp;<i class="serif" style="font-size:26px;color:#fff">c̃<sub>t</sub> = φ(c<sub>t</sub>, S<sub>t</sub>, m<sub>t</sub>)</i>');
  mk(pol, `position:absolute;left:32px;top:118px;font-size:17px;font-weight:700;letter-spacing:2px;color:${C.muted};`, 'EVERY SECOND: SILENT OR RESPOND');
  const dots = [...Array(10)].map((_, i) => mk(pol, `position:absolute;left:${36 + i * 66}px;top:160px;width:${i === 4 ? 40 : 22}px;height:${i === 4 ? 40 : 22}px;margin-left:${i === 4 ? -9 : 0}px;margin-top:${i === 4 ? -9 : 0}px;border-radius:50%;
    background:${i === 4 ? C.teal : 'rgba(255,255,255,.25)'};${i === 4 ? 'box-shadow:0 0 26px #19C2AE;display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;color:#04201C;' : ''}`, i === 4 ? 'R' : ''));
  const pulse = mk(pol, `position:absolute;left:311px;top:167px;width:30px;height:30px;margin:-15px;border-radius:50%;border:3px solid ${C.teal};`);
  const silence = mk(pol, `position:absolute;left:36px;top:204px;font-size:18px;color:${C.muted};`);
  const reply = mk(pol, `position:absolute;left:32px;right:32px;top:250px;border-radius:18px;background:#fff;color:${C.ink};padding:16px 20px;font-size:23px;font-weight:600;line-height:1.35;`);
  const replyHead = `<div style="display:flex;align-items:center;gap:10px;margin-bottom:6px"><img src="${LOGO}" style="width:28px;height:28px"><b style="color:#0E9F8E;font-size:19px">StreamVibe @ 31 s</b></div>`;
  const replyTxt = 'Trim off the crusts from the bread slices using a knife before spreading the jam.';
  const beamB = mk(B, 'left:1010px;top:728px;width:50px;height:6px;border-radius:3px;', '', 'abs');
  const back = mk(B, `left:960px;top:888px;font-size:18px;color:#7FE3B4;font-weight:700;`, '↩ written back to state', 'abs');
  return (t) => {
    S(k, { opacity: P(t, 37.1, 0.5) });
    const sw = ioc(P(t, 44.0, 0.5));
    animWords(t1, t, 37.15, 0.07);
    S(t1, { opacity: 1 - sw, display: t > 44.6 ? 'none' : 'block' });
    animWords(t2, t, 44.4, 0.07);
    S(t2, { display: t < 44.3 ? 'none' : 'block' });
    // phase A
    S(A, { opacity: 1 - sw, transform: `scale(${1 - 0.04 * sw})`, display: t > 44.6 ? 'none' : 'block' });
    const pl = oc(P(t, 37.4, 0.9)), pr = oc(P(t, 37.6, 0.9));
    S(L, { opacity: pl, transform: `translateX(${(1 - pl) * -140}px)` });
    S(R, { opacity: pr, transform: `translateX(${(1 - pr) * 140}px)` });
    stg.forEach((e, i) => { const p = ob(P(t, 38.4 + i * 0.6, 0.7)); S(e, { opacity: clamp(p), transform: `translateY(${(1 - p) * 40}px)` }); });
    S(arrow, { opacity: P(t, 38.9, 0.4) });
    hs.forEach((e, i) => { const p = ob(P(t, 38.7 + i * 0.25, 0.7)); S(e, { opacity: clamp(p), transform: `scale(${0.85 + 0.15 * p})` }); });
    const bp = ((t - 37) * 0.9) % 1;
    S(beam, { opacity: P(t, 40.0, 0.5), background: `linear-gradient(270deg, transparent ${bp * 100 - 30}%, #fff ${bp * 100}%, transparent ${bp * 100 + 30}%), linear-gradient(270deg, ${C.purple}, ${C.teal})`, boxShadow: '0 0 18px rgba(160,123,255,.8)' });
    S(capA, { opacity: P(t, 40.6, 0.7) });
    // phase B
    S(B, { display: t < 44.2 ? 'none' : 'block', opacity: oc(P(t, 44.3, 0.6)) });
    const s = sim(t), cur = Math.floor(s), frac = s - cur;
    cellsB.forEach((d, j) => {
      const sec = cur - 7 + j;   // newest frame on the right
      const x = 1700 - 222 - (7 - j) * SW - frac * SW + SW;
      S(d.c, { left: x + 'px', opacity: sec < S0 ? 0 : 1, outline: sec === cur ? `3px solid ${C.teal}` : 'none' });
      S(d.lb, { left: x + 'px', opacity: sec < S0 ? 0 : 1 });
      d.lb.textContent = `${sec}s`;
      setSrc(d.im, TALK + `media/frames/d2_jamrolls/${clamp(sec, 0, 128)}.jpg`);
    });
    S(user1, { opacity: P(t, 44.8, 0.6) });
    const u2 = ob(P(t, T_U, 0.6));
    S(user2, { opacity: clamp(u2), transform: `translateY(${(1 - u2) * 20}px)` });
    S(i1, { opacity: P(t, 45.0, 0.5) });
    const ip = ob(P(t, T_U + 0.3, 0.6));
    S(i2, { opacity: clamp(ip), transform: `scale(${ip})`, display: t < T_U + 0.3 ? 'none' : 'block' });
    const pf = P(t, T_R + 0.2, 0.4);
    S(prA, { display: t >= T_R + 0.6 ? 'none' : 'block', opacity: P(t, 45.2, 0.5) * (1 - pf) });
    S(prB, { display: t < T_R + 0.6 ? 'none' : 'block', opacity: oc(P(t, T_R + 0.6, 0.4)) });
    mem.innerHTML = `last 5 s in detail · 0–${Math.max(0, cur - 5)} s compressed`;
    S(mem, { opacity: P(t, 45.4, 0.5) });
    dots.forEach((d, i) => { const sec = S0 + i; const p = sec === 31 ? ob(P(t, T_R, 0.5)) : P(t, 44.6 + (sec - S0) / RATE, 0.25); S(d, { opacity: clamp(p), transform: `scale(${sec === 31 ? p : 1})` }); });
    const pq = P(t, T_R, 1.0);
    S(pulse, { opacity: pq > 0 && pq < 1 ? 1 - pq : 0, transform: `scale(${1 + 2.5 * pq})` });
    const nsil = clamp(Math.floor(s) - S0 + 1, 0, 31 - S0) + Math.max(0, Math.floor(s) - 31);
    silence.textContent = `silent × ${nsil}  ·  respond × ${t >= T_R ? 1 : 0}`;
    const rp = oc(P(t, T_R, 0.5));
    S(reply, { opacity: rp, transform: `translateY(${(1 - rp) * 24}px)` });
    reply.innerHTML = replyHead + `<span>${esc(replyTxt.slice(0, clamp(Math.floor((t - T_R) * 50), 0, replyTxt.length)))}</span>`;
    const bb = ((t - 44) * RATE) % 1;
    S(beamB, { opacity: P(t, 45.0, 0.5), background: `linear-gradient(90deg, transparent ${bb * 100 - 30}%, #fff ${bb * 100}%, transparent ${bb * 100 + 30}%), linear-gradient(90deg, ${C.purple}, ${C.teal})`, boxShadow: '0 0 18px rgba(25,194,174,.8)' });
    S(back, { opacity: vis(t, T_R + 0.6, T_R + 2.4, 0.4, 0.4) });
    exitFx(root, t, 55);
  };
});

// =====================================================================
// S6 · Demos (StreamVibe only; one per intent level)
// =====================================================================
const DEMO_IN = 1.3, DEMO_OUT = 0.7;
const DEMOS = [
  { key: 'ex_turkey', base: 4, n: 600, S: 11, E: 21, F: 2.5, FR: 1.7, level: 'Level 1 · Explicit', col: C.blue, env: 'Real-world video', title: 'Tell me when the turkey goes in',
    users: [{ ts: 0, text: 'Notify me when the chef places the raw turkey into the roasting pan.' }],
    replies: [{ ts: 18, text: 'The chef has placed the raw turkey into the roasting pan.' }] },
  { key: 'd3_grabit', base: 2, n: 1080, S: 4, E: 34, F: 3.6, FR: 1.0, level: 'Level 2 · Implicit', col: C.teal, env: 'Desktop GUI', title: 'Walk me through calibrating this plot',
    users: [{ ts: 0, text: 'Walk me through calibrating this plot in Grabit, and steer me right if I pick the wrong points.' }],
    replies: [{ ts: 7, text: 'Click the origin point at the bottom-left corner of the graph to set the x-axis reference.' },
      { ts: 22, text: 'Click the maximum value point on the x-axis to set the upper bound for the strain scale.' },
      { ts: 28, text: 'The x-axis calibration is complete. Next, click the origin point to set the y-axis.' },
      { ts: 32, text: 'Click the maximum value point on the y-axis to set the upper bound for the stress scale.' }] },
  { key: 'dy_helmet', base: 30, n: 662, S: 35, E: 52, F: 2.5, FR: 1.4, level: 'Level 3 · Dynamic', col: C.purple, env: 'Egocentric video', title: 'Interrupted mid-task, then back on track',
    users: [{ ts: 0, text: 'Let me know whenever I reach a key milestone while folding this origami samurai helmet.' },
      { ts: 40, text: 'What color is the origami paper I’m holding?', update: 'User interrupts' }],
    replies: [{ ts: 40, text: 'The origami paper is black.', lag: 0.9 }, { ts: 50, text: 'You’ve completed the main folding steps and the samurai helmet is now fully assembled.' }] },
];
// output-time plan: fast-forward between moments, 1x approach, freeze at each moment
function planDemo(d) {
  const moments = [...new Set([...d.replies.map((r) => r.ts), ...d.users.filter((u) => u.ts > d.S).map((u) => u.ts)])].sort((a, b) => a - b);
  const seg = []; let src = d.S;
  for (const m of moments) {
    const extra = d.replies.some((r) => r.ts === m && r.lag) ? 0.9 : 0;
    if (m - 0.6 > src) seg.push({ a: src, b: m - 0.6, dur: (m - 0.6 - src) / d.F, speed: d.F });
    seg.push({ a: Math.max(src, m - 0.6), b: m, dur: m - Math.max(src, m - 0.6), speed: 1 });
    seg.push({ a: m, b: m, dur: d.FR + extra, speed: 0, m });
    src = m;
  }
  seg.push({ a: src, b: d.E, dur: Math.min(d.E - src, 2.4), speed: (d.E - src) / Math.min(d.E - src, 2.4) });
  let o = 0;
  for (const s of seg) { s.o = o; o += s.dur; }
  d.seg = seg; d.playDur = o;
  d.momentOut = (ts) => { const s = seg.find((x) => x.speed === 0 && x.m === ts); return s ? s.o : null; };
}
let tcur = 56.8;
DEMOS.forEach((d) => { planDemo(d); d.t0 = tcur; d.t1 = tcur + DEMO_IN + d.playDur + DEMO_OUT; tcur = d.t1 - 0.25; });
const T_RES = tcur + 0.15, T_END = T_RES + 10, T_TOTAL = T_END + 6.5;

scene(55, 57.2, (root) => {
  const k = kick(root, '03 · Demos', '#7FB0FF', 'left:0;right:0;top:390px;text-align:center;');
  const ti = words(root, [['See it ', ''], ['in action', 'grad']], 'position:absolute;left:0;right:0;top:430px;text-align:center;font-size:120px;font-weight:700;');
  ti.classList.add('serif');
  const sub = mk(root, `left:0;right:0;top:600px;text-align:center;font-size:30px;color:${C.soft};`, 'One example per intent level · real benchmark videos · StreamVibe’s own replies', 'abs');
  return (t) => {
    S(k, { opacity: P(t, 55.05, 0.4) });
    animWords(ti, t, 55.1, 0.12, 0.6, 50);
    S(sub, { opacity: P(t, 55.6, 0.5) });
    exitFx(root, t, 57.2, 0.5);
  };
});

DEMOS.forEach((d) => scene(d.t0, d.t1, (root) => {
  const VX = 90, VY = 178, VW = 1200, VH = 675, PX = 1335, PW = 495;
  const head = mk(root, `left:${VX}px;top:62px;display:flex;align-items:center;gap:16px;`, '', 'abs');
  mk(head, `background:${d.col};box-shadow:0 0 24px ${d.col}88;`, esc(d.level), 'chip');
  mk(head, 'background:rgba(255,255,255,.08);border:1.5px solid rgba(255,255,255,.25);', esc(d.env), 'chip');
  const ti = words(root, [[d.title, '']], `position:absolute;left:${VX}px;top:104px;font-size:52px;font-weight:700;`);
  ti.classList.add('serif');
  ti.style.top = '100px';
  head.style.top = '40px';
  // video card with blurred fill behind the frame
  const card = mk(root, `left:${VX}px;top:${VY}px;width:${VW}px;height:${VH}px;border-radius:22px;overflow:hidden;background:#000;box-shadow:0 30px 90px rgba(0,0,0,.6);`, '', 'abs');
  const inner = mk(card, 'position:absolute;inset:0;transform-origin:50% 50%;');
  const fr = img(inner, `left:0;top:0;width:${VW}px;height:${VH}px;object-fit:contain;`);
  const glow = mk(root, `left:${VX - 3}px;top:${VY - 3}px;width:${VW + 6}px;height:${VH + 6}px;border-radius:24px;border:3px solid ${d.col};pointer-events:none;`, '', 'abs');
  const status = mk(card, 'position:absolute;left:22px;top:20px;padding:8px 16px;border-radius:999px;background:rgba(5,8,18,.72);font-size:19px;font-weight:700;display:flex;align-items:center;gap:10px;');
  const speed = mk(card, 'position:absolute;right:22px;top:20px;padding:8px 16px;border-radius:999px;background:rgba(5,8,18,.72);font-size:19px;font-weight:700;');
  const cap = mk(card, `position:absolute;left:50%;bottom:30px;max-width:1060px;transform:translateX(-50%);padding:16px 26px;border-radius:18px;background:rgba(6,9,20,.84);
    border:1.5px solid ${d.col};display:flex;gap:16px;align-items:flex-start;font-size:30px;font-weight:600;line-height:1.3;box-shadow:0 12px 40px rgba(0,0,0,.5);`);
  // timeline
  const TY = VY + VH + 34, span = d.E - d.S, X = (src) => VX + ((src - d.S) / span) * VW;
  const track = mk(root, `left:${VX}px;top:${TY}px;width:${VW}px;height:6px;border-radius:3px;background:rgba(255,255,255,.16);`, '', 'abs');
  const fill = mk(root, `left:${VX}px;top:${TY}px;height:6px;border-radius:3px;background:linear-gradient(90deg, ${d.col}55, ${d.col});`, '', 'abs');
  const marks = d.replies.map((r) => mk(root, `left:${X(r.ts) - 10}px;top:${TY - 7}px;width:20px;height:20px;transform:rotate(45deg);background:#1A2238;border:2.5px solid ${d.col};`, '', 'abs'));
  d.users.filter((u) => u.ts > d.S).forEach((u) => mk(root, `left:${X(u.ts) - 2}px;top:${TY - 16}px;width:4px;height:38px;border-radius:2px;background:${C.purple};box-shadow:0 0 12px ${C.purple};`, '', 'abs'));
  const ph = mk(root, `left:0;top:${TY - 12}px;width:6px;height:30px;border-radius:3px;background:#fff;box-shadow:0 0 14px #fff;`, '', 'abs');
  const tlab = mk(root, `left:${VX}px;top:${TY + 26}px;width:${VW}px;display:flex;justify-content:space-between;font-size:19px;color:${C.muted};`,
    `<span>◆ StreamVibe replies &nbsp;${d.users.length > 1 ? `<b style="color:${C.purple}">|</b> user changes intent` : ''}</span><span class="tc"></span>`, 'abs');
  const tc = tlab.querySelector('.tc');
  // chat panel
  const panel = mk(root, `left:${PX}px;top:${VY}px;width:${PW}px;height:${VH}px;overflow:hidden;`, '', 'card');
  mk(panel, `position:absolute;left:26px;top:22px;font-size:18px;font-weight:800;letter-spacing:3px;color:${C.muted};display:flex;align-items:center;gap:10px;`,
    '<span style="width:12px;height:12px;border-radius:50%;background:#FF4D5E;box-shadow:0 0 10px #FF4D5E"></span>LIVE SESSION');
  const view = mk(panel, 'position:absolute;left:20px;right:20px;top:66px;bottom:20px;overflow:hidden;');
  const list = mk(view, 'position:absolute;left:0;right:0;top:0;display:flex;flex-direction:column;gap:14px;');
  const msgs = [];
  d.users.forEach((u) => {
    const e = mk(list, `align-self:flex-end;max-width:92%;padding:14px 18px;border-radius:20px 20px 6px 20px;${u.update ? `background:rgba(160,123,255,.2);border:1.5px solid ${C.purple};` : 'background:rgba(255,255,255,.09);border:1.5px solid rgba(255,255,255,.18);'}`,
      `<div style="font-size:15px;font-weight:800;letter-spacing:2px;color:${u.update ? '#D9CCFF' : C.muted}">${(u.update || 'User').toUpperCase()} · ${mmss(u.ts)}</div><div class="serif tx" style="font-size:24px;font-style:italic;line-height:1.28;margin-top:4px"></div>`);
    msgs.push({ e, tx: e.querySelector('.tx'), text: u.text, at: u.ts <= d.S ? d.t0 + 0.5 : d.t0 + DEMO_IN + d.momentOut(u.ts), kind: 'user' });
  });
  d.replies.forEach((r) => {
    const e = mk(list, `align-self:flex-start;max-width:96%;padding:14px 18px;border-radius:20px 20px 20px 6px;background:#fff;color:${C.ink};border-left:6px solid ${d.col};`,
      `<div style="display:flex;align-items:center;gap:8px"><img src="${LOGO}" style="width:26px;height:26px"><b style="font-size:17px;color:${d.col === C.teal ? '#0E9F8E' : d.col === C.blue ? '#2F6FDB' : '#7C4DDB'}">StreamVibe</b><span style="font-size:15px;color:#6B7280">· ${mmss(r.ts)}</span></div><div class="tx" style="font-size:21px;font-weight:600;line-height:1.32;margin-top:6px"></div>`);
    msgs.push({ e, tx: e.querySelector('.tx'), text: r.text, at: d.t0 + DEMO_IN + d.momentOut(r.ts) + (r.lag || 0), kind: 'bot' });
  });
  msgs.sort((a, b) => a.at - b.at);
  msgs.forEach((m) => list.appendChild(m.e));
  const srcAt = (u) => {
    if (u <= 0) return { src: d.S, speed: 0 };
    for (const s of d.seg) if (u < s.o + s.dur) return { src: s.a + (u - s.o) * s.speed, speed: s.speed, m: s.m };
    return { src: d.E, speed: 0 };
  };
  return (t) => {
    const u = t - d.t0 - DEMO_IN;
    const { src, speed: sp } = srcAt(u);
    // enter / exit
    const pin = oc(P(t, d.t0, 0.7)), pout = ioc(P(t, d.t1 - DEMO_OUT + 0.15, 0.55));
    S(root, { opacity: Math.min(P(t, d.t0, 0.4), 1 - pout), filter: pout > 0 ? `blur(${pout * 8}px)` : 'none' });
    S(card, { transform: `perspective(2000px) translateX(${(1 - pin) * 160 - pout * 120}px) rotateY(${(1 - pin) * -8}deg)` });
    S(glow, { transform: `translateX(${(1 - pin) * 160 - pout * 120}px)` });
    S(panel, { transform: `translateX(${(1 - oc(P(t, d.t0 + 0.15, 0.7))) * 120}px)`, opacity: P(t, d.t0 + 0.15, 0.5) });
    S(head, { opacity: P(t, d.t0 + 0.1, 0.5), transform: `translateY(${(1 - oc(P(t, d.t0 + 0.1, 0.6))) * 20}px)` });
    animWords(ti, t, d.t0 + 0.2, 0.05);
    setSrc(fr, MEDIA + `${d.key}/${pad(clamp(Math.round((src - d.base) * FPS), 0, d.n - 1), 4)}.jpg`);
    // help moment: push-in + border pulse
    let bump = 0, active = null;
    for (const r of d.replies) {
      const mo = d.t0 + DEMO_IN + d.momentOut(r.ts) + (r.lag || 0);
      const b = oc(P(t, mo - 0.15, 0.4)) * (1 - ioc(P(t, mo + d.FR + 0.4, 0.8)));
      if (b > bump) bump = b;
      if (t >= mo - 0.05 && t < mo + 2.9) active = { r, mo, speaking: t < mo + d.FR + 0.6 };
    }
    let ua = null;
    for (const uu of d.users.filter((x) => x.ts > d.S)) { const mo = d.t0 + DEMO_IN + d.momentOut(uu.ts); if (t >= mo && t < mo + 0.9) ua = { uu, mo }; }
    S(inner, { transform: `scale(${1 + 0.045 * bump})` });
    S(glow, { opacity: 0.25 + 0.75 * bump, boxShadow: `0 0 ${20 + 50 * bump}px ${d.col}${bump > 0.05 ? 'cc' : '44'}` });
    status.innerHTML = (active && active.speaking) || ua
      ? (ua ? `<span style="width:12px;height:12px;border-radius:50%;background:${C.purple}"></span>User speaks` : `<img src="${LOGO}" style="width:22px;height:22px">StreamVibe speaks`)
      : `<span style="width:12px;height:12px;border-radius:50%;background:${C.green};opacity:${0.5 + 0.5 * Math.abs(Math.sin(t * 3))}"></span>Watching · silent`;
    S(status, { opacity: P(t, d.t0 + DEMO_IN - 0.3, 0.4), border: `1.5px solid ${active && active.speaking ? d.col : ua ? C.purple : 'rgba(255,255,255,.2)'}` });
    speed.textContent = sp === 0 ? (u > 0 && u < d.playDur ? '❚❚ help moment' : '') : sp > 1.05 ? `▶▶ ${sp.toFixed(1).replace('.0', '')}×` : '▶ 1×';
    S(speed, { opacity: speed.textContent ? P(t, d.t0 + DEMO_IN - 0.3, 0.4) : 0 });
    // caption on the video
    if (ua && !active) {
      cap.innerHTML = `<span style="font-size:20px;font-weight:800;letter-spacing:2px;color:#D9CCFF;margin-top:6px;white-space:nowrap">${esc(ua.uu.update.toUpperCase())}</span><i class="serif" style="font-size:32px">“${esc(ua.uu.text)}”</i>`;
      S(cap, { opacity: oc(P(t, ua.mo, 0.3)), borderColor: C.purple });
    } else if (active) {
      const txt = active.r.text;
      cap.innerHTML = `<img src="${LOGO}" style="width:40px;height:40px;flex:none">${esc(txt.slice(0, clamp(Math.floor((t - active.mo) * 60), 0, txt.length)))}`;
      S(cap, { opacity: oc(P(t, active.mo - 0.05, 0.3)) * (1 - P(t, active.mo + 2.5, 0.4)), borderColor: d.col, transform: `translateX(-50%) translateY(${(1 - oc(P(t, active.mo - 0.05, 0.4))) * 20}px)` });
    } else S(cap, { opacity: 0 });
    // timeline
    const px = X(clamp(src, d.S, d.E));
    S(fill, { width: px - VX + 'px' });
    S(ph, { left: px - 3 + 'px' });
    marks.forEach((m, i) => { const on = src >= d.replies[i].ts - 0.01 && u > 0; S(m, { background: on ? d.col : '#1A2238', boxShadow: on ? `0 0 16px ${d.col}` : 'none' }); });
    tc.textContent = `${mmss(src)}`;
    // chat bubbles (scroll so the newest stays in view)
    let hsum = 0;
    msgs.forEach((m) => {
      const p = oc(P(t, m.at, 0.45));
      m.e.style.display = t < m.at ? 'none' : 'block';
      S(m.e, { opacity: p, transform: `translateY(${(1 - p) * 26}px) scale(${0.96 + 0.04 * p})` });
      if (m.kind === 'user') type(m.tx, m.text, t, m.at, 70, false); else type(m.tx, m.text, t, m.at + 0.1, 60, false);
    });
    const viewH = VH - 86;
    const H = list.scrollHeight;
    S(list, { transform: `translateY(${-Math.max(0, H - viewH)}px)` });
  };
}));

// =====================================================================
// S7 · Results
// =====================================================================
scene(T_RES, T_END, (root) => {
  const t0 = T_RES;
  const k = kick(root, '04 · Results', '#7FB0FF', 'left:110px;top:88px;');
  const ti = words(root, [['Best content quality across ', ''], ['all intent types', 'grad']], 'position:absolute;left:110px;top:122px;font-size:66px;font-weight:700;');
  ti.classList.add('serif');
  const ch = mk(root, 'left:110px;top:250px;width:1010px;height:620px;', '', 'card');
  mk(ch, `position:absolute;left:36px;top:26px;font-size:24px;font-weight:700;`, `Content F1 ↑ <span style="font-weight:500;color:${C.muted};font-size:20px">&nbsp;full-trajectory evaluation</span>`);
  const PLX = 90, PLY = 90, PW = 880, PH = 390, YM = 22;
  for (const g of [0, 5, 10, 15, 20]) {
    const y = PLY + PH - (g / YM) * PH;
    mk(ch, `position:absolute;left:${PLX}px;top:${y}px;width:${PW}px;height:1px;background:rgba(255,255,255,${g ? 0.08 : 0.3});`);
    mk(ch, `position:absolute;left:${PLX - 50}px;top:${y - 11}px;width:40px;text-align:right;font-size:17px;color:${C.muted};`, String(g));
  }
  const arms = [['StreamVibe-VL (ours)', C.purple], ['MMDuet2', '#5F8F9B'], ['ViSpeak', '#5A6E9C'], ['JoyAI-VL-Interaction', '#5D6475']];
  const vals = [[10.83, 5.88, 3.30, 1.80], [19.13, 16.51, 9.51, 3.69], [8.91, 7.47, 3.84, 1.31]];
  const cats = ['Explicit', 'Implicit', 'Dynamic'];
  const bars = [];
  cats.forEach((c, gi) => {
    const gx = PLX + gi * (PW / 3) + (PW / 3 - (4 * 54 + 3 * 10)) / 2;
    mk(ch, `position:absolute;left:${PLX + gi * (PW / 3)}px;top:${PLY + PH + 14}px;width:${PW / 3}px;text-align:center;font-size:23px;font-weight:700;`, c);
    vals[gi].forEach((v, bi) => {
      const b = mk(ch, `position:absolute;left:${gx + bi * 64}px;width:54px;bottom:${620 - PLY - PH}px;height:0;border-radius:8px 8px 2px 2px;
        background:${bi ? arms[bi][1] : `linear-gradient(180deg, #C9B5FF, ${C.purple})`};${bi ? '' : `box-shadow:0 0 30px ${C.purple}aa;`}`);
      const lb = mk(ch, `position:absolute;left:${gx + bi * 64 - 10}px;width:74px;text-align:center;font-size:${bi ? 17 : 21}px;font-weight:${bi ? 600 : 800};color:${bi ? C.muted : '#E2D8FF'};`);
      bars.push({ b, lb, v, gi, bi });
    });
  });
  mk(ch, `position:absolute;left:36px;right:36px;bottom:30px;display:flex;justify-content:center;gap:28px;font-size:19px;color:${C.soft};`,
    arms.map(([n, c]) => `<span style="display:flex;align-items:center;gap:8px"><span style="width:16px;height:16px;border-radius:4px;background:${c}"></span>${n}</span>`).join(''));
  const tiles = [[10.7, (v) => `+${v.toFixed(1)}%`, 'timing & answer quality', 'over strong proactive baselines', C.teal],
    [12.3, (v) => `+${v.toFixed(1)}%`, 'from the intent-state harness', 'in sustained proactive interaction', C.purple],
    [1.5, (v) => `${v.toFixed(1)}%`, 'false-alarm rate (implicit)', 'vs. 4.1% MMDuet2 · 12.7% ViSpeak', C.blue]].map(([v, f, a, b, col], i) => {
    const c = mk(root, `left:1160px;top:${250 + i * 212}px;width:650px;height:192px;overflow:hidden;`, '', 'card');
    mk(c, `position:absolute;left:0;top:0;bottom:0;width:8px;background:${col};`);
    const num = mk(c, `position:absolute;left:36px;top:44px;font-size:72px;font-weight:800;color:${col};letter-spacing:-1px;text-shadow:0 0 36px ${col}77;`);
    mk(c, 'position:absolute;left:350px;top:52px;width:280px;font-size:25px;font-weight:700;line-height:1.25;', esc(a));
    mk(c, `position:absolute;left:350px;top:118px;width:280px;font-size:19px;color:${C.muted};line-height:1.3;`, esc(b));
    return { c, num, v, f };
  });
  const foot = mk(root, 'left:110px;top:905px;display:flex;gap:18px;', ['9B open model', 'close to proprietary models in pointwise evaluation', 'no loss of general video understanding'].map((s) =>
    `<span class="chip" style="background:rgba(255,255,255,.07);border:1.5px solid rgba(255,255,255,.2);font-size:20px;font-weight:600">✓ ${s}</span>`).join(''), 'abs');
  return (t) => {
    S(k, { opacity: P(t, t0 + 0.1, 0.5) });
    animWords(ti, t, t0 + 0.15, 0.07);
    const cp = oc(P(t, t0 + 0.3, 0.7));
    S(ch, { opacity: cp, transform: `translateY(${(1 - cp) * 50}px)` });
    bars.forEach((d) => {
      const p = oq(P(t, t0 + 0.9 + d.gi * 0.3 + d.bi * 0.08, 1.2));
      const h = (d.v / YM) * PH * p;
      S(d.b, { height: h + 'px' });
      S(d.lb, { top: PLY + PH - h - 30 + 'px', opacity: P(t, t0 + 1.1 + d.gi * 0.3 + d.bi * 0.08, 0.4) });
      d.lb.textContent = (d.v * p).toFixed(1);
    });
    tiles.forEach((d, i) => {
      const p = oc(P(t, t0 + 1.6 + i * 0.35, 0.8));
      S(d.c, { opacity: p, transform: `translateX(${(1 - p) * 100}px)` });
      counter(d.num, d.v, t, t0 + 1.8 + i * 0.35, 1.5, d.f);
    });
    S(foot, { opacity: P(t, t0 + 3.4, 0.7) });
    exitFx(root, t, T_END, 0.6);
  };
});

// =====================================================================
// S8 · End card
// =====================================================================
scene(T_END, T_TOTAL, (root) => {
  const t0 = T_END;
  const logo = mk(root, 'left:895px;top:220px;width:130px;height:130px;', `<img src="${LOGO}" style="width:130px;height:130px;filter:drop-shadow(0 0 30px rgba(111,168,255,.6))">`, 'abs');
  const title = words(root, [['StreamVibe', '']], 'position:absolute;left:0;right:0;top:370px;text-align:center;font-size:140px;font-weight:700;text-shadow:0 6px 40px rgba(0,0,0,.6);');
  title.classList.add('serif');
  const tag = mk(root, 'left:0;right:0;top:545px;text-align:center;font-size:32px;font-weight:600;letter-spacing:5px;color:#D5DCEA;text-transform:uppercase;', 'See the task · Infer the intent · Keep up as it changes', 'abs');
  const row = mk(root, 'left:0;right:0;top:650px;display:flex;justify-content:center;gap:22px;', '', 'abs');
  const chips = [['StreamVibe-Bench', C.blue], ['StreamVibe-VL', C.teal], ['StreamVibe-Harness', C.purple]].map(([n, c]) =>
    mk(row, `background:${c}26;border:2px solid ${c};font-size:26px;padding:12px 28px;`, n, 'chip'));
  return (t) => {
    const lp = ob(P(t, t0 + 0.3, 0.8));
    S(logo, { opacity: P(t, t0 + 0.3, 0.4), transform: `scale(${0.4 + 0.6 * lp})` });
    animWords(title, t, t0 + 0.6, 0.1, 0.9, 50);
    const tp = oc(P(t, t0 + 1.3, 0.8));
    S(tag, { opacity: tp, letterSpacing: `${5 + 6 * (1 - tp)}px` });
    chips.forEach((c, i) => { const p = ob(P(t, t0 + 1.9 + i * 0.15, 0.7)); S(c, { opacity: clamp(p), transform: `scale(${0.7 + 0.3 * p})` }); });
    const e = P(t, T_TOTAL - 1.2, 1.2);
    S(root, { opacity: 1 - e });
  };
});

// ---------- frame driver ----------
function render(t) {
  for (const b of blobs) {
    const { x, y, w, ph } = b._p;
    S(b, { left: x - 650 + 160 * Math.sin(t * w * 2 + ph) + 'px', top: y - 650 + 110 * Math.cos(t * w * 1.6 + ph) + 'px' });
  }
  // wall: hero and end card
  const wh = P(t, 0, 0.9) * (1 - P(t, 5.9, 0.6)), we = P(t, T_END - 0.3, 1.0) * (1 - P(t, T_TOTAL - 1.2, 1.2));
  const wo = Math.max(wh, we * 0.8);
  S(wallBox, { opacity: wo, display: wo > 0 ? 'block' : 'none' });
  if (wo > 0) {
    const f = t < 10 ? Math.floor(t * FPS) : 540 + Math.floor((t - T_END) * FPS);
    setSrc(wallImg, MEDIA + `wall/${pad(clamp(f, 0, 1019), 4)}.jpg`);
    S(wallImg, { transform: `scale(${t < 10 ? 1.02 + t * 0.012 : 1.1 - (t - T_END) * 0.01})` });
  }
  S(hud, { opacity: 0.85 * P(t, 7.0, 0.6) * (1 - P(t, T_END - 0.6, 0.5)) * (t > 55 && t < 57.2 ? 0 : 1) });
  S(prog, { width: (t / T_TOTAL) * 1920 + 'px' });
  for (const s of scenes) {
    const on = t >= s.t0 && t <= s.t1;
    s.root.style.display = on ? 'block' : 'none';
    if (on) s.render(t);
  }
}
window.TOTAL = T_TOTAL;
window.renderFrame = async (t) => {
  pending = [];
  render(t);
  await Promise.all(pending);
};
window.ready = (async () => {
  await Promise.all(['400 20px Inter', '600 20px Inter', '700 20px Inter', '800 20px Inter', 'italic 400 20px Inter'].map((f) => document.fonts.load(f)));
  await document.fonts.ready;
  await Promise.all([...document.images].map((i) => i.decode().catch(() => {})));
})();
