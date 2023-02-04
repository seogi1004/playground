import { useRef, useEffect } from 'react';

export function preRender(
    canvas: HTMLCanvasElement,
    width: number,
    height: number,
    ratio: number
) {
    const context = canvas.getContext('2d');
    canvas.width = width * ratio;
    canvas.height = height * ratio;
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    context.scale(ratio, ratio);
}

const useCanvas = (
    draw: (context: CanvasRenderingContext2D, frameCount: number) => void,
    width: number,
    height: number,
    interval: number = 0,
    ratio: number = 1
) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId = -1;
        let lastTimestamp = 0;
        let cumulativeTime = 0;

        const render = (timestamp) => {
            if (lastTimestamp > 0) {
                const delta = timestamp - lastTimestamp;
                cumulativeTime += delta;
            }

            if (timestamp === 0 || cumulativeTime > interval) {
                frameCount++;
                context.save();
                context.clearRect(0, 0, canvas.width, canvas.height);
                draw(context, frameCount);
                context.restore();
                cumulativeTime -= interval;
            }

            if (interval > -1) {
                lastTimestamp = timestamp;
                animationFrameId = window.requestAnimationFrame(render);
            }
        };

        if (ratio > 1) preRender(canvasRef.current, width, height, ratio);
        render(0);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return canvasRef;
};

export default useCanvas;
