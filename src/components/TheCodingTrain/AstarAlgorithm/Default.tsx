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
    const [path, setPath] = useState<Spot[]>([]);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, frameCount: number) => {
            if (!isReady) return null;

            let tempPath: Spot[] = path.length > 0 ? path : [];
            let winner = 0;
            const openArr = Array.from(openSet);
            for (let i = 0; i < openArr.length; i++) {
                if (openArr[i].f < openArr[winner].f) {
                    winner = i;
                }
            }
            let current = openArr[winner];

            // Did I finish?
            if (current === end) {
                setPath(tempPath);
            }

            if (openSet.size > 0) {
                openSet.delete(current);
                closedSet.add(current);

                const neighbors = current.neighbors;
                for (let i = 0; i < neighbors.length; i++) {
                    const neighbor = neighbors[i];

                    if (!closedSet.has(neighbor) && !neighbor.wall) {
                        const tempG = current.g + heuristic(neighbor, current);

                        let newPath = false;
                        if (openSet.has(neighbor)) {
                            if (tempG < neighbor.g) {
                                neighbor.g = tempG;
                                newPath = true;
                            }
                        } else {
                            neighbor.g = tempG;
                            newPath = true;
                            openSet.add(neighbor);
                        }

                        if (newPath) {
                            neighbor.h = heuristic(neighbor, end);
                            neighbor.f = neighbor.g + neighbor.h;
                            neighbor.previous = current;
                        }
                    }
                }
            }

            ctx.fillStyle = 'rgba(45, 197, 244, 1)';
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    grid[i][j].show(ctx);
                }
            }

            closedSet.forEach((spot) => {
                spot.show(ctx, 'rgba(236, 1, 90, 0.7)');
            });

            openSet.forEach((spot) => {
                spot.show(ctx, 'rgba(240, 99, 164, 0.7)');
            });

            // Find the path by working backwards
            if (tempPath.length === 0) {
                let temp = current;
                tempPath.push(temp);
                while (temp.previous) {
                    tempPath.push(temp.previous);
                    temp = temp.previous;
                }
            }

            ctx.strokeStyle = "rgb(252, 238, 33)";
            ctx.lineWidth = w / 2;

            ctx.beginPath();
            for (let i = 0; i < tempPath.length; i++) {
                const x = tempPath[i].i * w + w / 2;
                const y = tempPath[i].j * h + h / 2;

                if (i === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            ctx.stroke();
        },
        [isReady, path]
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
                interval={60}
                ratio={isBrowser ? window.devicePixelRatio : 1}
            ></Canvas>
        </>
    );
}
