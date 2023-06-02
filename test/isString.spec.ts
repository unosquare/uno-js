import { isString, matchText } from '../src/isString';

describe('isString', () => {
    it('Return true on string', () => {
        const result = isString('HelloWorld!');
        expect(result).toBeTruthy();
    });
    it('Return false on number', () => {
        const result = isString(5);
        expect(result).toBeFalsy();
    });
    it('Return false on boolean', () => {
        const result = isString(true);
        expect(result).toBeFalsy();
    });
    it('Return false on object', () => {
        const result = isString({});
        expect(result).toBeFalsy();
    });
    it('Return false on array', () => {
        const result = isString([]);
        expect(result).toBeFalsy();
    });
});

describe('matchText', () => {
    it('Return true on match', () => {
        const result = matchText('HelloWorld!', 'Hello');
        expect(result).toBeTruthy();
    });
});
