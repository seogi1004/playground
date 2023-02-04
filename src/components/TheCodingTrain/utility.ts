export function random(min: number, max: number) {
    return Math.random() * (max - min) + min;
}

export function dist(x1: number, y1: number, x2: number, y2: number) {
    const a = x1 - x2;
    const b = y1 - y2;
    return Math.sqrt(a * a + b * b);
}
