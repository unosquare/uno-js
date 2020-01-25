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
    const valid = validateObject(validObject, (propName, propValue) => {
        switch (propName) {
            case 'x':
                return propValue == 'Valid';
            case 'y':
                return propValue !== null;
            default:
                return true;
        }
    });

    const invalid = validateObject(invalidObject, (propName, propValue, objectToValidate) => {
        switch (propName) {
            case 'x':
                return propValue == 'Valid';
            case 'y':
                return objectToValidate['x'] === 'Invalid' && propValue !== null;
        }
    });

    it('should return true if valid', () => {
        expect(valid).toBe(true);
    });
    it('should return false if invalid', () => {
        expect(invalid).toBe(false);
    });
});
