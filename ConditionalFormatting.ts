// ConditionalFormatting.ts

export class ConditionalFormatting {
    private condition: Condition;
    private conditionalValue: string | number;

    constructor(condition: Condition, conditionalValue: string | number) {
        this.condition = condition;
        this.conditionalValue = conditionalValue;
    }

    input(value: string | number): void {
        // Implementation for input
    }

    changeTextColor(color: string): void {
        // Implementation for changing text color
    }

    changeBackgroundColor(color: string): void {
        // Implementation for changing background color
    }
}

// Enum-like object for Condition
export enum Condition {
    GREATER_THAN = ">",
    LESS_THAN = "<",
    EQUAL = "="
}
