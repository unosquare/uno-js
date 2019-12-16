import { objectDifference } from '../dist';

const x = { name: 'Mike', age: '3', gender: 'Male' };
const y = { name: 'John', age: '5', gender: 'Male' };

describe('objectDifference', () => {
    it('should return x name difference', () => {
        const result = objectDifference(x, y).name;
        expect(result.prev).toBe('Mike');
    });
    it('should return y name difference', () => {
        const result = objectDifference(x, y).name;
        expect(result.new).toBe('John');
    });
    it('should return type difference', () => {
        const result = objectDifference(x, y).name;
        expect(result.type).toBe('name');
    });
    it('should return age difference', () => {
        const result = objectDifference(x, y).age;
        expect(result.type).toBe('age');
    });
    it('should return false', () => {
        const result = objectDifference(x, y).hasOwnProperty('gender');
        expect(result).toBe(false);
    });
});
