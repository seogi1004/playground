import styles from './styles.module.css';

function Legend({ items }: { items: Array<{ label: string; className: string }> }) {
  return (
    <div className={styles.legend} aria-label="차트 범례">
      {items.map((item) => (
        <span className={styles.legendItem} key={item.label}>
          <span className={`${styles.legendSwatch} ${styles[item.className as keyof typeof styles]}`} aria-hidden="true" />
          {item.label}
        </span>
      ))}
    </div>
  );
}

export function PriceLayersChart() {
  return (
    <figure className={styles.chart} aria-labelledby="price-layers-title">
      <figcaption id="price-layers-title">아파트 가격을 읽는 세 겹의 기준</figcaption>
      <svg className={styles.svg} viewBox="0 0 760 300" role="img">
        <title>과거 거래, 현재 기준점, 미래 예상 범위를 나누어 보는 개념도</title>
        <desc>과거에는 여러 거래가 쌓이고, 현재 시점에는 기준점이 있으며, 앞으로는 하나의 선이 아니라 범위로 표시됩니다.</desc>
        <line className={styles.axis} x1="74" y1="238" x2="704" y2="238" />
        <line className={styles.axis} x1="74" y1="42" x2="74" y2="238" />
        <path className={styles.historyLine} d="M90 188 C150 174 172 202 220 164 S300 182 350 133 S428 161 492 113" />
        <path className={styles.rangeFill} d="M492 86 C546 62 612 76 690 48 L690 178 C612 192 548 168 492 150 Z" />
        <path className={styles.rangeLine} d="M492 118 C548 96 614 105 690 84" />
        <line className={styles.nowLine} x1="492" y1="42" x2="492" y2="238" />
        <circle className={styles.currentDot} cx="492" cy="113" r="7" />
        <text className={styles.label} x="95" y="270">과거 거래</text>
        <text className={styles.label} x="466" y="270">현재</text>
        <text className={styles.label} x="624" y="270">앞으로</text>
        <text className={styles.annotation} x="108" y="82">여러 거래의 흐름</text>
        <text className={styles.annotation} x="510" y="70">예상 범위</text>
        <text className={styles.annotation} x="503" y="105">현재 기준점</text>
        <text className={styles.axisTitle} data-axis="y" x="16" y="150" transform="rotate(-90 16 150)">가격 수준</text>
        <text className={styles.axisTitle} data-axis="x" x="370" y="294">시간</text>
      </svg>
      <Legend
        items={[
          { label: '과거 실거래 흐름', className: 'legendHistory' },
          { label: '현재 기준점', className: 'legendCurrent' },
          { label: '미래 예상 범위', className: 'legendRange' },
        ]}
      />
      <p className={styles.note}>개념도입니다. 실제 단지 분석에서는 기준일·면적·거래 표본을 따로 확인해야 합니다.</p>
    </figure>
  );
}

