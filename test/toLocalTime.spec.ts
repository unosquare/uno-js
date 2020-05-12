import { toLocalTime } from '../src/toLocalTime';

describe('toDate', () => {
    it('string should return true if Date', () => {
        const date = toLocalTime('2020-01-21T06:00:00');
        expect(date.constructor === Date && date.getFullYear() === 2020).toBe(true);
    });    

    it('Date should return true if date works', () => {
        const date = toLocalTime(new Date(2020, 1, 21, 6, 0, 0));
        expect(date.constructor === Date && date.getFullYear() === 2020).toBe(true);
    });
});
