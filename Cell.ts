// Cell.ts (Abstract Class)
export abstract class Cell {
    protected input: string | number;

    constructor(input: string | number) {
        this.input = input;
    }

    abstract edit(): void;
    abstract clearContent(): void;
}