export function PriceRangeChart() {
  return (
    <figure className={styles.chart} aria-labelledby="price-range-title">
      <figcaption id="price-range-title">하나의 예측값보다 범위가 알려주는 것</figcaption>
      <svg className={styles.svg} viewBox="0 0 760 300" role="img">
        <title>같은 출발점에서 보수적, 기준, 낙관적 범위가 달라지는 개념도</title>
        <desc>세 가지 가정은 같은 현재 기준점에서 출발하지만 시간이 멀어질수록 가능한 결과의 폭이 달라집니다.</desc>
        <line className={styles.axis} x1="160" y1="238" x2="704" y2="238" />
        <line className={styles.axis} x1="160" y1="42" x2="160" y2="238" />
        <line className={styles.referenceLine} x1="250" y1="56" x2="250" y2="238" />
        <line className={styles.referenceLine} x1="650" y1="56" x2="650" y2="238" />
        <text className={styles.label} x="224" y="270">현재</text>
        <text className={styles.label} x="616" y="270">먼 미래</text>
        <text className={styles.label} x="104" y="94">보수적</text>
        <text className={styles.label} x="115" y="158">기준</text>
        <text className={styles.label} x="103" y="222">낙관적</text>
        <path className={styles.rangeFillMuted} d="M250 82 C374 68 526 58 650 48 L650 118 C526 126 374 142 250 138 Z" />
        <path className={styles.rangeLine} d="M250 110 C384 98 526 87 650 80" />
        <path className={styles.rangeFill} d="M250 139 C374 126 526 119 650 101 L650 174 C526 181 374 197 250 188 Z" />
        <path className={styles.rangeLine} d="M250 164 C384 153 526 146 650 138" />
        <path className={styles.rangeFillMuted} d="M250 196 C374 185 526 182 650 167 L650 236 C526 232 374 230 250 228 Z" />
        <path className={styles.rangeLine} d="M250 212 C384 208 526 207 650 198" />
        <circle className={styles.currentDot} cx="250" cy="164" r="7" />
        <text className={styles.annotation} x="290" y="64">시간이 멀어질수록 가정의 차이가 범위에 반영됨</text>
        <text className={styles.axisTitle} data-axis="y" x="16" y="152" transform="rotate(-90 16 152)">가능한 가격 경로</text>
        <text className={styles.axisTitle} data-axis="x" x="395" y="294">예측 기간</text>
      </svg>
      <Legend
        items={[
          { label: '가능한 결과의 폭', className: 'legendRange' },
          { label: '범위 안의 중심 추정', className: 'legendCurrent' },
        ]}
      />
      <p className={styles.note}>범위는 보장이 아니라 불확실성을 보여주는 참고 정보입니다.</p>
    </figure>
  );
}

export function MortgageRateTransmissionChart() {
  const steps = [
    ['대출금리 변화', '시장·정책·상품 조건'],
    ['월 상환 부담', '같은 금액을 빌려도 달라짐'],
    ['구매 가능한 가격대', '가계 현금흐름이 제약'],
    ['거래의 속도', '협상·관망·실행 시점'],
  ];

  return (
    <figure className={styles.chart} aria-labelledby="rate-transmission-title">
      <figcaption id="rate-transmission-title">금리 변화가 아파트 가격에 닿는 경로</figcaption>
      <div className={styles.flow} role="img" aria-label="대출금리 변화가 월 상환 부담, 구매 가능한 가격대, 거래 속도를 거쳐 아파트 가격에 영향을 주는 흐름">
        {steps.map(([title, detail], index) => (
          <div className={styles.flowStep} key={title}>
            <div className={styles.flowNumber}>{index + 1}</div>
            <strong>{title}</strong>
            <span>{detail}</span>
            {index < steps.length - 1 && <span className={styles.flowArrow} aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      <div className={styles.flowFootnote}>금리 변화 → 가계 현금흐름 → 거래 조건 → 실제 가격으로 이어지는 시간차가 있습니다.</div>
    </figure>
  );
}

export function TransportStageChart() {
  const stages = [
    ['발표', '방향과 필요성'],
    ['검토·타당성', '수요와 비용 확인'],
    ['계획·설계', '노선·역·공법 구체화'],
    ['착공', '공사가 실제로 시작'],
    ['개통', '이용 가능한 교통'],
  ];

  return (
    <figure className={styles.chart} aria-labelledby="transport-stage-title">
      <figcaption id="transport-stage-title">교통 호재는 단계별로 다시 확인해야 합니다</figcaption>
      <div className={styles.timeline} role="img" aria-label="교통 사업의 발표, 검토와 타당성, 계획과 설계, 착공, 개통 단계">
        <div className={styles.timelineLine} aria-hidden="true" />
        {stages.map(([title, detail], index) => (
          <div className={styles.timelineStep} key={title}>
            <div className={styles.timelineDot}>{index + 1}</div>
            <strong>{title}</strong>
            <span>{detail}</span>
          </div>
        ))}
      </div>
      <p className={styles.note}>발표만으로 개통 시점이나 실제 통행 편의를 확정할 수 없습니다. 단계와 공식 문서의 기준일을 함께 확인하세요.</p>
    </figure>
  );
}
