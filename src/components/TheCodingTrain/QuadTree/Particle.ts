import { random, dist } from '@site/src/base/utility';

export class Particle {
    x: number;
    y: number;
    r: number;
    highlight: boolean;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.r = 4;
        this.highlight = false;
    }

    setHighlight(value: boolean) {
        this.highlight = value;
    }

    intersects(other: Particle): boolean {
        let d = dist(this.x, this.y, other.x, other.y);

        return d < this.r + other.r;
    }

    move() {
        this.x += random(-1, 1);
        this.y += random(-1, 1);
    }

    render(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = this.highlight ? 'white' : 'gray';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();
        ctx.closePath();
    }
}
