import React, { useCallback, useState, useMemo } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Canvas from '../../Canvas';
import { Point, Rectangle, Circle, QuadTree } from './QuadTree';
import { Particle } from './Particle';
import { random } from '@site/src/base/utility';

const width = 600;
const height = 400;

export default function MouseCreator() {
    const isBrowser = useIsBrowser();

    let particles = useMemo(() => {
        let particles: Particle[] = [];
        for (let i = 0; i < 1000; i++) {
            particles[i] = new Particle(random(0, width), random(0, height));
        }
        return particles;
    }, [isBrowser]);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, _) => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            const boundary = new Rectangle<Particle>(
                width / 2,
                height / 2,
                width,
                height
            );
            const qtree: QuadTree<Particle> = new QuadTree(boundary, 4);

            for (let p of particles) {
                let point = new Point(p.x, p.y, p);
                qtree.insert(point);
                p.move();
                p.render(ctx);
                p.setHighlight(false);
            }

            for (let p of particles) {
                let range = new Circle(p.x, p.y, p.r * 2);
                let points = qtree.query<Circle<Particle>>(range);
                for (let point of points) {
                    let other = point.userData;
                    // for (let other of particles) {
                    if (p !== other && p.intersects(other)) {
                        p.setHighlight(true);
                    }
                }
            }
        },
        [particles]
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
