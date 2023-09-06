import { identity } from './nameof';

export const emptyIfNull = <T, Y>(value: T | null | undefined, func?: (i: T) => Y[]) =>
    value ? (func ?? identity)(value) : [];

export const safeObjectMap = (
    value: Record<string, unknown> | null | undefined,
    callbackFn: (innerValue: Record<string, unknown>) => (value: string, index: number, array: string[]) => any,
) => emptyIfNull(value, (x) => Object.keys(x).map(callbackFn(x)));

export const safeMap = <T>(value: T[] | null | undefined, callbackFn: (value: T, index: number, array: T[]) => any) =>
    emptyIfNull(value, (x) => x.map(callbackFn));
