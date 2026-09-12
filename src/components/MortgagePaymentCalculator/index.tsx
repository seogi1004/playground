import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';

function calculateMonthlyPayment(principalWon: number, annualRatePercent: number, years: number): {
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
} {
    if (principalWon <= 0 || years <= 0) {
        return { monthlyPayment: 0, totalPayment: 0, totalInterest: 0 };
    }
    const months = years * 12;
    if (annualRatePercent <= 0) {
        const monthly = Math.round(principalWon / months);
        return { monthlyPayment: monthly, totalPayment: principalWon, totalInterest: 0 };
    }
    const monthlyRate = annualRatePercent / 100 / 12;
    const factor = Math.pow(1 + monthlyRate, months);
    const monthlyPayment = Math.round((principalWon * monthlyRate * factor) / (factor - 1));
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principalWon;
    return { monthlyPayment, totalPayment, totalInterest };
}

function formatManWon(won: number): string {
    const man = Math.round(won / 10000);
    return `${man.toLocaleString('ko-KR')}만원`;
}

function formatEokWon(won: number): string {
    const eok = Math.floor(won / 100000000);
    const man = Math.round((won % 100000000) / 10000);
    if (eok > 0 && man > 0) {
        return `${eok}억 ${man.toLocaleString('ko-KR')}만원`;
    }
    if (eok > 0) {
        return `${eok}억원`;
    }
    return `${man.toLocaleString('ko-KR')}만원`;
}

export default function MortgagePaymentCalculator(): JSX.Element {
    const [principalEok, setPrincipalEok] = useState<number>(5);
    const [years, setYears] = useState<number>(30);
    const [rateA, setRateA] = useState<number>(4.5);
    const [rateB, setRateB] = useState<number>(3.5);

    const principalWon = principalEok * 100000000;

    const resultA = useMemo(
        () => calculateMonthlyPayment(principalWon, rateA, years),
        [principalWon, rateA, years]
    );

    const resultB = useMemo(
        () => calculateMonthlyPayment(principalWon, rateB, years),
        [principalWon, rateB, years]
    );

    const monthlyDiff = resultA.monthlyPayment - resultB.monthlyPayment;
    const interestDiff = resultA.totalInterest - resultB.totalInterest;

    return (
        <div className={styles.container}>
            <div className={styles.title}>💡 주택담보대출 금리별 월 상환액 비교기</div>
            <div className={styles.subtitle}>
                금리가 1%p 변할 때 매월 지출하는 원리금과 총 이자 부담이 얼마나 달라지는지 직접 확인해보세요. (원리금 균등상환 기준)
            </div>

            <div className={styles.grid}>
                <div className={styles.field}>
                    <label htmlFor="mortgage-principal">대출 원금</label>
                    <select
                        id="mortgage-principal"
                        className={styles.select}
                        value={principalEok}
                        onChange={(e) => setPrincipalEok(Number(e.target.value))}
                    >
                        <option value={3}>3억원</option>
                        <option value={4}>4억원</option>
                        <option value={5}>5억원</option>
                        <option value={6}>6억원</option>
                        <option value={7}>7억원</option>
                        <option value={8}>8억원</option>
                        <option value={10}>10억원</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label htmlFor="mortgage-years">대출 기간</label>
                    <select
                        id="mortgage-years"
                        className={styles.select}
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                    >
                        <option value={20}>20년 (240개월)</option>
                        <option value={30}>30년 (360개월)</option>
                        <option value={40}>40년 (480개월)</option>
                    </select>
                </div>

                <div className={styles.field}>
                    <label htmlFor="mortgage-rate-a">기준 금리 (인하 전)</label>
                    <input
                        id="mortgage-rate-a"
                        type="number"
                        step="0.1"
                        min="1"
                        max="15"
                        className={styles.input}
                        value={rateA}
                        onChange={(e) => setRateA(Number(e.target.value))}
                    />
                </div>

                <div className={styles.field}>
                    <label htmlFor="mortgage-rate-b">비교 금리 (인하 후)</label>
                    <input
                        id="mortgage-rate-b"
                        type="number"
                        step="0.1"
                        min="1"
                        max="15"
                        className={styles.input}
                        value={rateB}
                        onChange={(e) => setRateB(Number(e.target.value))}
                    />
                </div>
            </div>

            <div className={styles.resultBox}>
                <div className={styles.resultGrid}>
                    <div className={styles.resultCard}>
                        <div className={styles.cardHeader}>기준 금리 {rateA}% 적용 시</div>
                        <div className={styles.cardMonthly}>
                            월 {formatManWon(resultA.monthlyPayment)}
                        </div>
                        <div className={styles.cardSub}>
                            {years}년 총 이자: {formatEokWon(resultA.totalInterest)}
                        </div>
                    </div>

                    <div className={styles.resultCard}>
                        <div className={styles.cardHeader}>비교 금리 {rateB}% 적용 시</div>
                        <div className={styles.cardMonthly}>
                            월 {formatManWon(resultB.monthlyPayment)}
                        </div>
                        <div className={styles.cardSub}>
                            {years}년 총 이자: {formatEokWon(resultB.totalInterest)}
                        </div>
                    </div>
                </div>

                <div className={styles.diffHighlight}>
                    <span>
                        금리가 <strong>{Math.abs(rateA - rateB).toFixed(1)}%p</strong> 낮아지면:
                    </span>
                    <span>
                        매달 <strong>{formatManWon(Math.abs(monthlyDiff))}</strong> 절감 ({years}년 누적 총 <strong>{formatEokWon(Math.abs(interestDiff))}</strong> 절약)
                    </span>
                </div>

                <p className={styles.footnote}>
                    * 거치기간 없는 원리금균등분할상환 기준 단순 계산이며, 실제 은행 대출 취급 시 중도상환수수료, 우대금리 조건, 거치 여부 등에 따라 달라질 수 있습니다.
                </p>
            </div>
        </div>
    );
}
