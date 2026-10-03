import type { ReactNode } from 'react';
import OriginalColorModeToggle from '@theme-original/Navbar/ColorModeToggle';
import type OriginalProps from '@theme/Navbar/ColorModeToggle';
import type { ComponentProps } from 'react';
import { APT_ORIGIN } from '@site/src/data/realEstate';

type Props = ComponentProps<typeof OriginalProps>;

// 상단 오른쪽 버튼 묶음. 모바일에서는 GPT 앱처럼 하나의 캡슐 안에 아파트 인사이트 링크와
// 테마 전환을 나란히 두고, 데스크톱에서는 '지역별 실거래가' 버튼이 있어 링크 아이콘을 숨긴다(custom.css).
export default function NavbarColorModeToggle(props: Props): ReactNode {
  return (
    <div className="al-top-actions">
      <a
        className="al-top-actions__apt"
        href={APT_ORIGIN}
        target="_blank"
        rel="noopener"
        aria-label="아파트 인사이트 열기"
        title="아파트 인사이트"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 21h18M5 21V9l7-5 7 5v12" />
          <path d="M9.5 11h.01M14.5 11h.01M9.5 15h.01M14.5 15h.01" strokeWidth="2.6" />
          <path d="M10.5 21v-3h3v3" />
        </svg>
      </a>
      <OriginalColorModeToggle {...props} />
    </div>
  );
}
