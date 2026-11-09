/** 뽐뿌 게시용 분양 아파트 소개 이미지를 실제 앱 캡처로 합성한다(생성 모델로 화면을 다시 그리지 않음).
 *
 *   APT_INSIGHTS_DIR=../apt-insights node marketing/community/2026-11-09-presale/build.mjs
 *
 * 입력: apt-insights 저장소 design/store-listing/captures 의 분양 캡처. 출력: 이 폴더의 *.jpg.
 * Playwright 가 필요하다(없으면 PLAYWRIGHT_MODULE_PATH 로 경로 전달). */
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const APT = path.resolve(process.env.APT_INSIGHTS_DIR ?? path.join(HERE, '../../../../apt-insights'));
const CAPTURES = path.join(APT, 'design/store-listing/captures');
const pw = await import(process.env.PLAYWRIGHT_MODULE_PATH ? pathToFileURL(process.env.PLAYWRIGHT_MODULE_PATH).href : 'playwright');
const chromium = pw.chromium ?? pw.default.chromium;

const SITE_3D = '2026-11-08/desktop-presale-3d-seoulone.jpg';
const TIMELINE = '2026-11-08/desktop-presale-home-timeline.jpg';
const SITE_JIJE = '2026-11-09/desktop-presale-3d-jije.png';
const NOTICE_AI = '2026-11-08/phone-presale-notice-ai.jpg';
const NOTICE_NOTES = '2026-11-08/phone-presale-notes.jpg';
const CALC = '2026-11-08/phone-presale-calculator.jpg';

async function dataUrl(rel) {
  const file = path.join(CAPTURES, rel);
  const mime = rel.endsWith('.png') ? 'png' : 'jpeg';
  return `data:image/${mime};base64,${(await fs.readFile(file)).toString('base64')}`;
}

