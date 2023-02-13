import { Vector2D } from '../Vector';
import { random, dist } from '../utility';

export class Boid {
    width: number;
    height: number;
    position: Vector2D;
    velocity: Vector2D;
    acceleration: Vector2D;
    maxForce: number;
    maxSpeed: number;

    constructor(width: number, height: number) {
        this.width = width;
        this.height = height;
        this.position = new Vector2D(random(0, width), random(0, height));
        this.velocity = Vector2D.random();
        this.velocity.setMag(random(2, 4));
        this.acceleration = new Vector2D(0, 0);
        this.maxForce = 0.2;
        this.maxSpeed = 5;
    }

    edges() {
        if (this.position.x > this.width) {
            this.position.x = 0;
        } else if (this.position.x < 0) {
            this.position.x = this.width;
        }

        if (this.position.y > this.height) {
            this.position.y = 0;
        } else if (this.position.y < 0) {
            this.position.y = this.height;
        }
    }

    separation(boids: Boid[]) {
        let perceptionRadius = 24;
        let steering = new Vector2D(0, 0);
        let total = 0;

        for (let other of boids) {
            const d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );
            if (other !== this && d < perceptionRadius) {
                let diff = Vector2D.sub(this.position, other.position);
                diff.div(d);
                steering.add(diff);
                total++;
            }
        }

        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }

    cohesion(boids: Boid[]) {
        let perceptionRadius = 50;
        let steering = new Vector2D(0, 0);
        let total = 0;

        for (let other of boids) {
            const d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );
            if (other !== this && d < perceptionRadius) {
                steering.add(other.position);
                total++;
            }
        }

        if (total > 0) {
            steering.div(total);
            steering.sub(this.position);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }

    align(boids: Boid[]) {
        let perceptionRadius = 25;
        let steering = new Vector2D(0, 0);
        let total = 0;

        for (let other of boids) {
            const d = dist(
                this.position.x,
                this.position.y,
                other.position.x,
                other.position.y
            );
            if (other !== this && d < perceptionRadius) {
                steering.add(other.velocity);
                total++;
            }
        }

        if (total > 0) {
            steering.div(total);
            steering.setMag(this.maxSpeed);
            steering.sub(this.velocity);
            steering.limit(this.maxForce);
        }

        return steering;
    }

    flock(boids: Boid[]) {
        let alignment = this.align(boids);
        let cohesion = this.cohesion(boids);
        let separation = this.separation(boids);

        this.acceleration.add(alignment);
        this.acceleration.add(cohesion);
        this.acceleration.add(separation);
    }

    update() {
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxSpeed);
        this.acceleration.mult(0);
    }

    show(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = '#fff';
        ctx.fillStyle = '#fff';

        const { x, y } = this.position;

        const d1 = this.velocity.copy().normalize();
        const d2 = Vector2D.fromDeg(180, 20);
        d1.mult(8);

        ctx.beginPath();
        ctx.arc(x, y, 1, 0, Math.PI * 2);
        ctx.stroke();
        ctx.fill();

        const l0 = new Path2D();
        l0.moveTo(x, y);
        l0.lineTo(x + d1.x, y + d1.y);
        ctx.stroke(l0);

        const l1 = new Path2D();
        l1.moveTo(x, y);
        l1.lineTo(x + d2.x, y + d2.y);
        ctx.stroke(l1);

        // const l2 = new Path2D();
        // l2.moveTo(x, y);
        // l2.lineTo(x + d3.x, y + d3.y);
        // ctx.stroke(l2);
    }
}
