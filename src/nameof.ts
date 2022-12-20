export const nameof = <T>(name: Extract<keyof T, string>): string => name;

export const identity = (x: any) => x;

export const selectNumberByName = <T>(data: T[], name: Extract<keyof T, string>): number[] =>
    data.map((i) => Number(i[name]));

export const selectNumberBy = <T, K extends keyof any>(data: T[], selector: (obj: T) => K): number[] =>
    data.map(selector).map((x) => Number(x));

export const sumByName = <T>(data: T[], name: Extract<keyof T, string>, callBack?: (x: number) => number): number => {
    const innerCallback = callBack || identity;
    return selectNumberByName(data, name).reduce((acc, item) => innerCallback(acc + item), 0);
};

export const sumBy = <T, K extends keyof any>(
    data: T[],
    selector: (obj: T) => K,
    callBack?: (x: number) => number,
): number => {
    const innerCallback = callBack || identity;
    return selectNumberBy(data, selector).reduce((acc, item) => innerCallback(acc + item), 0);
};
