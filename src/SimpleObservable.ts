export default class {
	private readonly observers: ((change?: string) => void)[] = [];

	public subscribe(observer: (change?: string) => void): () => void {
		this.observers.push(observer);

		return (): void => {
			const index = this.observers.indexOf(observer);
			this.observers.splice(index, 1);
		};
	}

	public inform(change?: string): void {
		for (const observer of this.observers) {
			observer(change);
		}
	}
}
