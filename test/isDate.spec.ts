import isDate from '../src/isDate';

describe('isDate', () => {
    it('Return false on wrong string', () => {
        const result = isDate('2020-01');
        expect(result).toBeFalsy();
    });
    it('Return false on number', () => {
        const result = isDate(5);
        expect(result).toBeFalsy();
    });
    it('Return false on boolean', () => {
        const result = isDate(true);
        expect(result).toBeFalsy();
    });
    it('Return true on Date', () => {
        const result = isDate(new Date());
        expect(result).toBeTruthy();
    });
    it('Return true on valid string', () => {
        const result = isDate('2020-10-07T19:25:32.937Z');
        expect(result).toBeTruthy();
    });
});
