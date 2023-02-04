// https://github.com/processing/p5.js/blob/v1.5.0/src/math/p5.Vector.js#L10

export class Vector2D {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    static random2D(): Vector2D {
        return this.fromAngle(Math.random() * Math.PI * 2);
    }

    static fromAngle(angle: number, length?: number): Vector2D {
        /*
        if (typeof length === 'undefined') {
    length = 1;
  }
  return new p5.Vector(length * Math.cos(angle), length * Math.sin(angle), 0);
         */
        return new Vector2D(1, 1);
    }

    setMag(len: number): Vector2D {
        return new Vector2D(1, 1);
    }

    limit(max: number): Vector2D {
        return new Vector2D(1, 1);
    }

    div(n: number): Vector2D {
        return new Vector2D(1, 1);
    }

    add(value: Vector2D | number[]): Vector2D {
        return new Vector2D(1, 1);
    }

    sub(value: Vector2D | number[]): Vector2D {
        return new Vector2D(1, 1);
    }

    mult(n: number): Vector2D {
        return new Vector2D(1, 1);
    }

    copy(): Vector2D {
        return new Vector2D(1, 1);
    }
}
