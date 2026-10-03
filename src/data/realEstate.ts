// 홈·글 하단 도구 상자·푸터가 함께 쓰는 부동산 콘텐츠 목록.
// 글을 추가하거나 slug를 바꾸면 이 파일만 고치면 된다.

export const APT_ORIGIN = 'https://apt-insights.com';
export const FREE_FORECAST_URL = `${APT_ORIGIN}/#free-forecast-experience`;
export const REGION_INDEX_URL = `${APT_ORIGIN}/apt/`;
export const regionUrl = (lawdCd: string) => `${APT_ORIGIN}/apt/${lawdCd}`;

export type Guide = {
    title: string;
    description: string;
    href: string;
};

export type GuideGroup = {
    id: string;
    label: string;
    question: string;
    guides: Guide[];
};

export const guideGroups: GuideGroup[] = [
    {
        id: 'price',
        label: '시세 읽기',
        question: '지금 이 아파트, 얼마가 맞는 가격일까?',
        guides: [
            {
                title: '부동산과 아파트 통계를 처음 읽는 순서',
                description: '가격·거래량·기간·지역·금리·공급을 어떤 순서로 확인할지 정리한 입문 체크리스트입니다.',
                href: '/blog/real-estate-apartment-statistics-reading-order',
            },
            {
                title: '지역별 아파트 실거래가 조회하는 법',
                description: '시군구에서 단지, 평형까지 좁혀 가며 최근 거래와 대표 시세를 확인하는 3단계입니다.',
                href: '/blog/apartment-real-transaction-price-by-region',
            },
            {
                title: '최근 거래 한 건만 믿으면 위험한 이유',
                description: '면적·층·타입·거래 유형과 거래량을 함께 봐야 시세가 보입니다.',
                href: '/blog/apartment-single-trade-limit',
            },
            {
                title: '일반 매매와 분양권 실거래가를 섞으면 안 되는 이유',
                description: '옵션비·중도금 이자·프리미엄 때문에 같은 단지라도 가격 기준이 달라집니다.',
                href: '/blog/presale-right-vs-general-trade-difference',
            },
        ],
    },
    {
        id: 'forecast',
        label: '전망 읽기',
        question: '1년 뒤 가격, 어떻게 읽어야 할까?',
        guides: [
            {
                title: '가입 없이 아파트 가격 예측하기',
                description: '단지 검색부터 대표 시세, 1년 뒤 예상 범위와 기준일 확인까지의 순서입니다.',
                href: '/blog/apartment-price-forecast-without-signup',
            },
            {
                title: '아파트 예상 범위의 아래·가운데·위 값 읽기',
                description: '예상 범위를 확정 가격이 아니라 불확실성의 폭으로 읽는 방법입니다.',
                href: '/blog/apartment-forecast-range-reading',
            },
            {
                title: '6개월·12개월·18개월 전망 비교하기',
                description: '목표 월과 기준일을 맞춰 기간이 다른 전망을 비교하는 방법입니다.',
                href: '/blog/apartment-forecast-periods',
            },
            {
                title: '아파트 가격 예측이 맞았는지 확인하는 법',
                description: '백테스트와 무작위 검증 결과를 읽을 때 확인할 표본·기간·오차 지표입니다.',
                href: '/blog/apartment-price-forecast-accuracy-backtest',
            },
            {
                title: '예측 결과의 기준일·시장 정보·표본 신뢰도',
                description: '결과가 언제, 어떤 자료 상태로 계산됐는지 기록하는 방법입니다.',
                href: '/blog/apartment-forecast-metadata',
            },
        ],
    },
    {
        id: 'start',
        label: '시작하기',
        question: '내 조건에 맞춰 처음 살펴본다면?',
        guides: [
            {
                title: '분석을 시작할 때 지역·단지·이사 시점 정하기',
                description: '관심 단지와 확인 시점을 먼저 고정해야 결과를 같은 기준으로 비교할 수 있습니다.',
                href: '/blog/apartment-insights-start-guide',
            },
            {
                title: '로그인 없이 앱에서 내 아파트 시세 보기',
                description: '단지·평형·목표 월 하나씩만 골라 전망과 단지 정보를 확인하는 방법입니다.',
                href: '/blog/apartment-app-guest-mode',
            },
            {
                title: '아파트 분석 공유 URL을 보내기 전 확인할 것',
                description: '평형·기준일·예상 범위·공개 기간을 확인해 오해 없이 전달하는 방법입니다.',
                href: '/blog/apartment-analysis-share-url',
            },
        ],
    },
    {
        id: 'market',
        label: '시장 변수',
        question: '금리·교통·전세는 가격에 어떻게 반영될까?',
        guides: [
            {
                title: '주택담보대출 금리와 아파트 가격',
                description: '금리 변화가 월 상환 부담과 구매 가능 가격대에 먼저 미치는 흐름입니다.',
                href: '/blog/mortgage-rate-apartment-price',
            },
            {
                title: '금리·환율이 흔들릴 때 지켜볼 지표',
                description: '해외 장기금리와 기준금리가 출렁일 때 매수·매도 시점을 점검하는 체크리스트입니다.',
                href: '/blog/macro-volatility-apartment-timing-checklist',
            },
            {
                title: '교통 호재를 발표·착공·개통 단계로 나누기',
                description: '사업 단계와 실제 이용 가능성을 구분해 기대와 현실을 나눠 봅니다.',
                href: '/blog/transport-benefit-stages-apartment-price',
            },
            {
                title: '전세가율이 높으면 매수하기 좋을까?',
                description: '갭투자 판단에서 놓치기 쉬운 전세가율의 착시와 역전세 위험입니다.',
                href: '/blog/jeonse-ratio-and-gap-investment-risk',
            },
            {
                title: '가격을 현재·과거·미래로 나눠 읽기',
                description: '최근 실거래가와 과거 이력, 미래 예상 범위를 한 숫자로 섞지 않는 법입니다.',
                href: '/blog/apartment-price-current-history-forecast',
            },
        ],
    },
];

