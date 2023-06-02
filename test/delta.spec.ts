import { calculateDelta, padDecimal } from '../src/delta';

describe('calculateDelta', () => {
    it('should return delta, deltaPercent, and deltaString', () => {
        const [delta, deltaPercent, deltaString] = calculateDelta(10, 5);
        expect(delta).toBe(5);
        expect(deltaPercent).toBe(100);
        expect(deltaString).toBe('increase');
    });
    it('should return delta, deltaPercent, and deltaString', () => {
        const [delta, deltaPercent, deltaString] = calculateDelta(5, 10);
        expect(delta).toBe(-5);
        expect(deltaPercent).toBe(-50);
        expect(deltaString).toBe('decrease');
    });
    it('should return delta, deltaPercent, and deltaString', () => {
        const [delta, deltaPercent, deltaString] = calculateDelta(5, 5);
        expect(delta).toBe(0);
        expect(deltaPercent).toBe(0);
        expect(deltaString).toBe('unchanged');
    });
}  );

describe('padDecimal', () => {
    it('should return a string with two decimal digits', () => {
        const padded = padDecimal(10.1234);
        expect(padded).toBe('10.12');
    });
    it('should return a string with two decimal digits', () => {
        const padded = padDecimal(10.1);
        expect(padded).toBe('10.10');
    });
    it('should return a string with two decimal digits', () => {
        const padded = padDecimal(10);
        expect(padded).toBe('10.00');
    });
});