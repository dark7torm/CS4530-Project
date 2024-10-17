// PlaintextCell.ts
import { Cell } from './Cell';

export class PlaintextCell extends Cell {
    private text: string;

    constructor(text: string) {
        super(text);
        this.text = text;
    }

    edit(): void {
        // Implementation for editing
    }

    clearContent(): void {
        // Implementation for clearing content
    }
}
