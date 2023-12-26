import React, { useCallback, useState } from 'react';
import Canvas from '../../Canvas';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Spot from './Spot';

const width = 400;
const height = 400;
const spacing = 5;

function make2DArray(cols, rows) {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

export default function Default() {
    const isBrowser = useIsBrowser();
    const path: Spot[] = [];
    const cols = Math.floor(width / spacing);
    const rows = Math.floor(height / spacing);

    let spot: Spot;
    const grid = make2DArray(cols, rows);
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Spot(i, j, spacing);
        }
    }
    spot = grid[cols / 2][rows / 2];
    path.push(spot);
    spot.visited = true;

    const isValid = (i: number, j: number) => {
        if (i < 0 || i >= cols || j < 0 || j >= rows) {
            return false;
        }
        return !grid[i][j].visited;
    }

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, frameCount: number) => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);
            ctx.translate(spacing * 0.5, spacing * 0.5);

            spot = spot.nextSpot(grid, isValid);

            if (!spot) {
                let stuck = path.pop();
                if (stuck) stuck.clear();
                spot = path[path.length - 1];
            } else {
                path.push(spot);
                spot.visited = true;
            }

            if (path.length === cols * rows) {
                console.log("Solved!");
                return null;
            }

            ctx.strokeStyle = '#fff';
            ctx.lineWidth = spacing * 0.25;
            if (path.length > 1) {
                ctx.beginPath();
                for (let i = 0; i < path.length - 1; i++) {
                    ctx.moveTo(path[i].x, path[i].y);
                    ctx.lineTo(path[i + 1].x, path[i + 1].y);
                    ctx.stroke();
                }
                ctx.closePath();
            }
        },
        [path]
    );

    return (
        <Canvas
            draw={draw}
            width={width}
            height={height}
            interval={100}
            ratio={isBrowser ? window.devicePixelRatio : 1}
        ></Canvas>
    );
}
