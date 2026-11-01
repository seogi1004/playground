/** 뽐뿌·블라인드 게시용 이미지 3장을 실제 앱 캡처로 합성한다(생성 모델로 화면을 다시 그리지 않음).
 *
 *   APT_INSIGHTS_DIR=../apt-insights node marketing/community/2026-11-01-3d-map/build.mjs
 *
 * 입력: apt-insights 저장소 design/store-listing/captures 의 캡처. 출력: 이 폴더의 *.jpg.
 * Playwright 와 sharp 가 필요하다(없으면 PLAYWRIGHT_MODULE_PATH·SHARP_MODULE_PATH 로 경로 전달). */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const APT = path.resolve(process.env.APT_INSIGHTS_DIR ?? path.join(HERE, '../../../../apt-insights'));
const CAPTURES = path.join(APT, 'design/store-listing/captures');
const load = (env, name) => import(process.env[env] ? pathToFileURL(process.env[env]).href : name);
const playwright = await load('PLAYWRIGHT_MODULE_PATH', 'playwright');
const chromium = playwright.chromium ?? playwright.default.chromium;
const { default: sharp } = await load('SHARP_MODULE_PATH', 'sharp');

const MAP_SCENE = 'captures/2026-11-01/phone-3d-map-scenic.png';
const MAP_UI = 'captures/2026-11-01/phone-3d-map.png';
const TRANSACTIONS = 'captures/member/06-transaction-analysis-iphone.jpg';
const FORECAST = 'captures/2026-10-01/phone-forecast.jpg';

async function dataUrl(relative) {
  const file = path.join(APT, 'design/store-listing', relative);
  const type = file.endsWith('.png') ? 'png' : 'jpeg';
  return `data:image/${type};base64,${(await fs.readFile(file)).toString('base64')}`;
}

