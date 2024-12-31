export const emptyIfNull = <T, Y>(value: T | null | undefined, func?: (i: T) => Y[]): Y[] => {
    if (!value) return [];

    return func ? func(value) : (value as Y[]);
};

export const safeObjectMap = <Y>(
    value: Record<string, unknown> | null | undefined,
    callbackFn: (innerValue: Record<string, unknown>) => (value: string, index: number, array: string[]) => Y,
) => emptyIfNull(value, (x) => Object.keys(x).map(callbackFn(x)));

export const safeMap = <T, Y>(value: T[] | null | undefined, callbackFn: (value: T, index: number, array: T[]) => Y) =>
    emptyIfNull(value, (x) => x.map(callbackFn));
