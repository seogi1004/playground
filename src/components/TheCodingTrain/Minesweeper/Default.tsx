import React, { useCallback, useState } from 'react';
import Canvas from '../../Canvas';
import useIsBrowser from '@docusaurus/useIsBrowser';
import Cell from './Cell';

const width = 401;
const height = 401;
const w = 20;
const totalBees = 30;

const cols = Math.floor(width / w);
const rows = Math.floor(height / w);

const grid = make2DArray(cols, rows);

function gameStart() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j] = new Cell(i, j, w);
        }
    }

    const options = Array<[number, number]>();
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            options.push([i, j]);
        }
    }

    for (let n = 0; n < totalBees; n++) {
        const index = Math.floor(Math.random() * options.length);
        const choice = options[index];
        const i = choice[0];
        const j = choice[1];
        options.splice(index, 1);
        grid[i][j].bee = true;
    }

    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].countBees(grid, cols, rows);
        }
    }
}

function make2DArray(cols: number, rows: number): Cell[][] {
    let arr = new Array(cols);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(rows);
    }
    return arr;
}

function gameOver() {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            grid[i][j].revealed = true;
        }
    }
}

function mousePressed(mouseX: number, mouseY: number, callback: () => void) {
    for (let i = 0; i < cols; i++) {
        for (let j = 0; j < rows; j++) {
            if (grid[i][j].contains(mouseX, mouseY)) {
                grid[i][j].reveal(grid, cols, rows);
                if (grid[i][j].bee) {
                    gameOver();
                    callback();
                }
            }
        }
    }
}

gameStart();

export default function Default() {
    const isBrowser = useIsBrowser();

    const [isGameOver, setIsGameOver] = useState(false);
    const [mouseIsPressed, setMouseIsPressed] = useState(false);
    const [mouseX, setMouseX] = useState(0);
    const [mouseY, setMouseY] = useState(0);

    const onMouseDownHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        setMouseX(e.nativeEvent.offsetX);
        setMouseY(e.nativeEvent.offsetY);
        setMouseIsPressed(true);
    };
    const onMouseUpHandler = () => {
        setMouseIsPressed(false);
    };
    const onResetAll = () => {
        setIsGameOver(false);
        setMouseX(-1);
        setMouseY(-1);
        setMouseIsPressed(false);
        gameStart();
    }

    const draw = useCallback(
        (ctx: CanvasRenderingContext2D, frameCount: number) => {
            ctx.fillStyle = '#fff';
            ctx.fillRect(0, 0, width, height);
            ctx.translate(0.5, 0.5);

            if (mouseIsPressed && !isGameOver) {
                mousePressed(mouseX, mouseY, () => {
                    setIsGameOver(true);
                });
            }

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    grid[i][j].show(ctx);
                }
            }
        },
        [mouseIsPressed, isGameOver]
    );

    return (
        <>
            <div
                style={{ userSelect: 'none' }}
                onMouseDown={onMouseDownHandler}
                onMouseUp={onMouseUpHandler}
            >
                <Canvas
                    draw={draw}
                    width={width}
                    height={height}
                    interval={5000}
                    ratio={isBrowser ? window.devicePixelRatio : 1}
                ></Canvas>
            </div>
            {isGameOver ? <button onClick={onResetAll}>Reset</button> : ''}
        </>
    );
}
