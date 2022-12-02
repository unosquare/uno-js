export const truncate = (number: number) => Math[number < 0 ? 'ceil' : 'floor'](number * 100) / 100;

export const truncateToOne = (number: number) => Math[number < 0 ? 'ceil' : 'floor'](number * 10) / 10;

export const truncateToZero = (number: number) => Math[number < 0 ? 'ceil' : 'floor'](number);

export const roundDown = (value: number) => {
    const rounded = Math.round(value * 100) / 100;
    const truncated = truncate(value);
    return Math.abs(value - rounded) < Math.abs(value - truncated) ? rounded : truncated;
};
