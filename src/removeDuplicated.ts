export const removeDuplicated = (array: {}[], prop: string): {}[] =>
    array.filter((x: {}, i: number, arr: {}[]) => arr.map((y: {}) => y[prop]).indexOf(x[prop]) === i);
