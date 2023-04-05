import {
    scaleSequential,
    scaleSequentialLog,
    scaleSequentialSymlog,
    scaleSequentialPow,
    scaleSequentialSqrt,
    scaleSequentialQuantile,
} from 'd3-scale';
import { interpolateRainbow } from 'd3-scale-chromatic';
import React from 'react';

const func = scaleSequential<number, string>()
    .domain([0, 100])
    .interpolator(interpolateRainbow);

export default function Scale() {
    return (
        <div className="scale">
            <div className="colors">
                {Array(100)
                    .fill(0)
                    .map((val, i) => (
                        <div
                            className="color"
                            key={i}
                            style={{ backgroundColor: func(i) as string }}
                        />
                    ))}
            </div>
        </div>
    );
}
