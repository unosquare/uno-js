import { getMedian } from '../lib/getMedian';

const data = [10, 2, 5];
const dataObject = [{ value: 10 }, { value: 2 }, { value: 5 }];

describe('getMedian', function () {
    describe('getAverage', function () {
        it('should return median', function () {
            const result = getMedian(data);
            expect(result).toBe(5);
        });
    });
    describe('getMedianFromObjectProp', function () {
        it('should return median from object', function () {
            const result = getMedian(dataObject, 'value');
            expect(result).toBe(5);
        });
    });
});