const logo = `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect width="32" height="32" rx="9" fill="currentColor" opacity=".18"/><path d="M9 25V10l10-4v19M19 13h5v12M6 25h21M13 11v2m0 3v2m0 3v2m3-13v2m0 3v2m0 3v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
const CSS = `
*{box-sizing:border-box}html,body{margin:0;overflow:hidden}
body{font-family:'Apple SD Gothic Neo','Pretendard','Noto Sans KR',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
.c{position:relative;overflow:hidden}
.scene{position:absolute;left:0;width:100%;height:auto}
.shade-top{position:absolute;left:0;right:0;top:0;height:12%;background:linear-gradient(#0b0d1a99,transparent)}
.shade-bottom{position:absolute;left:0;right:0;bottom:0;height:44%;background:linear-gradient(transparent,#0b0d1ae0 35%,#0b0d1a 62%)}
.copy{position:absolute;left:72px;right:72px;top:84px;color:#fff}
.pill{display:inline-block;padding:10px 20px;border-radius:999px;background:#ffffff1f;border:1px solid #ffffff33;font-size:26px;font-weight:600;letter-spacing:-.5px;color:#dcd6ff}
h1{margin:28px 0 0;font-size:70px;line-height:1.24;letter-spacing:-2.6px;font-weight:800}
.sub{margin:22px 0 0;font-size:30px;line-height:1.5;letter-spacing:-.6px;color:#d5d3e8}
.foot{position:absolute;left:72px;right:72px;bottom:56px;display:flex;align-items:flex-end;justify-content:space-between;color:#fff}
.brand{display:flex;gap:14px;align-items:center;font-size:32px;font-weight:700;letter-spacing:-.8px;color:#c7c2ff}
.brand svg{width:48px;height:48px}
.note{font-size:21px;line-height:1.5;color:#b9b6cf;text-align:right}
.light{background:linear-gradient(160deg,#f3f0ff,#e6efff)}
.light .copy{color:#151a33;top:80px;text-align:center}
.light .pill{background:#4f46e51a;border-color:#4f46e533;color:#4f46e5}
.light h1{font-size:60px}
.light .sub{color:#4c5470}
.phones{position:absolute;left:0;right:0;top:372px;display:flex;justify-content:center;gap:28px}
.ph{width:296px;padding:9px;border-radius:44px;background:linear-gradient(120deg,#fff,#d6deeb);box-shadow:0 22px 40px #1a396b30}
.ph .screen{height:640px;border-radius:36px;overflow:hidden;background:#faf9fe}
.ph img{width:100%;height:100%;object-fit:cover;object-position:top}
.ph:nth-child(1){transform:rotate(-4deg) translateY(26px)}.ph:nth-child(3){transform:rotate(4deg) translateY(26px)}
.label{margin-top:48px;text-align:center;font-size:27px;font-weight:700;letter-spacing:-.6px;color:#151a33}
.label small{display:block;margin-top:6px;font-size:20px;font-weight:500;color:#59607a}
.copy.bottom-copy{top:auto;bottom:170px}
.copy.bottom-copy h1{margin-top:0}
.top-pill{position:absolute;left:72px;top:64px}
.light .foot{color:#151a33}.light .brand{color:#4f46e5}.light .note{color:#59607a}
`;

const footer = (dark) => `<div class="foot"><div class="brand">${logo}<span>아파트 인사이트</span></div><div class="note">화면 예시 · 단지 주변 3D는 로그인 후 이용<br>전망은 참고용이며 실제 결과와 다를 수 있습니다</div></div>`;

async function render(browser, name, width, height, body, classes = '') {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html lang="ko"><meta charset="utf-8"><style>${CSS}</style><body><main class="c ${classes}" style="width:${width}px;height:${height}px">${body}</main></body></html>`, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  // Copy must stay clear of the footer at every size.
  await page.evaluate(() => {
    const copy = document.querySelector('.copy')?.getBoundingClientRect();
    const foot = document.querySelector('.foot').getBoundingClientRect();
    const phones = document.querySelector('.phones')?.getBoundingClientRect();
    if (copy && copy.bottom > foot.top - 24) throw new Error('copy overlaps footer');
    if (copy && phones && copy.bottom > phones.top - 10) throw new Error('copy overlaps phones');
  });
  const dest = path.join(HERE, name);
  await page.screenshot({ path: dest, type: 'jpeg', quality: 92 });
  await page.close();
  const m = await sharp(dest).metadata();
  if (m.width !== width || m.height !== height) throw new Error(`Wrong size: ${name}`);
  console.log(name, width, height, (await fs.stat(dest)).size);
}

const browser = await chromium.launch({ headless: true });
try {
  const scene = await dataUrl(MAP_SCENE);
  // The scenic capture is 1320 px wide; cropY is in capture pixels and keeps the
  // tower top in frame while dropping the app header panel and bottom buttons.
  const hero = (h1Size, cropY) => `<img class="scene" style="top:${-cropY * 1080 / 1320}px" src="${scene}"/><div class="shade-top"></div><div class="shade-bottom"></div>
    <span class="pill top-pill">직접 만들고 있는 부동산 앱</span><div class="copy bottom-copy"><h1 style="font-size:${h1Size}px">롯데타워 보이는 단지,<br>주변을 3D로 둘러봤어요</h1>
    <p class="sub">역·학교·공원과 반경 안 랜드마크까지 입체로</p></div>${footer(true)}`;
  await render(browser, '01-jamsil-3d-4x5.jpg', 1080, 1350, hero(68, 560));
  await render(browser, '03-jamsil-3d-square.jpg', 1080, 1080, hero(56, 600));

  const phones = [
    [TRANSACTIONS, '최근 실거래', '내 평형 거래부터'],
    [FORECAST, '1년 뒤 예상 범위', '대표 시세와 함께'],
    [MAP_UI, '단지 주변 3D', '랜드마크·역·학교'],
  ];
  const cards = (await Promise.all(phones.map(async ([file, title, sub]) =>
    `<div><div class="ph"><div class="screen"><img src="${await dataUrl(file)}"/></div></div><div class="label">${title}<small>${sub}</small></div></div>`))).join('');
  await render(browser, '02-features-4x5.jpg', 1080, 1350,
    `<div class="copy"><span class="pill">관심 단지 하나로</span><h1>실거래부터 1년 뒤 전망,<br>주변 3D까지</h1></div><div class="phones">${cards}</div>${footer(false)}`, 'light');
} finally {
  await browser.close();
}
