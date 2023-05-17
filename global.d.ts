declare module '*.png' {
    const value: any;
    export = value;
}

type CanvasDrawHandler = (
    context: CanvasRenderingContext2D,
    frameCount: number
) => void;
