export const nameof = <T>(name: Extract<keyof T, string>): string => name;

export const identity = <T = unknown>(x: T) => x;

export const selectNumberByName = <T = unknown>(data: T[], name: Extract<keyof T, string>): number[] =>
    data.map((i) => Number(i[name]));

export const selectNumberBy = <T, K extends keyof unknown>(data: T[], selector: (obj: T) => K): number[] =>
    data.map(selector).map((x) => Number(x));

export const sumByName = <T>(data: T[], name: Extract<keyof T, string>, callBack?: (x: number) => number): number => {
    const innerCallback = callBack || identity;
    return selectNumberByName(data, name).reduce((acc, item) => innerCallback(acc + item), 0);
};

export const sumBy = <T, K extends keyof unknown>(
    data: T[],
    selector: (obj: T) => K,
    callBack?: (x: number) => number,
): number => {
    const innerCallback = callBack || identity;
    return selectNumberBy(data, selector).reduce((acc, item) => innerCallback(acc + item), 0);
};

export const getAverage = <T>(data: T[], prop: Extract<keyof T, string>) => sumByName<T>(data, prop) / data.length;
