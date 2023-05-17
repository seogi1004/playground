import type { MouseEvent } from 'react';
import React, { useState } from 'react';
import { scaleLinear } from 'd3-scale';

export default function LinearScale() {
    const DOMAIN = [0, 10];
    const RANGE = [0, 80];

    const chartData = [2, 5, 6, 15];
    const chartWidth = 100;

    const func1 = scaleLinear().domain(DOMAIN).range(RANGE);
    const func2 = scaleLinear().domain(DOMAIN).range(RANGE);
    func2.clamp(true);

    const [current, setCurrent] = useState<number>(0);

    const onMouseMove = (e: MouseEvent) => {
        const offsetY = e.nativeEvent.offsetY;
        const value = func2.invert(offsetY);
        setCurrent(value);
    };

    return (
        <div className="scale">
            <div className="column-list">
                {chartData.map((value, index) => {
                    return (
                        <div
                            className="column"
                            key={index}
                            style={{
                                backgroundColor: 'gray',
                                width: chartWidth,
                                height: func1(value),
                                left: index * chartWidth,
                            }}
                        />
                    );
                })}
            </div>

            <h3>clamp(true)</h3>
            <div className="column-list">
                {chartData.map((value, index) => {
                    return (
                        <div
                            className="column"
                            key={index}
                            style={{
                                backgroundColor: 'gray',
                                width: chartWidth,
                                height: func2(value),
                                left: index * chartWidth,
                            }}
                        />
                    );
                })}
            </div>
            <h3>ticks(3)</h3>
            <div className="column-list">
                {func2.ticks(3).map((value, index) => {
                    return (
                        <div
                            className="tick"
                            key={index}
                            style={{
                                top: func2(value) + 2,
                            }}
                        >
                            {value}
                        </div>
                    );
                })}
                {chartData.map((value, index) => {
                    return (
                        <div
                            className="column"
                            key={index}
                            style={{
                                backgroundColor: 'gray',
                                width: chartWidth,
                                height: func2(value),
                                left: index * chartWidth,
                            }}
                        />
                    );
                })}
            </div>
            <h3>invert</h3>
            <div className="column-list" onMouseMove={onMouseMove}>
                <div
                    className="tick"
                    style={{
                        top: func2(current) + 2,
                    }}
                >
                    {current.toFixed(0)}
                </div>
                {chartData.map((value, index) => {
                    return (
                        <div
                            className="column"
                            key={index}
                            style={{
                                backgroundColor: 'gray',
                                width: chartWidth,
                                height: func2(value),
                                left: index * chartWidth,
                            }}
                        />
                    );
                })}
            </div>
        </div>
    );
}
