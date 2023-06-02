export const getDeltaString = (delta: number | null): 'unchanged' | 'increase' | 'decrease' => {
    if (!delta) return 'unchanged';
    return delta > 0 ? 'increase' : 'decrease';
};

export const getDeltaStringFromValues = (
    current: number | null,
    previous: number | null,
): 'unchanged' | 'increase' | 'decrease' => {
    if (!current || !previous) return 'unchanged';
    return getDeltaString(current - previous);
};

export const calculateDeltaValue = (current: number | null, previous: number | null) => {
    if (!current || !previous) return null;
    return current - previous;
};

export const calculateDelta = (current: number | null, previous: number | null) => {
    const delta = calculateDeltaValue(current, previous);
    return [delta, calculateDeltaPercent(current, previous), getDeltaString(delta)];
};

export const calculateDeltaPercent = (current: number | null, previous: number | null) => {
    if (!current || !previous) return null;
    return ((current - previous) / current) * 100;
};

export const padDecimal = (number: number, digits?: number) =>
    number.toLocaleString('en-US', { minimumFractionDigits: digits || 2, maximumFractionDigits: digits || 2 });
