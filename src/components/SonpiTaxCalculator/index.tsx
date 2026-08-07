import { useMemo, useState, type Dispatch, type SetStateAction } from 'react';
import styles from './styles.module.css';
import {
    calculateSonpiTax,
    formatExactWon,
    formatWon,
    type SonpiConditions,
    type SonpiHoldingPeriod,
} from './calculator';

interface FormState {
    sellerAcquisitionPriceEok: string;
    premiumManWon: string;
    necessaryExpensesManWon: string;
    buyerInterimInterestManWon: string;
    holdingPeriod: SonpiHoldingPeriod;
}

const DEFAULT_FORM: FormState = {
    sellerAcquisitionPriceEok: '12',
    premiumManWon: '3000',
    necessaryExpensesManWon: '0',
    buyerInterimInterestManWon: '0',
    holdingPeriod: 'under-one-year',
};

function parseNumber(value: string): number {
    const parsed = Number(value.replace(/,/g, '').trim());
    return Number.isFinite(parsed) ? Math.max(0, parsed) : 0;
}

function buildConditions(form: FormState): SonpiConditions {
    return {
        sellerAcquisitionPriceWon:
            parseNumber(form.sellerAcquisitionPriceEok) * 100_000_000,
        premiumWon: parseNumber(form.premiumManWon) * 10_000,
        necessaryExpensesWon:
            parseNumber(form.necessaryExpensesManWon) * 10_000,
        buyerInterimInterestWon:
            parseNumber(form.buyerInterimInterestManWon) * 10_000,
        holdingPeriod: form.holdingPeriod,
    };
}

function formatRate(rate: number): string {
    return `${Math.round(rate * 100)}%`;
}

function applyPreset(
    setForm: Dispatch<SetStateAction<FormState>>,
    preset: 'simple' | 'official'
) {
    if (preset === 'official') {
        setForm({
            sellerAcquisitionPriceEok: '12',
            premiumManWon: '50000',
            necessaryExpensesManWon: '0',
            buyerInterimInterestManWon: '0',
            holdingPeriod: 'one-year-or-more',
        });
        return;
    }

    setForm({ ...DEFAULT_FORM });
}

