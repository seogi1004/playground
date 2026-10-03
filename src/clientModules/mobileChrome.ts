// 모바일 상단 플로팅 버튼의 페이드 배경과 좌우 스와이프 메뉴 열기·닫기.
// 상단 페이드는 스크롤한 뒤에만 보여 주고(첫 화면 배경을 가리지 않게), 스와이프는
// 화면 가장자리(브라우저·OS 뒤로가기 제스처)와 가로 스크롤 영역(표·코드)에서는 무시한다.
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const SCROLLED_AT = 8;
const SWIPE_MIN = 60;
const EDGE_GUARD = 20;

function syncScrolled(): void {
  document.documentElement.toggleAttribute('data-scrolled', window.scrollY > SCROLLED_AT);
}

function insideHorizontalScroller(target: EventTarget | null): boolean {
  for (let el = target instanceof Element ? target : null; el && el !== document.body; el = el.parentElement) {
    if (el.scrollWidth > el.clientWidth) {
      const { overflowX } = getComputedStyle(el);
      if (overflowX === 'auto' || overflowX === 'scroll') return true;
    }
  }
  return false;
}

function setupSwipe(): void {
  const mobile = window.matchMedia('(max-width: 996px)');
  let start: { x: number; y: number } | null = null;

  document.addEventListener(
    'touchstart',
    (event) => {
      const touch = event.touches[0];
      const ignored =
        !mobile.matches ||
        event.touches.length !== 1 ||
        touch.clientX < EDGE_GUARD ||
        touch.clientX > window.innerWidth - EDGE_GUARD ||
        insideHorizontalScroller(event.target);
      start = ignored ? null : { x: touch.clientX, y: touch.clientY };
    },
    { passive: true },
  );

  document.addEventListener(
    'touchend',
    (event) => {
      if (!start) return;
      const touch = event.changedTouches[0];
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;
      start = null;
      if (Math.abs(dx) < SWIPE_MIN || Math.abs(dy) > Math.abs(dx) * 0.6) return;

      const open = document.querySelector('.navbar-sidebar--show') !== null;
      if (dx > 0 && !open) {
        document.querySelector<HTMLButtonElement>('.navbar__toggle')?.click();
      } else if (dx < 0 && open) {
        document.querySelector<HTMLButtonElement>('.navbar-sidebar__close')?.click();
      }
    },
    { passive: true },
  );
}

if (ExecutionEnvironment.canUseDOM) {
  window.addEventListener('scroll', syncScrolled, { passive: true });
  syncScrolled();
  setupSwipe();
}

export function onRouteDidUpdate(): void {
  if (ExecutionEnvironment.canUseDOM) syncScrolled();
}
