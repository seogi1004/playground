import React, { useCallback } from 'react';
import Canvas from '../../Canvas';
import useIsBrowser from '@docusaurus/useIsBrowser';

const width = 800;
const height = 200;

function getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

async function quickSort(
    states: number[],
    arr: number[],
    start: number,
    end: number
) {
    if (start >= end) {
        return;
    }
    let index = await partition(states, arr, start, end);
    states[index] = -1;

    await Promise.all([
        quickSort(states, arr, start, index - 1),
        quickSort(states, arr, index + 1, end),
    ]);
}

async function partition(
    states: number[],
    arr: number[],
    start: number,
    end: number
): Promise<number> {
    for (let i = start; i < end; i++) {
        states[i] = 1;
    }

    let pivotIndex = start;
    let pivotValue = arr[end];
    states[pivotIndex] = 0;
    for (let i = start; i < end; i++) {
        if (arr[i] < pivotValue) {
            await swap(arr, i, pivotIndex);
            states[pivotIndex] = -1;
            pivotIndex++;
            states[pivotIndex] = 0;
        }
    }

    await swap(arr, pivotIndex, end);
    return pivotIndex;
}

async function swap(arr: number[], a: number, b: number) {
    await sleep(50);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export default function Index() {
    const isBrowser = useIsBrowser();

    let values: number[] = [];
    let w = 10;
    let states: number[] = [];

    values = new Array(Math.floor(width / w));
    for (let i = 0; i < values.length; i++) {
        values[i] = getRandomValue(0, height);
        states[i] = -1;
    }
    quickSort(states, values, 0, values.length - 1);

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, frameCount: number) => {
            ctx.fillStyle = '#000';
            ctx.fillRect(0, 0, width, height);

            for (let i = 0; i < values.length; i++) {
                if (states[i] == 0) {
                    ctx.fillStyle = '#E0777D';
                } else if (states[i] == 1) {
                    ctx.fillStyle = '#D6FFB7';
                } else {
                    ctx.fillStyle = '#FFF0F0';
                }
                ctx.fillRect(i * w, height - values[i], w, values[i]);
            }
        },
        [values]
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
