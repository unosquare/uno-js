class Maybe<T> {
    private value: T;

    constructor(value: T) {
        this.value = value;
    }

    public map(fn: (value: T) => T): Maybe<T> {
        return new Maybe(this.value !== null && this.value !== undefined ? fn(this.value) : null);
    }

    public getOrDefault(defaultValue?: T): T {
        return this.value !== null ? this.value : defaultValue;
    }
}

export default Maybe;
