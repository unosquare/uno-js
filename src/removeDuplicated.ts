export const removeDuplicated = (array: any[], prop: string): any[] =>
    array.filter((x: any, i: number, arr: any[]) => arr.map((y: any) => y[prop]).indexOf(x[prop]) === i);
