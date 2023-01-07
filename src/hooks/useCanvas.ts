import { useRef, useEffect } from 'react';
import useIsBrowser from '@docusaurus/useIsBrowser';

const useCanvas = (
    draw: (context: CanvasRenderingContext2D, frameCount: number) => void,
    width: number,
    height: number
) => {
    const isBrowser = useIsBrowser();
    const devicePixelRatio = isBrowser ? window.devicePixelRatio : 1;
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        const canvasWidth = canvas.width;
        const canvasHeight = canvas.height;
        canvas.width = canvasWidth * devicePixelRatio;
        canvas.height = canvasHeight * devicePixelRatio;
        canvas.style.width = canvasWidth + 'px';
        canvas.style.height = canvasHeight + 'px';
        context.scale(devicePixelRatio, devicePixelRatio);
    }, [width, height]);

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        let frameCount = 0;
        let animationFrameId = -1;

        const render = () => {
            frameCount++;
            context.save();
            context.clearRect(0, 0, canvas.width, canvas.height);
            draw(context, frameCount);
            context.restore();
            animationFrameId = window.requestAnimationFrame(render);
        };
        render();

        return () => {
            window.cancelAnimationFrame(animationFrameId);
        };
    }, [draw]);

    return canvasRef;
};

export default useCanvas;
