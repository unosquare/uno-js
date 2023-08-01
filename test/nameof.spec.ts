import { nameof, selectNumberByName, sumByName, selectNumberBy, sumBy, getAverage } from '../src/nameof';

type People = {
    name: string;
    age?: number;
};

describe('nameof', () => {
    it('should return the name of the property', () => {
        const obj = {
            name: 'John',
        };
        const result = nameof<typeof obj>('name');
        expect(result).toBe('name');
    });

    it('should return the name of the typed property', () => {
        const result = nameof<People>('name');
        expect(result).toBe('name');
    });
});

describe('selectNumberByName', () => {
    it('should return an array of numbers', () => {
        const data: People[] = [
            {
                name: 'John',
                age: 20,
            },
            { name: 'Jane', age: 30 },
        ];
        const result = selectNumberByName(data, 'age');
        expect(result).toEqual([20, 30]);
    });
});

describe('selectNumberBy', () => {
    it('should return an array of numbers', () => {
        const data = [
            {
                name: 'John',
                age: 20,
            },
            { name: 'Jane', age: 30 },
        ];
        const result = selectNumberBy(data, (x) => x.age);
        expect(result).toEqual([20, 30]);
    });
});

describe('sumByName', () => {
    it('should return the sum of the selected property', () => {
        const data = [
            {
                name: 'John',
                age: 20,
            },
            { name: 'Jane', age: 30 },
        ];
        const result = sumByName<People>(data, 'age');
        expect(result).toBe(50);
    });

    it('should return the sum of the selected property with a callback', () => {
        const data: People[] = [
            {
                name: 'John',
                age: 20,
            },
            { name: 'Jane', age: 30 },
        ];
        const result = sumByName(data, 'age', (x) => x * 2);
        expect(result).toBe(140);
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
        const result = sumBy(data, (x) => x.age);
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
        const result = sumBy(
            data,
            (x) => x.age,
            (x) => x * 2,
        );
        expect(result).toBe(140);
    });
});

describe('getAverage', () => {
    it('should return the average of the selected property', () => {
        const data = [
            {
                name: 'John',
                age: 20,
            },
            { name: 'Jane', age: 30 },
        ];
        const result = getAverage(data, 'age');
        expect(result).toBe(25);
    });
});
