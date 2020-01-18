import { validateObject } from '../src/validateObject';

const validObject = {
    x: 'Valid',
    y: 0,
    z: true,
};

const invalidObject = {
    x: 'Valid',
    y: null,
    z: true,
};

describe('validateObject', () => {
    it('should return true if valid', () => {
        expect(validateObject(validObject)).toBe(true);
    });
    it('should return false if invalid', () => {
        expect(validateObject(invalidObject)).toBe(false);
    });
    it('should return true if ignore null prop', () => {
        expect(validateObject(invalidObject, ['y'])).toBe(true);
    });
});
