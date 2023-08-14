export const nameof = <T>(name: Extract<keyof T, string>): string => name;

export const identity = <T>(x: T) => x;

export const selectNumberByName = <T>(data: T[], name: Extract<keyof T, string>): number[] =>
    data.map((i) => Number(i[name]));

export const selectNumberBy = <T>(data: T[], selector: (obj: T) => number): number[] =>
    data.map(selector).map((x) => Number(x));

export const sumByName = <T>(data: T[], name: Extract<keyof T, string>, callBack?: (x: number) => number): number => {
    const innerCallback = callBack || identity;
    return selectNumberByName(data, name).reduce((acc, item) => innerCallback(acc + item), 0);
};

export const sumBy = <T>(data: T[], selector: (obj: T) => number, callBack?: (x: number) => number): number => {
    const innerCallback = callBack || identity;
    return selectNumberBy(data, selector).reduce((acc, item) => innerCallback(acc + item), 0);
};

export const getAverage = <T>(data: T[], prop: Extract<keyof T, string>) => sumByName<T>(data, prop) / data.length;
