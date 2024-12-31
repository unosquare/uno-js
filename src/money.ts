export type Money = {
    Amount: number;
    Currency: string;
};

export const isMoneyObject = (data: unknown): data is Money => {
    if (typeof data !== 'object' || data === null) return false;
    return 'Amount' in data && 'Currency' in data;
};

export const toMoneyObject = (amount: number, currency = 'USD'): Money => ({
    Amount: amount,
    Currency: currency,
});
