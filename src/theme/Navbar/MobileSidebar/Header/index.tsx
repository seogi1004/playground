import type { ReactNode } from 'react';
import { useNavbarMobileSidebar } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';

// 테마 전환 버튼은 모바일에서도 상단바 오른쪽에 두므로(custom.css) 메뉴 머리에는 로고와 닫기만 남긴다.
export default function NavbarMobileSidebarHeader(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <button
        type="button"
        aria-label={translate({
          id: 'theme.docs.sidebar.closeSidebarButtonAriaLabel',
          message: 'Close navigation bar',
          description: 'The ARIA label for close button of mobile sidebar',
        })}
        className="clean-btn navbar-sidebar__close"
        onClick={() => mobileSidebar.toggle()}
      >
        <IconClose color="var(--al-ink-2)" />
      </button>
    </div>
  );
}
