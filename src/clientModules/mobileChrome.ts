// 모바일 상단 플로팅 버튼의 페이드 배경과 손가락을 따라오는 메뉴 열기·닫기.
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

// 메뉴를 손가락을 따라 끌어 연다. 가로 이동이 세로보다 확실히 클 때만 끌기를 시작하고,
// 손을 떼면 절반 가까이 열렸거나 빠르게 밀었을 때 열고(닫고), 아니면 원래대로 돌아간다.
// 끝 상태 전환은 Docusaurus 버튼을 눌러 맡기고, 인라인 스타일은 상태가 바뀐 다음 프레임에 지워
// 기본 전환 애니메이션이 끌던 위치에서 이어지게 한다.
function setupSwipe(): void {
  const mobile = window.matchMedia('(max-width: 996px)');
  let start: { x: number; y: number; t: number; open: boolean } | null = null;
  let dragging = false;
  let width = 0;
  let lastDx = 0;

  const panel = () => document.querySelector<HTMLElement>('.navbar-sidebar');
  const backdrop = () => document.querySelector<HTMLElement>('.navbar-sidebar__backdrop');
  const isOpen = () => document.querySelector('.navbar-sidebar--show') !== null;

  const paint = (offset: number) => {
    const sidebar = panel();
    const shade = backdrop();
    if (!sidebar || !shade) return;
    const progress = 1 + offset / width;
    for (const el of [sidebar, shade]) {
      el.style.transition = 'none';
      el.style.visibility = 'visible';
    }
    sidebar.style.opacity = '1';
    sidebar.style.transform = `translate3d(${offset}px, 0, 0)`;
    shade.style.opacity = String(progress);
  };

  const release = () => {
    for (const el of [panel(), backdrop()]) {
      if (!el) continue;
      el.style.transition = '';
      el.style.visibility = '';
      el.style.opacity = '';
      el.style.transform = '';
    }
  };

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
      start = ignored ? null : { x: touch.clientX, y: touch.clientY, t: event.timeStamp, open: isOpen() };
      dragging = false;
      lastDx = 0;
    },
    { passive: true },
  );

  document.addEventListener(
    'touchmove',
    (event) => {
      if (!start) return;
      const touch = event.touches[0];
      const dx = touch.clientX - start.x;
      const dy = touch.clientY - start.y;
      if (!dragging) {
        if (Math.abs(dx) < 10 && Math.abs(dy) < 10) return;
        // 세로 스크롤이거나 이미 열린(닫힌) 쪽으로 미는 동작이면 끌기를 시작하지 않는다.
        const wrongWay = start.open ? dx > 0 : dx < 0;
        if (Math.abs(dy) > Math.abs(dx) * 0.6 || wrongWay) {
          start = null;
          return;
        }
        width = panel()?.getBoundingClientRect().width ?? 0;
        if (!width) {
          start = null;
          return;
        }
        dragging = true;
      }
      if (event.cancelable) event.preventDefault();
      lastDx = dx;
      const offset = start.open ? Math.min(0, Math.max(-width, dx)) : Math.min(0, Math.max(-width, dx - width));
      paint(offset);
    },
    { passive: false },
  );

  const finish = (event: TouchEvent) => {
    if (!start || !dragging) {
      start = null;
      return;
    }
    const velocity = lastDx / Math.max(1, event.timeStamp - start.t);
    const moved = Math.abs(lastDx) / width;
    const commit = moved > 0.35 || (Math.abs(velocity) > 0.5 && Math.abs(lastDx) > SWIPE_MIN / 2);
    const wasOpen = start.open;
    start = null;
    dragging = false;

    if (commit) {
      const button = wasOpen
        ? document.querySelector<HTMLButtonElement>('.navbar-sidebar__close')
        : document.querySelector<HTMLButtonElement>('.navbar__toggle');
      button?.click();
      // React가 열림 상태를 반영한 뒤 인라인 스타일을 지워야 전환이 끌던 위치에서 이어진다.
      requestAnimationFrame(() => requestAnimationFrame(release));
    } else {
      release();
    }
  };

  document.addEventListener('touchend', finish, { passive: true });
  document.addEventListener('touchcancel', finish, { passive: true });
}

if (ExecutionEnvironment.canUseDOM) {
  window.addEventListener('scroll', syncScrolled, { passive: true });
  syncScrolled();
  setupSwipe();
}

export function onRouteDidUpdate(): void {
  if (ExecutionEnvironment.canUseDOM) syncScrolled();
}
