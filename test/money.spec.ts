import { isMoneyObject, toMoneyObject } from '../src/money';

describe('isMoneyObject', () => {
    it('should return true for a valid Money object', () => {
        const data = {
            Amount: 100,
            Currency: 'USD',
        };

        const result = isMoneyObject(data);

        expect(result).toBe(true);
    });

    it('should return false for an invalid Money object', () => {
        const data = {
            Amount: '100',
        };

        const result = isMoneyObject(data);

        expect(result).toBe(false);
    });

    it('should return false for a non-Money object', () => {
        const data = 100;

        const result = isMoneyObject(data);

        expect(result).toBe(false);
    });
});

describe('toMoneyObject', () => {
    it('should return a valid Money object', () => {
        const amount = 100;
        const currency = 'USD';

        const result = toMoneyObject(amount, currency);

        expect(result).toEqual({ Amount: amount, Currency: currency });
    });

    it('should return a valid Money object with default currency', () => {
        const amount = 100;

        const result = toMoneyObject(amount);

        expect(result).toEqual({ Amount: amount, Currency: 'USD' });
    });
});