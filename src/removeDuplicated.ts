export const removeDuplicated = (array: any[], prop: string) => {
    return array.filter((x: any, i: number, arr: any[]) => arr.map(y => y[prop]).indexOf(x[prop]) === i);
};
