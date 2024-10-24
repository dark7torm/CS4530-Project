// Spreadsheet.ts
import { Cell } from './Cell';
import { CellTextEditor } from './CellTextEditor';
import { BarGraph } from './BarGraph';
import { PlaintextCell } from './PlaintextCell';

export class Spreadsheet {
    private table: Cell[][];
    private barGraph: BarGraph;
    private textEditor: CellTextEditor;

    constructor(table: Cell[][], barGraph: BarGraph, textEditor: CellTextEditor) {
        this.table = table;
        this.barGraph = barGraph;
        this.textEditor = textEditor;
    }

    edit(): void {
        // Implementation for editing the spreadsheet
    }

    insertRow(): void {
        this.table.push(this.createBlankLine());
    }

    insertColumn(): void {
        
        // Implementation for inserting a column
    }

    deleteRow(): void {
        // Implementation for deleting a row
    }

    deleteColumn(): void {
        // Implementation for deleting a column
    }

    clearContent(): void {
        // Implementation for clearing content
    }

    createBlankLine(): Cell[] {
        const blankLine: Cell[] = [];
        for (let i = 0; i < this.table.length; i++) {
            blankLine.push(new PlaintextCell(""));
        }
        return blankLine

    }
}
