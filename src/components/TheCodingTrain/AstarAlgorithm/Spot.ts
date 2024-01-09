export default class Spot {
    i: number;
    j: number;
    width: number;
    height: number;

    f: number;
    g: number;
    h: number;

    wall: boolean;
    neighbors: Spot[];
    previous?: Spot;

    constructor(i: number, j: number, width: number, height: number) {
        this.i = i;
        this.j = j;
        this.width = width;
        this.height = height;
        this.f = 0;
        this.g = 0;
        this.h = 0;
        this.neighbors = [];
        this.previous = undefined;
        this.wall = Math.random() < 0.4;
    }

    show(ctx: CanvasRenderingContext2D, color: string = 'rgb(45, 197, 244)') {
        const { width: w, height: h } = this;
        const r = w + h / 2;

        if (this.wall) {
            ctx.beginPath();
            ctx.fillStyle = 'rgb(112, 50, 126)';
            ctx.arc(this.i * w + w / 2, this.j * h + h / 2, r / 8, 0, Math.PI * 2);
            ctx.fill();
        } else {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.fillRect(this.i * w, this.j * w, w, h);
        }
    }

    addNeighbors(grid: Spot[][]) {
       const { i, j } = this;
       const cols = grid.length;
       const rows = grid[0].length;


        if (i < cols - 1) {
            this.neighbors.push(grid[i + 1][j]);
        }
        if (i > 0) {
            this.neighbors.push(grid[i - 1][j]);
        }
        if (j < rows - 1) {
            this.neighbors.push(grid[i][j + 1]);
        }
        if (j > 0) {
            this.neighbors.push(grid[i][j - 1]);
        }
        if (i > 0 && j > 0) {
            this.neighbors.push(grid[i - 1][j - 1]);
        }
        if (i < cols - 1 && j > 0) {
            this.neighbors.push(grid[i + 1][j - 1]);
        }
        if (i > 0 && j < rows - 1) {
            this.neighbors.push(grid[i - 1][j + 1]);
        }
        if (i < cols - 1 && j < rows - 1) {
            this.neighbors.push(grid[i + 1][j + 1]);
        }
    }
}
