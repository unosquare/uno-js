export const truncate = (number: number, exp = 100) =>
	Math[number < 0 ? "ceil" : "floor"](number * exp) / exp;

export const truncateToOne = (number: number) => truncate(number, 10);

export const truncateToZero = (number: number) => truncate(number, 1);

export const roundDown = (value: number) => {
	const rounded = Math.round(value * 100) / 100;
	const truncated = truncate(value);
	return Math.abs(value - rounded) < Math.abs(value - truncated)
		? rounded
		: truncated;
};
