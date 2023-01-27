import { useRef, useEffect } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

const useCanvas = (
    draw: (context: CanvasRenderingContext2D, frameCount: number) => void,
    width: number,
    height: number,
    interval: number = 0
) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // const isBrowser = useIsBrowser();
    // const devicePixelRatio = isBrowser ? window.devicePixelRatio : 1;
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     const context = canvas.getContext('2d');
    //     const canvasWidth = canvas.width;
    //     const canvasHeight = canvas.height;
    //     canvas.width = canvasWidth * devicePixelRatio;
    //     canvas.height = canvasHeight * devicePixelRatio;
    //     context.scale(devicePixelRatio, devicePixelRatio);
    // }, []);

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
        render(0);

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return canvasRef;
};

export default useCanvas;
