import React, { useCallback, useState, useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '../../Canvas';
import { Point, Rectangle, QuadTree } from './QuadTree';
import { random } from '@site/src/base/utility';

const width = 400;
const height = 400;

export default function MouseCreator() {
    const isBrowser = useIsBrowser();

    let qtree = useMemo(() => {
        const boundary = new Rectangle(200, 200, 200, 200);
        const qtree = new QuadTree(boundary, 4);

        for (let i = 0; i < 150; i++) {
            let x = random(0, width);
            let y = random(0, height);
            let p = new Point(x, y);
            qtree.insert(p);
        }

        return qtree;
    }, [isBrowser]);

    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, _) => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);
            qtree.show(ctx);

            let size = 25;
            let range = new Rectangle(mouseX, mouseY, size, size);
            ctx.strokeStyle = '#00ff00';
            ctx.strokeRect(
                range.x - size,
                range.y - size,
                range.w * 2,
                range.h * 2
            );

            ctx.fillStyle = '#00ff00';
            let points = qtree.query(range);
            for (let p of points) {
                ctx.beginPath();
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.stroke();
                ctx.fill();
                ctx.closePath();
            }
        },
        [qtree, mouseX, mouseY]
    );

    const onMouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseX(e.nativeEvent.offsetX);
        setMouseY(e.nativeEvent.offsetY);
    };

    return (
        <div
            style={{ display: 'inline-flex' }}
            onMouseMove={onMouseMoveHandler}
        >
            <Canvas
                draw={draw}
                width={width}
                height={height}
                interval={0}
                ratio={isBrowser ? window.devicePixelRatio : 1}
            ></Canvas>
        </div>
    );
}
