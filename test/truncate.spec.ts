import { truncate, roundDown, truncateToOne, truncateToZero } from '../src/truncate';

describe('truncate', () => {
    it('should return 1.23', () => {
        const result = truncate(1.23456789);
        expect(result).toBe(1.23);
    });
    it('should return 1.234', () => {
        const result = truncate(1.23456789, 1000);
        expect(result).toBe(1.234);
    });
});

describe('truncateToOne', () => {
    it('should return 1.2', () => {
        const result = truncateToOne(1.23456789);
        expect(result).toBe(1.2);
    });
});

describe('truncateToZero', () => {
    it('should return 1', () => {
        const result = truncateToZero(1.23456789);
        expect(result).toBe(1);
    });
});

describe('roundDown', () => {
    it('should return 1.23', () => {
        const result = roundDown(1.23456789);
        expect(result).toBe(1.23);
    });

    it('should return 1.24', () => {
        const result = roundDown(1.23999999);
        expect(result).toBe(1.24);
    });
});
