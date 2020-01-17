import { toDate } from '../src/toDate';

const value = {
    x1: '2020-01-21T06:00:00',
    x2: '2020-01-01T00:00:00',
    x3: { x31: '2020-01-05T06:00:00' },
    y1: 3,
    y2: '20200101',
};

describe('toDate', () => {
    toDate(value);
    it('should return true if Date', () =>
        expect(value.x1.constructor === Date && value.x2.constructor === Date).toBe(true));
    it('should return true if children is Date', () => expect(value.x3.x31.constructor === Date).toBe(true));
    it('should return true if not Date', () =>
        expect(value.y1.constructor !== Date && value.y2.constructor !== Date).toBe(true));
});
