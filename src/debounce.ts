// based on https://github.com/chodorowicz/ts-debounce/blob/master/src/index.ts
export type Procedure = (...args: unknown[]) => void;

export function debounce<F extends Procedure>(
	func: F,
	waitMilliseconds = 500,
): F {
	let timeoutId: number | undefined;

	return ((t: unknown, ...args: unknown[]) => {
		const context = t;

		const doLater = (): void => {
			timeoutId = undefined;
			func.apply(context, args);
		};

		if (timeoutId !== undefined) {
			clearTimeout(timeoutId);
		}

		timeoutId = window.setTimeout(doLater, waitMilliseconds);
	}) as F;
}
