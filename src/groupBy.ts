export const groupBy = <T>(data: T[], prop: Extract<keyof T, string>): Record<keyof T, T[]> => {
    const result = {} as Record<keyof T, T[]>;
    data.forEach((item) => {
        const key = String(item[prop]) as keyof T;
        if (!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    });
    return result;
};

export const aggregate = <T, U>(data: T[], prop: Extract<keyof T, string>, map: (x: T[]) => U): Record<keyof T, U> => {
    const result = {} as Record<keyof T, U>;
    const grouped = groupBy(data, prop);
    Object.keys(grouped).forEach((key) => {
        result[key as keyof T] = map(grouped[key as keyof T]);
    });

    return result;
};
