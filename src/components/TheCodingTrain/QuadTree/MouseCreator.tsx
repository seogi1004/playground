import React, { useCallback, useState, useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '../../Canvas';
import { Point, Rectangle, QuadTree } from './QuadTree';

const width = 400;
const height = 400;

export default function MouseCreator() {
    let qtree = useMemo(() => {
        const boundary = new Rectangle(200, 200, 200, 200);
        return new QuadTree(boundary, 4);
    }, []);

    const [mouseIsPressed, setMouseIsPressed] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, _) => {
            if (mouseIsPressed) {
                for (let i = 0; i < 5; i++) {
                    let m = new Point(mouseX, mouseY);
                    qtree.insert(m);
                }
            }

            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);
            qtree.show(ctx);
        },
        [mouseIsPressed]
    );

    const onMouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseX(e.nativeEvent.offsetX);
        setMouseY(e.nativeEvent.offsetY);
        setMouseIsPressed(true);
    };
    const onMouseUpHandler = () => {
        setMouseIsPressed(false);
    };

    return (
        <div
            style={{ userSelect: 'none' }}
            onMouseDown={onMouseDownHandler}
            onMouseUp={onMouseUpHandler}
        >
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
