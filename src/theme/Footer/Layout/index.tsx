import type { ComponentProps, ReactNode } from 'react';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import OriginalFooterLayout from '@theme-original/Footer/Layout';

type Props = ComponentProps<typeof OriginalFooterLayout>;

// 링크 묶음 아래에 사이트 이름과 RSS/GitHub를 둔다(저작권 문구는 두지 않는다).
export default function FooterLayout(props: Props): ReactNode {
  const mark = useBaseUrl('/img/alvins-lab-terminal.svg');
  return (
    <OriginalFooterLayout
      {...props}
      copyright={
        <div className="al-footer-brand">
          <Link to="/about" className="al-footer-brand__name">
            <img src={mark} alt="" width={28} height={28} />
            <span>alvin.ing</span>
          </Link>
          <nav className="al-footer-brand__links" aria-label="구독과 코드">
            <a href={useBaseUrl('/blog/rss.xml')}>RSS</a>
            <a href="https://github.com/seogi1004" target="_blank" rel="noopener">
              GitHub
            </a>
          </nav>
        </div>
      }
    />
  );
}
