import { scaleLinear, scaleQuantile } from 'd3-scale';
import { max, extent } from 'd3-array';
import { sampleData } from './sampleData';
import React from 'react';

const linear = scaleLinear<string>()
    .domain([0, max(sampleData) || 0])
    .range(['white', 'red']);

// 100개의 데이터를 균등하게 나눠서 값의 크기에 맞게 분류함
const quantile = scaleQuantile<string>()
    .domain(sampleData) // pass only the extreme values to a scaleQuantize’s domain
    .range(['white', 'pink', 'red']);

export default function Scale() {
    return (
        <div className="scale">
            <h3>linear</h3>
            <div className="box-list">
                {sampleData.map((value, index) => {
                    return (
                        <div
                            className="box"
                            style={{ backgroundColor: linear(value) }}
                            title={`${value}`}
                            key={index}
                        ></div>
                    );
                })}
            </div>
            <h3>quantile</h3>
            <div className="box-list">
                {sampleData.map((value, index) => {
                    return (
                        <div
                            className="box"
                            style={{ backgroundColor: quantile(value) }}
                            title={`${value}`}
                            key={index}
                        ></div>
                    );
                })}
            </div>
        </div>
    );
}
