import { stringTemplate } from '../src/stringTemplate';

const results = {
    x1: 'lorem@gmail.com',
    x2: 'Mr. Johnson',
    x3: 'Mrs. Johnson',
    x4: 'Johnson',
};

const templates = ['Mr. ', 'Mrs. ', 'Miss '];

describe('stringTemplate', () => {
    it('string should return true if add suffix properly', () => {
        const suffixSample = stringTemplate('@gmail.com', false);
        const suffixResult = suffixSample('lorem');
        expect(suffixResult).toBe(results.x1);
    });
    it('string should return true if add prefix properly', () => {
        const prefixSample = stringTemplate('Mr. ', true);
        const prefixResult = prefixSample('Johnson');
        expect(prefixResult).toBe(results.x2);
    });
    it('string should return true if add prefix properly from templates array', () => {
        const prefixSample = stringTemplate(templates, true);
        const prefixResult = prefixSample('Johnson', 1);
        expect(prefixResult).toBe(results.x3);
    });
    it('string should return true if returns same value', () => {
        const prefixSample = stringTemplate(templates, true);
        const prefixResult = prefixSample('Johnson', 5);
        expect(prefixResult).toBe(results.x4);
    });
});
