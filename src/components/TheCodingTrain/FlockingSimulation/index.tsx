import React, { useCallback, useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '../../Canvas';
import { Boid } from './boid';

const width = 640;
const height = 360;

export default function Index() {
    const isBrowser = useIsBrowser();

    let flock = useMemo(() => {
        const list: Boid[] = [];
        for (let i = 0; i < 300; i++) {
            list.push(new Boid(width, height));
        }
        return list;
    }, [isBrowser]);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, _) => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            for (let boid of flock) {
                boid.edges();
                boid.flock(flock);
                boid.update();
                boid.show(ctx);
            }
        },
        [isBrowser]
    );

    return (
        <Canvas
            draw={draw}
            width={width}
            height={height}
            interval={0}
            ratio={isBrowser ? window.devicePixelRatio : 1}
        ></Canvas>
    );
}
