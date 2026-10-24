// Render promo v2 frames with Playwright.
//   node render.js --at 3,12.5,40          -> video/promo2/qa/at_<t>.jpg (spot checks)
//   node render.js --worker i --of n       -> video/promo2/frames/%05d.jpg (every n-th block of frames)
// Run with LD_LIBRARY_PATH=~/.local/chromelibs/root/usr/lib/x86_64-linux-gnu
const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');
const T = '/home/chengzhiliu_google_com/code/talk';
const OUT = '/home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/out';
const FPS = 30;
const arg = (k) => { const i = process.argv.indexOf(k); return i > 0 ? process.argv[i + 1] : null; };

(async () => {
  const browser = await chromium.launch({ args: ['--allow-file-access-from-files', '--disable-web-security'] });
  const page = await browser.newPage({ viewport: { width: 1920, height: 1080 } });
  page.on('pageerror', (e) => console.error('pageerror', e.message));
  page.on('console', (m) => { if (m.type() === 'error') console.error('console', m.text()); });
  await page.goto('file://' + '/home/chengzhiliu_google_com/code/streamvibe_site/_work/promo/promo.html');
  await page.evaluate(() => window.ready);
  const total = await page.evaluate(() => window.TOTAL);
  const shot = async (t, file) => {
    await page.evaluate((x) => window.renderFrame(x), t);
    await page.screenshot({ path: file, type: 'jpeg', quality: 93 });
  };
  if (arg('--at')) {
    fs.mkdirSync(path.join(OUT, 'qa'), { recursive: true });
    for (const t of arg('--at').split(',').map(Number)) await shot(t, path.join(OUT, 'qa', `at_${t.toFixed(2)}.jpg`));
    console.log('total', total.toFixed(2));
  } else {
    const wi = Number(arg('--worker') || 0), wn = Number(arg('--of') || 1);
    const n = Math.round(total * FPS), dir = path.join(OUT, 'frames');
    fs.mkdirSync(dir, { recursive: true });
    const per = Math.ceil(n / wn), a = wi * per, b = Math.min(n, a + per);
    for (let f = a; f < b; f++) await shot(f / FPS, path.join(dir, String(f).padStart(5, '0') + '.jpg'));
    console.log(`worker ${wi}: frames ${a}-${b - 1} of ${n}`);
  }
  await browser.close();
})();
