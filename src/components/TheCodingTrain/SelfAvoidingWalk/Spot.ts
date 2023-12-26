class Step {
    dx: number;
    dy: number;
    tried: boolean;

    constructor(dx: number, dy: number) {
        this.dx = dx;
        this.dy = dy;
        this.tried = false;
    }
}

export default class Spot {
    i: number;
    j: number;
    x: number;
    y: number;
    options: Step[];
    visited: boolean;

    constructor(i: number, j: number, spacing: number) {
        this.i = i;
        this.j = j;
        this.x = i * spacing;
        this.y = j * spacing;
        this.options = this._allOptions();
        this.visited = false;
    }

    _allOptions() {
        return [
            new Step(1, 0),
            new Step(-1, 0),
            new Step(0, 1),
            new Step(0, -1),
        ];
    }

    clear() {
        this.visited = false;
        this.options = this._allOptions();
    }

    nextSpot(grid: Spot[][], validCallback: (i: number, j: number) => boolean): Spot | undefined {
        let validOptions: Step[] = [];
        for (let option of this.options) {
            let newX = this.i + option.dx;
            let newY = this.j + option.dy;
            if (validCallback(newX, newY) && !option.tried) {
                validOptions.push(option);
            }
        }
        if (validOptions.length > 0) {
            let index = Math.floor(Math.random() * validOptions.length);
            let step = validOptions[index];
            step.tried = true;
            return grid[this.i + step.dx][this.j + step.dy];
        }
        return undefined;
    }
}
