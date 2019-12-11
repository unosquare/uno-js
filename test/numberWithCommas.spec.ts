import { numberWithCommas } from '../lib/numberWithCommas';

describe('numberWithCommas', function () {
    describe('small number', function () {
        it('should return unmodified number', function () {
            const result = numberWithCommas(300);
            expect(result).toBe('300');
        });
    });
    describe('big number', function () {
        it('should return modified number', function () {
            const result = numberWithCommas(3000000);
            expect(result).toBe('3,000,000');
        });
    });
});