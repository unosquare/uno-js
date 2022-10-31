export const truncate = (number: number) => Math[number < 0 ? 'ceil' : 'floor'](number * 100) / 100;

export const truncateToOne = (number: number) => Math[number < 0 ? 'ceil' : 'floor'](number * 10) / 10;

export const truncateToZero = (number: number) => Math[number < 0 ? 'ceil' : 'floor'](number);
