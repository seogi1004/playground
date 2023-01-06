import { scaleLinear } from 'd3-scale';
import React, { useEffect } from 'react';
import Canvas from '../../Canvas';

const width = 400;
const height = 400;

interface Star {
    x: number;
    y: number;
    z: number;
    pz: number;
}

function getRandomValue(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

function createStar(): Star {
    const z = getRandomValue(0, width);
    return {
        x: getRandomValue(-width, width),
        y: getRandomValue(-height, height),
        z,
        pz: z,
    };
}

function updateStar(star: Star): Star {
    const newStar = {
        x: star.x,
        y: star.y,
        z: star.z - 1,
        pz: star.z,
    };
    if (newStar.z < 1) {
        return {
            x: getRandomValue(-width, width),
            y: getRandomValue(-height, height),
            z: width,
            pz: width,
        };
    }
    return newStar;
}

export default function Index() {
    const stars: Star[] = [];
    const xScale = scaleLinear().domain([0, 1]).range([0, width]);
    const yScale = scaleLinear().domain([0, 1]).range([0, height]);
    const zScale = scaleLinear().domain([0, width]).range([16, 0]);
    const outputX = scaleLinear().domain([-width, width]).range([0, width]);
    const outputY = scaleLinear().domain([-height, height]).range([0, height]);

    for (let i = 0; i < 100; i++) {
        stars.push(createStar());
    }

    const draw = (ctx: CanvasRenderingContext2D, frameCount: number) => {
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, width, height);

        stars.forEach((star, index) => {
            const newStar = updateStar(star);
            const sx = xScale(newStar.x / newStar.z);
            const sy = yScale(newStar.y / newStar.z);
            const px = xScale(newStar.x / newStar.pz);
            const py = yScale(newStar.y / newStar.pz);

            ctx.fillStyle = '#fff';
            ctx.beginPath();
            ctx.arc(
                outputX(sx),
                outputY(sy),
                zScale(newStar.z),
                0,
                2 * Math.PI
            );
            ctx.fill();
            ctx.closePath();

            ctx.strokeStyle = '#fff';
            ctx.beginPath();
            ctx.moveTo(outputX(px), outputY(py));
            ctx.lineTo(outputX(newStar.x), outputY(newStar.y));
            ctx.stroke();
            ctx.closePath();

            stars[index] = newStar;
        });
    };

    return <Canvas draw={draw} width={400} height={400}></Canvas>;
}
