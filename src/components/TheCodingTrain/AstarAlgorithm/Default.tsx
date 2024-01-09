import React, { useCallback, useEffect, useState } from 'react';
import Canvas from '../../Canvas';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Spot from './Spot';
import { dist } from '../../../base/utility';

const width = 400;
const height = 400;

const cols = 25;
const rows = 25;

const w = width / cols;
const h = height/ rows;

const grid = make2DArray(cols, rows);
const openSet = new Set<Spot>();
const closedSet = new Set<Spot>();

let start: Spot = undefined;
let end: Spot = undefined;

function make2DArray(cols: number, rows: number): Spot[][] {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

// An educated guess of how far it is between two points
function heuristic(a: Spot, b: Spot) {
    const d = dist(a.i, a.j, b.i, b.j);
    // var d = abs(a.i - b.i) + abs(a.j - b.j);
    return d;
}

export default function Default() {
    const isBrowser = useIsBrowser();
    const [isReady, setIsReady] = useState(false);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, frameCount: number) => {
            if (!isReady) return null;

            let winner = 0;
            console.log(openSet[0]);
            // for (let i = 0; i < openSet.size; i++) {
            //     if (openSet[i].f < openSet[winner].f) {
            //         winner = i;
            //     }
            // }
            // let current = openSet[winner];

            ctx.fillStyle = 'rgb(45, 197, 244, 1)';
            ctx.fillRect(0, 0, width, height);

            if (openSet.size > 0) {

            } else {
                console.log('no solution');
                return null;
            }

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    grid[i][j].show(ctx);
                }
            }

            closedSet.forEach((spot) => {
               spot.show(ctx, 'color(236, 1, 90, 3)');
            });

            openSet.forEach((spot) => {
                spot.show(ctx, 'color(240, 99, 164, 3)');
            });
        },
        [isReady]
    );

    useEffect(() => {
        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j] = new Spot(i, j, w, h);
            }
        }

        for (let i = 0; i < cols; i++) {
            for (let j = 0; j < rows; j++) {
                grid[i][j].addNeighbors(grid);
            }
        }

        // Start and end
        start = grid[0][0];
        end = grid[cols - 1][rows - 1];
        start.wall = false;
        end.wall = false;

        // openSet starts with beginning only
        openSet.add(start);

        setIsReady(true);
    }, []);

    return (
        <>
            <Canvas
                draw={draw}
                width={width}
                height={height}
                interval={5000}
                ratio={isBrowser ? window.devicePixelRatio : 1}
            ></Canvas>
        </>
    );
}
