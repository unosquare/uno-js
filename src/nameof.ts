export const nameof = <T>(name: Extract<keyof T, string>): string => name;

export const selectNumber = <T>(name: Extract<keyof T, string>, data: T[]): number[] =>
    data.map((i) => Number(i[name]));

export const sumBy = <T>(name: Extract<keyof T, string>, data: T[], callBack?: (x: number) => number): number => {
    const innerCallback = callBack || ((x) => x);
    return selectNumber(name, data).reduce((acc, item) => innerCallback(acc + item), 0);
};
