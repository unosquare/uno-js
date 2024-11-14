export default (
	array: Record<string, unknown>[],
	prop: string,
): Record<string, unknown>[] =>
	array.filter(
		(x: Record<string, unknown>, i: number, arr: Record<string, unknown>[]) =>
			arr.map((y: Record<string, unknown>) => y[prop]).indexOf(x[prop]) === i,
	);
