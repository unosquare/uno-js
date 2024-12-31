import validateObject from '../src/validateObject';

const validObject = {
    x: 'Valid',
    y: 1,
    z: true,
};

const invalidObject = {
    x: 'Valid',
    y: null,
    z: true,
};

describe('validateObject', () => {
    const validation = validateObject((prop, item) => {
        if (!item) return false;

        switch (prop) {
            case 'x':
                return item[prop] === 'Valid';
            case 'y':
                return item[prop] !== null && Number(item[prop]) > 0;
            default:
                return true;
        }
    });

    const isValid = validation(validObject);
    const isInvalid = validation(invalidObject);

    it('should return true if valid', () => {
        expect(isValid).toBe(true);
    });
    it('should return false if invalid', () => {
        expect(isInvalid).toBe(false);
    });
});
