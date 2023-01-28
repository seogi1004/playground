import React from 'react';
import useCanvas from '../hooks/useCanvas';

interface Props {
    draw: (context: CanvasRenderingContext2D, frameCount: number) => void;
    width: number;
    height: number;
    interval: number;
    ratio: number;
}

const Canvas = (props: Props) => {
    const { draw, ...rest } = props;

    const canvasRef = useCanvas(
        draw,
        props.width,
        props.height,
        props.interval,
        props.ratio
    );

    return <canvas ref={canvasRef} {...rest} />;
};

export default Canvas;
