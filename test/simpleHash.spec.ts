import { getSimpleHash } from '../src/simpleHash';

describe('getSimpleHash', () => {
    it('should return a string', () => {
        const result = getSimpleHash('test');
        expect(typeof result).toBe('string');
    });

    it('should return the same hash for the same input', () => {
        const input = { name: 'John', age: 30 };
        const result1 = getSimpleHash(input);
        const result2 = getSimpleHash(input);
        expect(result1).toBe(result2);
    });

    it('should return different hashes for different inputs', () => {
        const input1 = { name: 'John', age: 30 };
        const input2 = { name: 'Jane', age: 25 };
        const result1 = getSimpleHash(input1);
        const result2 = getSimpleHash(input2);
        expect(result1).not.toBe(result2);
    });

    it('should fail if input is undefined', () => {
        expect(() => getSimpleHash(undefined)).toThrowError('Object is undefined');
    });
});
