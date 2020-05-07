import { Maybe } from '../src/Maybe';

const item = {
    propString: 'Valid',
    propObject: { objectChild: null },
};

describe('Maybe', () => {
    const validItem = new Maybe(item);
    const invalidItem = new Maybe(null);

    it('should return string "Valid"', () => {
        expect(validItem.map(n => n.propString).getOrDefault('Invalid')).toBe('Valid');
    });

    it('should return "Null"', () => {
        expect(
            invalidItem
                .map(n => n.propObject)
                .map(propObject => propObject.objectChild)
                .getOrDefault('Found null'),
        ).toBe('Found null');
    });

    it('should return false if invalid', () => {
        expect(
            validItem
                .map(n => n.propObject)
                .map(propObject => propObject.objectChild)
                .getOrDefault('Found null'),
        ).toBe('Found null');
    });
});
