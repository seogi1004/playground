import React, { useCallback, useState, useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '../../Canvas';

const width = 400;
const height = 400;

export default function Index() {
    const draw = useCallback((ctx: CanvasRenderingContext2D, _) => {
        // TODO:
    }, []);

    return (
        <div>
            <Canvas
                draw={draw}
                width={width}
                height={height}
                interval={0}
                ratio={useIsBrowser() ? window.devicePixelRatio : 1}
            ></Canvas>
        </div>
    );
}
