import React, { useCallback, useState } from 'react';
import Canvas from '../../Canvas';
import { Point, Rectangle, QuadTree } from './QuadTree';
import { getRandomValue } from '../utility';

const width = 400;
const height = 400;

export default function Index() {
    const boundary = new Rectangle(200, 200, 200, 200);
    let qtree: QuadTree;

    const [mouseIsPressed, setMouseIsPressed] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, frameCount: number) => {
            // 최초 한번만 실행하기
            if (frameCount === 1) {
                qtree = new QuadTree(ctx, boundary, 4);

                for (let i = 0; i < 1000; i++) {
                    let p = new Point(
                        getRandomValue(0, width),
                        getRandomValue(0, height)
                    );
                    qtree.insert(p);
                }
            }

            // if (mouseIsPressed) {
            //     for (let i = 0; i < 5; i++) {
            //         let m = new Point(mouseX, mouseY);
            //         qtree.insert(m);
            //     }
            // }

            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);
            qtree.show();
        },
        []
    );

    const onMouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseX(e.nativeEvent.offsetX);
        setMouseY(e.nativeEvent.offsetY);
        setMouseIsPressed(true);
        console.log(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    };
    const onMouseUpHandler = () => {
        setMouseIsPressed(false);
    };

    return (
        <div onMouseDown={onMouseDownHandler} onMouseUp={onMouseUpHandler}>
            <Canvas
                draw={draw}
                width={width}
                height={height}
                interval={0}
                ratio={2}
            ></Canvas>
        </div>
    );
}
