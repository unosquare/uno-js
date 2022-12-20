import { nameof, selectNumber, sumBy } from '../src/nameof';

interface People {
    name: string;
    age?: number;
}

describe('nameof', () => {
    it('should return the name of the property', () => {
        const obj = {
            name: 'John',
        };
        const result = nameof<typeof obj>('name');
        expect(result).toBe('name');
    });

    it('should return the name of the typed property', () => {
        const obj: People = {
            name: 'John',
        };
        const result = nameof<People>('name');
        expect(result).toBe('name');
    });
});

describe('selectNumber', () => {
    it('should return an array of numbers', () => {
        const data = [
            {
                name: 'John',
                age: 20,
            },
            { name: 'Jane', age: 30 },
        ];
        const result = selectNumber<People>('age', data);
        expect(result).toEqual([20, 30]);
    });
});

describe('sumBy', () => {
    it('should return the sum of the selected property', () => {
        const data = [
            {
                name: 'John',
                age: 20,
            },
            { name: 'Jane', age: 30 },
        ];
        const result = sumBy<People>('age', data);
        expect(result).toBe(50);
    });

    it('should return the sum of the selected property with a callback', () => {
        const data = [
            {
                name: 'John',
                age: 20,
            },
            { name: 'Jane', age: 30 },
        ];
        const result = sumBy<People>('age', data, (x) => x * 2);
        expect(result).toBe(140);
    });
});