export type Calculator = {
    title: string;
    summary: string;
    href: string;
    badge: string;
};

export const calculators: Calculator[] = [
    {
        title: '아파트 거래비용 계산기',
        summary: '취득세·양도세·중개보수를 넣어 매수 총자금과 매도 후 남는 금액을 계산합니다.',
        href: '/blog/apartment-transaction-cost-calculator',
        badge: '취득세 · 양도세',
    },
    {
        title: '분양권 손피 계산기',
        summary: '프리미엄, 보유 기간 세율, 대납세액 재산입, 중도금 이자까지 반영합니다.',
        href: '/blog/sonpi-tax-calculator',
        badge: '분양권',
    },
    {
        title: '보유세 계산기',
        summary: '공시가격·주택 수·실거주 조건으로 현행 기준과 세제개편안을 비교합니다.',
        href: '/blog/83-real-estate-tax-reform-calculator',
        badge: '재산세 · 종부세',
    },
    {
        title: '주택담보대출 상환 계산기',
        summary: '금리와 대출 기간에 따라 달라지는 월 상환액과 부담을 바로 확인합니다.',
        href: '/blog/mortgage-rate-apartment-price',
        badge: '대출 · 금리',
    },
];

export type Region = { lawdCd: string; label: string };

export const regionGroups: { sido: string; regions: Region[] }[] = [
    {
        sido: '서울',
        regions: [
            { lawdCd: '11680', label: '강남구' },
            { lawdCd: '11650', label: '서초구' },
            { lawdCd: '11710', label: '송파구' },
            { lawdCd: '11740', label: '강동구' },
            { lawdCd: '11170', label: '용산구' },
            { lawdCd: '11200', label: '성동구' },
            { lawdCd: '11440', label: '마포구' },
            { lawdCd: '11560', label: '영등포구' },
            { lawdCd: '11590', label: '동작구' },
            { lawdCd: '11470', label: '양천구' },
            { lawdCd: '11350', label: '노원구' },
            { lawdCd: '11500', label: '강서구' },
        ],
    },
    {
        sido: '경기·인천',
        regions: [
            { lawdCd: '41135', label: '성남 분당구' },
            { lawdCd: '41465', label: '용인 수지구' },
            { lawdCd: '41117', label: '수원 영통구' },
            { lawdCd: '41173', label: '안양 동안구' },
            { lawdCd: '41290', label: '과천시' },
            { lawdCd: '41450', label: '하남시' },
            { lawdCd: '41210', label: '광명시' },
            { lawdCd: '41570', label: '김포시' },
            { lawdCd: '41285', label: '고양 일산동구' },
            { lawdCd: '28185', label: '인천 연수구' },
        ],
    },
];
