import { toLocalTime } from '../src/toLocalTime';

const value = {
    x1: '2020-01-21T06:00:00',
    x2: new Date(2020, 1, 21, 6, 0, 0),
};

describe('toDate', () => {
    it('string should return true if Date', () => {
        const date = toLocalTime(value.x1);
        expect(date.constructor === Date && date.getFullYear() === 2020).toBe(true);
    });
    xit('Date should return true if same timezone', () => {
        const date = toLocalTime(value.x2);
        expect(date.getTimezoneOffset() === new Date().getTimezoneOffset()).toBe(true);
    });
});
