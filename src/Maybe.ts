export class Maybe {
    private value;

    constructor(value: any) {
        this.value = value;
    }

    public map(fn: Function): Maybe {
        return new Maybe(this.value !== null && this.value !== undefined ? fn(this.value) : null);
    }

    public getOrDefault(defaultValue: any): any {
        return this.value !== null ? this.value : defaultValue;
    }
}
