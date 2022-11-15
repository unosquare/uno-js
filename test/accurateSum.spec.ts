import accurateSum from '../src/accurateSum';

// test accurateSum
describe('accurateSum', () => {
    it('should return the sum of two numbers', () => {
        const result = accurateSum(0.12, 0.22, 1);
        expect(result).toBe(0.34);
    });
});
