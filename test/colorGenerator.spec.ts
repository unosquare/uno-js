import { colorGenerator } from '../lib/colorGenerator';

describe('colorGenerator', () => {
    it('should return an array of rgb colors', () => {
        const result = colorGenerator([0, 0, 0], [90, 60, 30], 3)[1];
        expect(result).toBe('rgba(45,30,15, 1)');
    });
});
