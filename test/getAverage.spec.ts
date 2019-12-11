import { getAverage } from '../lib/getAverage';

const data = [2, 5, 10];
const dataObject = [{ value: 2 }, { value: 5 }, { value: 10 }];

describe('getAverage', function () {
    describe('getAverage', function () {
        it('should return average', function () {
            const result = getAverage(data);
            expect(result).toBe('5.67');
        });
    });
    describe('getAverageCustomFixed', function () {
        it('should return fixed average', function () {
            const result = getAverage(data, 3);
            expect(result).toBe('5.667');
        });
    });
    describe('getAverageFromObjectProp', function () {
        it('should return average from object', function () {
            const result = getAverage(dataObject, 2, 'value');
            expect(result).toBe('5.67');
        });
    });
});