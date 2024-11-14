export const humanize = (name: string): string =>
	(name || "")
		.replace(/^./, (str: string) => str.toUpperCase())
		.replace(/([a-z])([A-Z])/g, "$1 $2");

export const getQuartile = (data: number[]) => {
	const sortedData = data.filter((x) => x !== 0).sort((a, b) => a - b);
	const firstQuartile = sortedData[Math.floor(sortedData.length / 4)];
	const secondQuartile = sortedData[Math.floor(sortedData.length / 2)];
	const thirdQuartile = sortedData[Math.floor((sortedData.length * 3) / 4)];

	return [firstQuartile, secondQuartile, thirdQuartile];
};
