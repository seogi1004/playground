import { scaleDiverging } from 'd3-scale';
import { interpolateRdBu } from 'd3-scale-chromatic';
import React from 'react';

const func = scaleDiverging<string>()
    .domain([-50, 0, 50])
    .interpolator(interpolateRdBu);

export default function Scale() {
    return (
        <div className="colors">
            {Array(101)
                .fill(0)
                .map((val, i) => (
                    <div
                        className="color"
                        key={i}
                        style={{ backgroundColor: func(i - 50) }}
                    />
                ))}
        </div>
    );
}
