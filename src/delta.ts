export const getDeltaString = (delta: number): 'unchanged' | 'increase' | 'decrease' => {
    if (delta === 0) return 'unchanged';
    return delta > 0 ? 'increase' : 'decrease';
};

export const calculateDelta = (current: number, previous: number) => {
    const delta = current - previous;
    const deltaPercent = previous ? (delta / previous) * 100 : 0;
    return [delta, deltaPercent, getDeltaString(delta)];
};

export const padDecimal = (number: number, digits?: number) =>
    number.toLocaleString('en-US', { minimumFractionDigits: digits || 2, maximumFractionDigits: digits || 2 });
