// https://github.com/processing/p5.js/blob/v1.5.0/src/math/p5.Vector.js#L10

type Pair = [number, number];

export class Vector2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static add(v1: Vector2D, v2: Vector2D): Vector2D {
        const target = v1.copy();
        target.add(v2);
        return target;
    }

    static sub(v1: Vector2D, v2: Vector2D): Vector2D {
        const target = v1.copy();
        target.sub(v2);
        return target;
    }

    static mult(v1: Vector2D, v2: Vector2D): Vector2D {
        const target = v1.copy();
        target.mult(v2);
        return target;
    }

    static div(v1: Vector2D, v2: Vector2D): Vector2D {
        const target = v1.copy();
        target.div(v2);
        return target;
    }

    static rem(v1: Vector2D, v2: Vector2D): Vector2D {
        const target = v1.copy();
        target.rem(v2);
        return target;
    }

    static random(): Vector2D {
        return this.fromRad(Math.random() * Math.PI * 2);
    }

    static fromRad(rad: number, length: number = 1): Vector2D {
        return new Vector2D(length * Math.cos(rad), length * Math.sin(rad));
    }

    static fromDeg(deg: number, length: number = 1): Vector2D {
        const rad = (deg * Math.PI) / 180;
        return new Vector2D(length * Math.cos(rad), length * Math.sin(rad));
    }

    norm(): Vector2D {
        const len = this.mag();
        if (len !== 0) this.mult(1 / len);
        return this;
    }

    setMag(value: number): Vector2D {
        return this.norm().mult(value);
    }

    mag(): number {
        return Math.sqrt(this.magSq());
    }

    magSq(): number {
        const { x, y } = this;
        return x * x + y * y;
    }

    dot(value: Vector2D | Pair) {
        if (value instanceof Vector2D) {
            return this.dot([value.x, value.y]);
        }
        return this.x * (value[0] || 0) + this.y * (value[1] || 0);
    }

    limit(max: number): Vector2D {
        const mSq = this.magSq();
        if (mSq > max * max) {
            this.div(Math.sqrt(mSq)).mult(max);
        }
        return this;
    }

    add(value: Vector2D | Pair): Vector2D {
        if (value instanceof Vector2D) {
            this.x += value.x || 0;
            this.y += value.y || 0;
            return this;
        }
        this.x += value[0] || 0;
        this.y += value[1] || 0;
        return this;
    }

    sub(value: Vector2D | Pair): Vector2D {
        if (value instanceof Vector2D) {
            this.x -= value.x || 0;
            this.y -= value.y || 0;
            return this;
        }
        this.x -= value[0] || 0;
        this.y -= value[1] || 0;
        return this;
    }

    mult(value: Vector2D | number): Vector2D {
        if (value instanceof Vector2D) {
            this.x *= value.x || 1;
            this.y *= value.y || 1;
            return this;
        }
        this.x *= value || 1;
        this.y *= value || 1;
        return this;
    }

    div(value: Vector2D | number): Vector2D {
        if (value instanceof Vector2D) {
            this.x /= value.x || 1;
            this.y /= value.y || 1;
            return this;
        }
        this.x /= value || 1;
        this.y /= value || 1;
        return this;
    }

    rem(value: Vector2D | number): Vector2D {
        if (value instanceof Vector2D) {
            this.x %= value.x || 1;
            this.y %= value.y || 1;
            return this;
        }
        this.x %= value || 1;
        this.y %= value || 1;
        return this;
    }

    copy(): Vector2D {
        return new Vector2D(this.x, this.y);
    }

    toRad(): number {
        return Math.atan2(this.y, this.x);
    }

    toDeg(): number {
        return this.toRad() * (180 / Math.PI);
    }
}
