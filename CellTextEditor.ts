// CellTextEditor.ts
import { Cell } from './Cell';

export class CellTextEditor {
    private cell: Cell;

    constructor(cell: Cell) {
        this.cell = cell;
    }

    openEditor(): void {
        // Implementation for opening editor
    }

    closeEditor(): void {
        // Implementation for closing editor
    }

    changeSelectedCell(newCell: Cell): void {
        this.cell = newCell;
    }
}
