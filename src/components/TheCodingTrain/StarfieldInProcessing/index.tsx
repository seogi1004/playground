import React from 'react';
import Canvas from '../../Canvas';

export default function Index() {
    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.fillStyle = '#000000';
        ctx.beginPath();
        ctx.arc(50, 100, 20 * Math.sin(frameCount * 0.05) ** 2, 0, 2 * Math.PI);
        ctx.fill();
    };

    return <Canvas draw={draw} width={400} height={400}></Canvas>;
}
