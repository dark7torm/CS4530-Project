// BarGraph.ts
import { Cell } from './Cell';

export class BarGraph {
    private cells: Cell[][];
    private swappedXY: boolean;
    private useRowOneAsHeader: boolean;

    constructor(cells: Cell[][]) {
        this.cells = cells;
        this.swappedXY = false;
        this.useRowOneAsHeader = false;
    }

    edit(): void {
        // Implementation for editing
    }

    display(): void {
        // Implementation for displaying the bar graph
    }
}
