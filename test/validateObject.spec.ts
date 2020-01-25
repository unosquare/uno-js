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
    const valid = validateObject(validObject, (propName, objectToValidate) => {
        switch (propName) {
            case 'x':
                return objectToValidate[propName] == 'Valid';
            case 'y':
                return objectToValidate[propName] !== null;
            default:
                return true;
        }
    });

    const invalid = validateObject(invalidObject, (propName, objectToValidate) => {
        switch (propName) {
            case 'x':
                return objectToValidate[propName] == 'Valid';
            case 'y':
                return objectToValidate[propName] !== null;
        }
    });

    it('should return true if valid', () => {
        expect(valid).toBe(true);
    });
    it('should return false if invalid', () => {
        expect(invalid).toBe(false);
    });
});
