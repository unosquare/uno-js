import { toDate } from '../src/toDate';

const value = { x: '2020-01-21T06:00:00', y: 3, z: '20200101' };

describe('toDate', () => {
    toDate(value);
    it('should return true if Date', () => expect(value.x.constructor === Date).toBe(true));
    it('should return true if not Date', () =>
        expect(value.y.constructor !== Date && value.z.constructor !== Date).toBe(true));
});
