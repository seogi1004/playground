export default class Cell {
    i: number;
    j: number;
    x: number;
    y: number;
    w: number;
    neighborCount: number;
    bee: boolean;
    revealed: boolean;

    constructor(i: number, j: number, w: number) {
        this.i = i;
        this.j = j;
        this.x = i * w;
        this.y = j * w;
        this.w = w;
        this.neighborCount = 0;
        this.bee = false;
        this.revealed = false;
    }

    show(ctx: CanvasRenderingContext2D) {
        ctx.strokeStyle = '#000';
        ctx.rect(this.x, this.y, this.w, this.w);
        ctx.stroke();

        if (this.revealed) {
            if (this.bee) {
                ctx.beginPath();
                ctx.arc(this.x + this.w / 2, this.y + this.w / 2, this.w / 4, 0, Math.PI * 2);
                ctx.fillStyle = '#c8c8c8';
                ctx.fill();
            } else {
                ctx.beginPath();
                ctx.fillStyle = "#c8c8c8";
                ctx.rect(this.x, this.y, this.w, this.w);
                ctx.fill();

                if (this.neighborCount > 0) {
                    ctx.font = '14px Arial';
                    ctx.fillStyle = '#000000';
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    ctx.fillText(this.neighborCount.toString(), this.x + this.w / 2, this.y + this.w / 2 + 2);
                }
            }
        }
    }

    countBees(grid: Cell[][], cols: number, rows: number) {
        if (this.bee) {
            this.neighborCount = -1;
            return;
        }

        let total = 0;
        for (let xoff = -1; xoff <= 1; xoff++) {
            let i = this.i + xoff;
            if (i < 0 || i >= cols) continue;

            for (let yoff = -1; yoff <= 1; yoff++) {
                let j = this.j + yoff;
                if (j < 0 || j >= rows) continue;

                const neighbor = grid[i][j];
                if (neighbor.bee) {
                    total++;
                }
            }
        }

        this.neighborCount = total;
    }

    contains(x: number, y: number) {
        return (x > this.x && x < this.x + this.w && y > this.y && y < this.y + this.w);
    }

    reveal(grid: Cell[][], cols: number, rows: number) {
        this.revealed = true;
        if (this.neighborCount === 0) {
            this.floodFill(grid, cols, rows);
        }
    }

    floodFill(grid: Cell[][], cols: number, rows: number) {
        for (let xoff = -1; xoff <= 1; xoff++) {
            let i = this.i + xoff;
            if (i < 0 || i >= cols) continue;

            for (let yoff = -1; yoff <= 1; yoff++) {
                let j = this.j + yoff;
                if (j < 0 || j >= rows) continue;

                const neighbor = grid[i][j];
                if (!neighbor.revealed) {
                    neighbor.reveal(grid, cols, rows);
                }
            }
        }
    }
}
