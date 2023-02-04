import React, { useCallback, useState, useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '../../Canvas';

const width = 640;
const height = 360;

export default function Index() {
    const draw = useCallback((ctx: CanvasRenderingContext2D, _) => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);
    }, []);

    return (
        <Canvas
            draw={draw}
            width={width}
            height={height}
            interval={0}
            ratio={useIsBrowser() ? window.devicePixelRatio : 1}
        ></Canvas>
    );
}
