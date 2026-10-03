import type { ReactNode } from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';

// 모바일 플로팅 메뉴 버튼. 기본 세 줄 아이콘 대신 길이가 다른 두 줄 아이콘을 쓴다.
export default function MobileSidebarToggle(): ReactNode {
  const { toggle, shown } = useNavbarMobileSidebar();
  return (
    <button
      onClick={toggle}
      aria-label={translate({
        id: 'theme.docs.sidebar.toggleSidebarButtonAriaLabel',
        message: 'Toggle navigation bar',
        description: 'The ARIA label for hamburger menu button of mobile navigation',
      })}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M3 7h14M3 13h9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
      </svg>
    </button>
  );
}
