import { removeDuplicated } from '../dist';

const values = [
    { name: 'Mike', age: '3', gender: 'Male' },
    { name: 'John', age: '5', gender: 'Male' },
];

describe('objectDifference', () => {
    it('should return array lenght == 2', () => {
        const result = removeDuplicated(values, 'name');
        expect(result.length).toBe(2);
    });
    it('should return array lenght == 1', () => {
        const result = removeDuplicated(values, 'gender');
        expect(result.length).toBe(1);
    });
});
