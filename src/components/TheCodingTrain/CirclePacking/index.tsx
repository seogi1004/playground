import React, { useCallback, useState } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Canvas from '../../Canvas';
import Circle from './Circle';

let circles: Circle[] = [];
let spots: [number, number][] = [];

export function brightness(r, g, b) {
    return (r / 255) * 0.3 + (g / 255) * 0.59 + (b / 255) * 0.11;
}

export function newCircle() {
    const r = Math.floor(Math.random() * spots.length);
    const spot = spots[r];

    const x = spot[0];
    const y = spot[1];

    let valid = true;
    for (let i = 0; i < circles.length; i++) {
        const c = circles[i];
        const d = newDist(x, y, c.x, c.y);

        if (d < c.r + 2) {
            valid = false;
            break;
        }
    }

    if (valid) {
        return new Circle(x, y);
    } else {
        return null;
    }
}

export function newDist(x1: number, y1: number, x2: number, y2: number) {
    const a = x1 - x2;
    const b = y1 - y2;
    return Math.sqrt(a * a + b * b) / window.devicePixelRatio;
}

export default function Index() {
    let isFirst = true;
    let [width, setWidth] = useState(400);
    let [height, setHeight] = useState(400);
    const image = new Image();
    image.src = useBaseUrl('img/2022.png');

    const draw = useCallback(
        async (ctx: CanvasRenderingContext2D, frameCount: number) => {
            if (isFirst) {
                image.onload = () => {
                    setWidth(image.width);
                    setHeight(image.height);
                    ctx.drawImage(image, 0, 0);

                    const pixels = ctx.getImageData(
                        0,
                        0,
                        image.width,
                        image.height
                    );

                    for (let x = 0; x < image.width; x++) {
                        for (let y = 0; y < image.height; y++) {
                            const index = x + y * image.width * 4;
                            const r = pixels.data[index];
                            const g = pixels.data[index + 1];
                            const b = pixels.data[index + 2];
                            // const a = pixels.data[index + 3];
                            const light = brightness(r, g, b);
                            // console.log(r, g, b, light);
                            if (light > 0.99) {
                                spots.push([x, y]);
                            }
                        }
                    }
                };
                isFirst = false;
            } else {
                ctx.fillStyle = '#000';
                ctx.fillRect(0, 0, image.width, image.height);

                const total = 1;
                let count = 0;
                let attempts = 0;

                if (circles.length < 2) {
                    while (count < total) {
                        const newC = newCircle();
                        if (newC !== null) {
                            circles.push(newC);
                            count++;
                        }
                        attempts++;
                        if (attempts > 10) {
                            console.log('FINISHED');
                            break;
                        }
                    }
                }

                circles.forEach((c) => {
                    if (c.growing) {
                        if (c.edges(image.width, image.height)) {
                            c.growing = false;
                        } else {
                            for (let i = 0; i < circles.length; i++) {
                                const other = circles[i];
                                if (c !== other) {
                                    const d = newDist(
                                        c.x,
                                        c.y,
                                        other.x,
                                        other.y
                                    );

                                    if (d < c.r + other.r) {
                                        console.log('충돌');
                                        c.growing = false;
                                        break;
                                    }
                                }
                            }
                        }
                    }

                    ctx.strokeStyle = '#fff';
                    ctx.beginPath();
                    ctx.arc(c.x, c.y, c.r * 2, 0, 2 * Math.PI);
                    ctx.stroke();
                    ctx.closePath();

                    c.grow();
                });
            }
        },
        []
    );

    return (
        <>
            <Canvas draw={draw} width={width} height={height}></Canvas>
        </>
    );
}
