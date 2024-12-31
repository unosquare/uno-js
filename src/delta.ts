export type DeltaString = 'unchanged' | 'increase' | 'decrease';

export const getDeltaString = (delta: number | null): DeltaString => {
    if (!delta) return 'unchanged';
    return delta > 0 ? 'increase' : 'decrease';
};

export const getDeltaStringFromValues = (current?: number, previous?: number): DeltaString => {
    if (!current || !previous) return 'unchanged';
    return getDeltaString(current - previous);
};

export const calculateDeltaValue = (current?: number, previous?: number) => {
    if (!current || !previous) return null;
    return current - previous;
};

export const calculateDeltaPercent = (current?: number, previous?: number) => {
    if (!current || !previous) return null;
    return ((current - previous) / current) * 100;
};

export const calculateDelta = (current?: number, previous?: number) => {
    const delta = calculateDeltaValue(current, previous);
    return [delta, calculateDeltaPercent(current, previous), getDeltaString(delta)];
};

export const padDecimal = (number: number, digits?: number) =>
    number.toLocaleString('en-US', {
        minimumFractionDigits: digits ?? 2,
        maximumFractionDigits: digits ?? 2,
    });
