export class Maybe<T> {
    private value;

    constructor(value: T) {
        this.value = value;
    }

    public map(fn: Function): Maybe<T> {
        return new Maybe(this.value !== null && this.value !== undefined ? fn(this.value) : null);
    }

    public getOrDefault(defaultValue: any): any {
        return this.value !== null ? this.value : defaultValue;
    }
}
