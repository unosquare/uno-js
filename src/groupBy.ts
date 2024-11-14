export const groupBy = <T>(
	data: T[],
	prop: Extract<keyof T, string>,
): Record<keyof T, T[]> => {
	const result = {} as Record<keyof T, T[]>;
	for (const item of data) {
		const key = String(item[prop]) as keyof T;
		if (!result[key]) {
			result[key] = [];
		}
		result[key].push(item);
	}
	return result;
};

export const aggregate = <T, U>(
	data: T[],
	prop: Extract<keyof T, string>,
	map: (x: T[]) => U,
): Record<keyof T, U> => {
	const result = {} as Record<keyof T, U>;
	const grouped = groupBy(data, prop);
	for (const key of Object.keys(grouped)) {
		result[key as keyof T] = map(grouped[key as keyof T]);
	}

	return result;
};