const logo = `<svg viewBox="0 0 32 32" fill="none" aria-hidden="true"><rect width="32" height="32" rx="9" fill="currentColor" opacity=".18"/><path d="M9 25V10l10-4v19M19 13h5v12M6 25h21M13 11v2m0 3v2m0 3v2m3-13v2m0 3v2m0 3v2" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
const CSS = `
*{box-sizing:border-box}html,body{margin:0;overflow:hidden}
body{font-family:'Pretendard','Apple SD Gothic Neo','Noto Sans KR',sans-serif;-webkit-font-smoothing:antialiased;word-break:keep-all}
.c{position:relative;overflow:hidden;background:#0b0d1a;color:#fff}
.c.light{background:linear-gradient(160deg,#f3f0ff,#e6efff);color:#151a33}
.copy{position:absolute;left:72px;right:72px;top:72px}
.pill{display:inline-block;padding:10px 20px;border-radius:999px;background:#ffffff1f;border:1px solid #ffffff33;font-size:25px;font-weight:600;letter-spacing:-.5px;color:#dcd6ff}
.light .pill{background:#4f46e51a;border-color:#4f46e533;color:#4f46e5}
h1{margin:26px 0 0;font-size:62px;line-height:1.26;letter-spacing:-2.4px;font-weight:800}
.sub{margin:20px 0 0;font-size:29px;line-height:1.5;letter-spacing:-.6px;color:#d5d3e8}
.light .sub{color:#4c5470}
.card{position:absolute;left:40px;right:40px;border-radius:28px;overflow:hidden;box-shadow:0 24px 60px #00000066;border:1px solid #ffffff22}
.light .card{box-shadow:0 20px 44px #1a396b2e;border-color:#d6deeb}
.card img{display:block;width:100%;height:100%;object-fit:cover}
.chips{position:absolute;left:72px;right:72px;display:flex;flex-direction:column;gap:14px}
.chip{display:flex;gap:16px;align-items:flex-start;font-size:28px;line-height:1.4;letter-spacing:-.6px;font-weight:600;color:#eceaf8}
.chip i{flex:none;margin-top:9px;width:14px;height:14px;border-radius:50%;background:#8b82ff}
.light .chip{color:#262d4a}.light .chip i{background:#4f46e5}
.chip small{display:block;font-size:22px;font-weight:500;color:#aeabc9;margin-top:2px}
.light .chip small{color:#59607a}
.phones{position:absolute;left:0;right:0;top:372px;display:flex;justify-content:center;gap:28px}
.ph{width:296px;padding:9px;border-radius:44px;background:linear-gradient(120deg,#fff,#d6deeb);box-shadow:0 22px 40px #1a396b30}
.ph .screen{height:640px;border-radius:36px;overflow:hidden;background:#faf9fe}
.ph img{width:100%;height:100%;object-fit:cover;object-position:top}
.ph:nth-child(1){transform:rotate(-4deg) translateY(26px)}.ph:nth-child(3){transform:rotate(4deg) translateY(26px)}
.label{margin-top:48px;text-align:center;font-size:26px;font-weight:700;letter-spacing:-.6px;color:#151a33}
.label small{display:block;margin-top:6px;font-size:20px;font-weight:500;color:#59607a}
.foot{position:absolute;left:72px;right:72px;bottom:52px;display:flex;align-items:flex-end;justify-content:space-between}
.brand{display:flex;gap:14px;align-items:center;font-size:31px;font-weight:700;letter-spacing:-.8px;color:#c7c2ff}
.brand svg{width:46px;height:46px}
.note{font-size:20px;line-height:1.5;color:#b9b6cf;text-align:right}
.light .brand{color:#4f46e5}.light .note{color:#59607a}
`;
const footer = (note) => `<div class="foot"><div class="brand">${logo}<span>아파트 인사이트</span></div><div class="note">${note}</div></div>`;
const NOTE_COMMON = '화면 예시 · 분양 기능은 로그인 후 이용<br>AI 정리는 참고용, 청약 전 공고문 원문 확인 필수';

async function render(browser, name, width, height, body, classes = '') {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html lang="ko"><meta charset="utf-8"><style>${CSS}</style><body><main class="c ${classes}" style="width:${width}px;height:${height}px">${body}</main></body></html>`, { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  // 글·카드·하단 띠가 서로 겹치지 않는지 확인한다.
  await page.evaluate(() => {
    const top = (sel) => document.querySelector(sel)?.getBoundingClientRect();
    const copy = top('.copy'), card = top('.card'), chips = top('.chips'), phones = top('.phones'), foot = top('.foot');
    const bad = (a, b, gap) => a && b && a.bottom > b.top - gap;
    if (bad(copy, card, 12) || bad(copy, phones, 10) || bad(card, chips, 12) || bad(chips, foot, 12) || bad(card, foot, 12) || bad(copy, foot, 20)) throw new Error('overlap ' + JSON.stringify({copy: copy?.bottom, cardTop: card?.top, cardBottom: card?.bottom, chipsTop: chips?.top, chipsBottom: chips?.bottom, footTop: foot?.top}));
  });
  await page.screenshot({ path: path.join(HERE, name), type: 'jpeg', quality: 92 });
  await page.close();
  console.log(name, width, height);
}

const browser = await chromium.launch({ headless: true });
try {
  const [site, timeline, ai, notes, calc, jije] = await Promise.all([SITE_3D, TIMELINE, NOTICE_AI, NOTICE_NOTES, CALC, SITE_JIJE].map(dataUrl));

  // 01 공사 현장 3D (4:5)
  await render(browser, '01-site-3d-4x5.jpg', 1080, 1350, `
    <div class="copy"><span class="pill">분양 아파트 · 공사 부지 주변 3D</span><h1>아직 안 지어진 단지,<br>공사 현장부터 둘러보기</h1></div>
    <div class="card" style="top:332px;height:650px"><img src="${site}" style="object-position:100% 50%"/></div>
    <div class="chips" style="top:1014px">
      <div class="chip"><i></i><span>사업지는 공사 현장으로, 주변 건물·역·학교와 함께<small>착공일과 입주 예정월로 계산한 5단계 공정 막대</small></span></div>
      <div class="chip"><i></i><span>동 위치·모양은 실제 배치가 아닌 기호예요<small>공정도 실제 공정률이 아니라 일정으로 계산한 예상</small></span></div>
    </div>${footer(NOTE_COMMON)}`);

  // 02 공고문 분석 (4:5, 밝은 배경)
  const phone = (img, title, sub, pos = 'top') => `<div><div class="ph"><div class="screen"><img src="${img}" style="object-position:${pos}"/></div></div><div class="label">${title}<small>${sub}</small></div></div>`;
  await render(browser, '02-notice-analysis-4x5.jpg', 1080, 1350, `
    <div class="copy" style="text-align:center"><span class="pill">복잡한 모집공고문, 대신 읽어 드려요</span><h1 style="font-size:58px">수십 쪽 공고문을<br>쪽 번호 붙여 정리</h1></div>
    <div class="phones">${phone(ai, '핵심 조건·일정', '문장마다 원문 쪽 번호')}${phone(notes, '소음·시설 유의사항', '층간소음 등급도 정리', '0 30%')}${phone(calc, '분양 대금·이자 계산', '공고문 납부 조건으로 채움', '0 6%')}</div>
    ${footer(NOTE_COMMON)}`, 'light');

  // 03 일정 추적 (4:5)
  await render(browser, '03-schedule-tracking-4x5.jpg', 1080, 1350, `
    <div class="copy"><span class="pill">분양 아파트 모니터링</span><h1>청약부터 입주까지,<br>일정이 한 줄로</h1></div>
    <div class="card" style="top:330px;height:${Math.round(1000 * 705 / 1950)}px;border-radius:24px"><img src="${timeline}" style="object-position:top;object-fit:cover"/></div>
    <div class="chips" style="top:722px">
      <div class="chip"><i></i><span>청약홈 공식 공고를 매시 확인해 단계를 갱신<small>공고 · 특공 · 1·2순위 · 발표 · 계약 · 공사 · 입주</small></span></div>
      <div class="chip"><i></i><span>정정 공고로 일정이 바뀌면 알림<small>무순위·재공급 공고도 함께 모아 보여 줘요</small></span></div>
    </div>
    <div class="card" style="top:938px;height:262px;border-radius:24px"><img src="${jije}" style="object-position:50% 22%"/><span class="pill" style="position:absolute;left:20px;top:18px;background:#0b0d1acc;font-size:22px;padding:8px 16px">공사 중인 단지는 주변 3D로 바로 이동</span></div>
    ${footer(NOTE_COMMON)}`);

  // 04 계산기 (4:5, 밝은 배경)
  await render(browser, '04-calculator-4x5.jpg', 1080, 1350, `
    <div class="copy"><span class="pill">분양 대금·이자 계산기</span><h1>주택형·층·옵션·확장비,<br>금리까지 넣어서 계산</h1></div>
    <div class="ph" style="position:absolute;left:72px;top:340px;width:420px;padding:12px;border-radius:56px;transform:rotate(-2deg)"><div class="screen" style="height:830px;border-radius:46px"><img src="${calc}" style="object-position:0 2%"/></div></div>
    <div class="chips" style="left:540px;right:56px;top:400px;gap:30px">
      <div class="chip"><i></i><span>주택형·층별 분양가<small>공고문 납부 조건이 기본값</small></span></div>
      <div class="chip"><i></i><span>발코니 확장·유상옵션 선택<small>시스템 에어컨·가전·마감재</small></span></div>
      <div class="chip"><i></i><span>금리 기본값은 최근 주담대 금리<small>직접 바꾸면 바로 다시 계산</small></span></div>
      <div class="chip"><i></i><span>입주 때 필요한 돈, 중도금 이자, 잔금 대출 월 상환액</span></div>
    </div>${footer('화면 예시 · 분양 기능은 로그인 후 이용<br>실제 대출 한도는 소득·규제에 따라 달라요')}`, 'light');

  // 05 정사각 썸네일(목록 썸네일이 정사각으로 잘리는 곳용)
  await render(browser, '05-site-3d-square.jpg', 1080, 1080, `
    <div class="copy" style="top:60px"><span class="pill">분양 아파트 · 공사 부지 주변 3D</span><h1 style="font-size:56px;margin-top:22px">아직 안 지어진 단지,<br>공사 현장부터 둘러보기</h1></div>
    <div class="card" style="top:316px;height:610px"><img src="${site}" style="object-position:100% 50%"/></div>
    ${footer('화면 예시 · 공정은 일정으로 계산한 예상')}`);
} finally {
  await browser.close();
}
