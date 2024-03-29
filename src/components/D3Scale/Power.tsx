import { scaleLinear, scalePow, scaleSqrt } from 'd3-scale';
import React from 'react';

export default function PowerScale() {
    const DOMAIN = [0, 100];
    const RANGE = [10, 50];
    const RANGE_COLORS = ['yellow', 'red'];

    // func1(Math.pow(50, exponent) / Math.pow(100, exponent - 1))
    const func1 = scaleLinear().domain(DOMAIN).range(RANGE);

    // y = 2x^0.5 + 0
    const func21 = scalePow().exponent(0.5).domain(DOMAIN).range(RANGE);
    const func22 = scaleSqrt().domain(DOMAIN).range(RANGE);
    const func23 = scalePow().exponent(2).domain(DOMAIN).range(RANGE);

    // colors
    const color1 = scaleLinear<string>().domain(DOMAIN).range(RANGE_COLORS);
    const color21 = scalePow<string>()
        .exponent(0.5)
        .domain(DOMAIN)
        .range(RANGE_COLORS);
    const color22 = scalePow<string>()
        .exponent(2)
        .domain(DOMAIN)
        .range(RANGE_COLORS);

    const chartData = [0, 25, 50, 75, 100];

    return (
        <div className="scale">
            <div className="point-list flex">
                {chartData.map((value, index) => {
                    return (
                        <div
                            className="point"
                            key={index}
                            style={{
                                width: func1(value),
                                height: func1(value),
                                left: 87 * index,
                            }}
                        />
                    );
                })}
            </div>
            <h3>exponent(0.5)</h3>
            <div className="point-list flex">
                {chartData.map((value, index) => {
                    return (
                        <div
                            className="point"
                            key={index}
                            style={{
                                width: func21(value),
                                height: func21(value),
                                left: 87 * index,
                            }}
                        />
                    );
                })}
            </div>
            <h3>sqrt</h3>
            <div className="point-list flex">
                {chartData.map((value, index) => {
                    return (
                        <div
                            className="point"
                            key={index}
                            style={{
                                width: func22(value),
                                height: func22(value),
                                left: 87 * index,
                            }}
                        />
                    );
                })}
            </div>
            <h3>exponent(2)</h3>
            <div className="point-list">
                {chartData.map((value, index) => {
                    return (
                        <div
                            className="point"
                            key={index}
                            style={{
                                width: func23(value),
                                height: func23(value),
                                left: 87 * index,
                            }}
                        />
                    );
                })}
            </div>

            <br />
            <h3>linear colors</h3>
            <div className="colors">
                {Array(100)
                    .fill(0)
                    .map((val, i) => (
                        <div
                            className="color"
                            key={i}
                            style={{ backgroundColor: color1(i) }}
                        />
                    ))}
            </div>
            <h3>sqrt or exponent(0.5) colors</h3>
            <div className="colors">
                {Array(100)
                    .fill(0)
                    .map((val, i) => (
                        <div
                            className="color"
                            key={i}
                            style={{ backgroundColor: color21(i) }}
                        />
                    ))}
            </div>
            <h3>exponent(2) colors</h3>
            <div className="colors">
                {Array(100)
                    .fill(0)
                    .map((val, i) => (
                        <div
                            className="color"
                            key={i}
                            style={{ backgroundColor: color22(i) }}
                        />
                    ))}
            </div>
        </div>
    );
}