export default function SonpiTaxCalculator(): JSX.Element {
    const [form, setForm] = useState<FormState>({ ...DEFAULT_FORM });
    const estimate = useMemo(
        () => calculateSonpiTax(buildConditions(form)),
        [form]
    );

    return (
        <section
            className={styles.calculator}
            aria-label="손피 양도세 대납액 계산기"
        >
            <div className={styles.calculatorHeader}>
                <div>
                    <p className={styles.kicker}>SONPI TAX CALCULATOR</p>
                    <h2>손에 남길 프리미엄을 입력해보세요</h2>
                    <p>
                        매도자의 양도세를 매수자가 대신 내는 경우, 대납세액을
                        다시 양도가액에 넣어 반복 계산합니다.
                    </p>
                </div>
                <div className={styles.statusBadge}>
                    <span aria-hidden="true" />
                    고정점 계산
                </div>
            </div>

            <div className={styles.presetRow} aria-label="예시 불러오기">
                <span>빠른 예시</span>
                <button
                    type="button"
                    onClick={() => applyPreset(setForm, 'simple')}
                >
                    프리미엄 3,000만원
                </button>
                <button
                    type="button"
                    onClick={() => applyPreset(setForm, 'official')}
                >
                    국세청 12억 → 17억
                </button>
            </div>

            <div className={styles.calculatorGrid}>
                <div className={styles.formPanel}>
                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label htmlFor="sonpi-acquisition-price">
                                매도자 취득원가
                            </label>
                            <span>분양가·기납부금 등</span>
                        </div>
                        <div className={styles.inputWithUnit}>
                            <input
                                id="sonpi-acquisition-price"
                                type="number"
                                min="0"
                                step="0.1"
                                inputMode="decimal"
                                value={form.sellerAcquisitionPriceEok}
                                onChange={(event) =>
                                    setForm((current) => ({
                                        ...current,
                                        sellerAcquisitionPriceEok:
                                            event.target.value,
                                    }))
                                }
                            />
                            <span>억원</span>
                        </div>
                    </div>

                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label htmlFor="sonpi-premium">
                                손에 남길 프리미엄
                            </label>
                            <span>세금 대납 전 기준</span>
                        </div>
                        <div className={styles.inputWithUnit}>
                            <input
                                id="sonpi-premium"
                                type="number"
                                min="0"
                                step="100"
                                inputMode="numeric"
                                value={form.premiumManWon}
                                onChange={(event) =>
                                    setForm((current) => ({
                                        ...current,
                                        premiumManWon: event.target.value,
                                    }))
                                }
                            />
                            <span>만원</span>
                        </div>
                        <p className={styles.helperText}>
                            이 데모에서는 세금 대납 전 양도가액을 ‘취득원가 +
                            프리미엄’으로 단순화합니다.
                        </p>
                    </div>

                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label>분양권 보유기간</label>
                            <span>양도일 기준</span>
                        </div>
                        <div
                            className={styles.segmentedControl}
                            role="group"
                            aria-label="분양권 보유기간"
                        >
                            <button
                                type="button"
                                className={
                                    form.holdingPeriod === 'under-one-year'
                                        ? styles.segmentActive
                                        : ''
                                }
                                onClick={() =>
                                    setForm((current) => ({
                                        ...current,
                                        holdingPeriod: 'under-one-year',
                                    }))
                                }
                            >
                                <strong>1년 미만</strong>
                                <small>양도소득세 70%</small>
                            </button>
                            <button
                                type="button"
                                className={
                                    form.holdingPeriod === 'one-year-or-more'
                                        ? styles.segmentActive
                                        : ''
                                }
                                onClick={() =>
                                    setForm((current) => ({
                                        ...current,
                                        holdingPeriod: 'one-year-or-more',
                                    }))
                                }
                            >
                                <strong>1년 이상</strong>
                                <small>양도소득세 60%</small>
                            </button>
                        </div>
                    </div>

                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label htmlFor="sonpi-expenses">
                                인정 필요경비
                            </label>
                            <span>계약서·증빙 확인</span>
                        </div>
                        <div className={styles.inputWithUnit}>
                            <input
                                id="sonpi-expenses"
                                type="number"
                                min="0"
                                step="10"
                                inputMode="numeric"
                                value={form.necessaryExpensesManWon}
                                onChange={(event) =>
                                    setForm((current) => ({
                                        ...current,
                                        necessaryExpensesManWon:
                                            event.target.value,
                                    }))
                                }
                            />
                            <span>만원</span>
                        </div>
                        <p className={styles.helperText}>
                            기본공제 250만원은 자동 반영합니다.
                        </p>
                    </div>

                    <div className={styles.fieldGroup}>
                        <div className={styles.fieldHeading}>
                            <label htmlFor="sonpi-interim-interest">
                                매수자 부담 중도금 이자
                            </label>
                            <span>계약상 확정 정산액</span>
                        </div>
                        <div className={styles.inputWithUnit}>
                            <input
                                id="sonpi-interim-interest"
                                type="number"
                                min="0"
                                step="10"
                                inputMode="numeric"
                                value={form.buyerInterimInterestManWon}
                                onChange={(event) =>
                                    setForm((current) => ({
                                        ...current,
                                        buyerInterimInterestManWon:
                                            event.target.value,
                                    }))
                                }
                            />
                            <span>만원</span>
                        </div>
                        <p className={styles.helperText}>
                            손피 세금에는 포함하지 않고, 매수자 필요자금에서
                            차감합니다.
                        </p>
                    </div>
                </div>

                <div className={styles.resultPanel} aria-live="polite">
                    <div className={styles.resultEyebrow}>
                        매수자가 준비할 프리미엄 관련 순자금
                    </div>
                    <div className={styles.heroResult}>
                        {formatWon(estimate.buyerRequiredPremiumCostWon)}
                    </div>
                    <p className={styles.resultCaption}>
                        프리미엄 {formatWon(estimate.premiumWon)} + 대납세액{' '}
                        {formatWon(estimate.buyerPaidTaxWon)} + 중도금 이자{' '}
                        {formatWon(estimate.buyerInterimInterestWon)}
                    </p>

                    <div className={styles.statGrid}>
                        <div className={styles.statCard}>
                            <span>결합 세율</span>
                            <strong>{formatRate(estimate.combinedRate)}</strong>
                            <small>
                                국세 {formatRate(estimate.incomeTaxRate)} +
                                지방소득세{' '}
                                {formatRate(estimate.incomeTaxRate * 0.1)}
                            </small>
                        </div>
                        <div className={styles.statCard}>
                            <span>1차 계산</span>
                            <strong>
                                {formatWon(estimate.firstPassTaxWon)}
                            </strong>
                            <small>대납세액을 아직 재산입하지 않은 값</small>
                        </div>
                        <div className={styles.statCard}>
                            <span>반복 횟수</span>
                            <strong>{estimate.iterationCount}회</strong>
                            <small>1원 이내로 수렴</small>
                        </div>
                    </div>

                    <div className={styles.breakdown}>
                        <div className={styles.breakdownHeading}>계산 결과</div>
                        <div className={styles.breakdownRow}>
                            <span>세금 대납 전 신고금액</span>
                            <strong>
                                {formatWon(estimate.transferPriceBeforeTaxWon)}
                            </strong>
                        </div>
                        <div className={styles.breakdownRow}>
                            <span>양도소득세</span>
                            <strong>{formatWon(estimate.incomeTaxWon)}</strong>
                        </div>
                        <div className={styles.breakdownRow}>
                            <span>지방소득세</span>
                            <strong>
                                {formatWon(estimate.localIncomeTaxWon)}
                            </strong>
                        </div>
                        <div
                            className={`${styles.breakdownRow} ${styles.totalRow}`}
                        >
                            <span>매수자 대납세액</span>
                            <strong>
                                {formatWon(estimate.buyerPaidTaxWon)}
                            </strong>
                        </div>
                        <div className={styles.breakdownRow}>
                            <span>매수자 부담 중도금 이자</span>
                            <strong>
                                {formatWon(estimate.buyerInterimInterestWon)}
                            </strong>
                        </div>
                        <div className={styles.breakdownRow}>
                            <span>매수자 프리미엄 관련 필요자금</span>
                            <strong>
                                {formatWon(
                                    estimate.buyerRequiredPremiumCostWon
                                )}
                            </strong>
                        </div>
                        <div className={styles.breakdownRow}>
                            <span>대납세액 포함 신고금액</span>
                            <strong>
                                {formatWon(estimate.effectiveTransferPriceWon)}
                            </strong>
                        </div>
                    </div>

                    <details className={styles.details}>
                        <summary>왜 이렇게 계산되나요?</summary>
                        <p>
                            {formatExactWon(estimate.buyerPaidTaxWon)}를
                            양도가액에 더한 뒤 다시 계산하고, 직전 결과와 1원
                            이내로 같아질 때까지 반복했습니다.
                        </p>
                    </details>
                </div>
            </div>

            <p className={styles.disclaimer}>
                분양권의 실제 세율·필요경비·신고금액은 거래일, 자산 상태, 계약
                내용과 법령 해석에 따라 달라질 수 있습니다. 이 데모는 손피의
                고정점 구조를 이해하기 위한 참고 계산입니다.
            </p>
        </section>
    );
}
