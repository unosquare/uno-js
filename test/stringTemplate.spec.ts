import { stringTemplate, defaultStringFilter, sanitizeNumericString, sortComparer, sortNumericString } from '../src/stringTemplate';

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

describe('defaultStringFilter', () => {
    it('should return true if search is in element', () => {
        const search = 'lorem';
        const element = 'lorem ipsum';
        const result = defaultStringFilter(search)(element);
        expect(result).toBe(true);
    });
    it('should return false if search is not in element', () => {
        const search = 'lorem';
        const element = 'ipsum';
        const result = defaultStringFilter(search)(element);
        expect(result).toBe(false);
    });
    it('should return false if element is undefined', () => {
        const search = 'lorem';
        const element = undefined;
        const result = defaultStringFilter(search)(element);
        expect(result).toBe(false);
    });
    it('should return false if element is null', () => {
        const search = 'lorem';
        const element = null;
        const result = defaultStringFilter(search)(element);
        expect(result).toBe(false);
    });
    it('should return false if element is empty string', () => {
        const search = 'lorem';
        const element = '';
        const result = defaultStringFilter(search)(element);
        expect(result).toBe(false);
    });
});

describe('sanitizeNumericString', () => {
    it('should return 123', () => {
        const result = sanitizeNumericString('123');
        expect(result).toBe(123);
    });
    it('should return 123.45', () => {
        const result = sanitizeNumericString('123.45');
        expect(result).toBe(123.45);
    });
    it('should return 123.45', () => { 
        const result = sanitizeNumericString('$123.45');
        expect(result).toBe(123.45);
    });
});

describe('sortComparer', () => {
    it('should return -1', () => {
        const result = sortComparer('a', 'b');
        expect(result).toBe(-1);
    });
    it('should return 1', () => {
        const result = sortComparer('b', 'a');
        expect(result).toBe(1);
    });
    it('should return 0', () => {
        const result = sortComparer('a', 'a');
        expect(result).toBe(0);
    });
});

describe('sortNumericString', () => {
    it('should return -1', () => {
        const result = sortNumericString('a', 'b');
        expect(result).toBe(-1);
    });
    it('should return 1', () => {
        const result = sortNumericString('b', 'a');
        expect(result).toBe(1);
    });
    it('should return 0', () => {
        const result = sortNumericString('a', 'a');
        expect(result).toBe(0);
    });
    it('should return -1 with actual numbers', () => {
        const result = sortNumericString('$100.00', '$150.00');
        expect(result).toBe(-1);
    });
    it('should return 1 with actual numbers', () => {
        const result = sortNumericString('$150.00', '$100.00');
        expect(result).toBe(1);
    });
    it('should return 0 with actual numbers', () => {
        const result = sortNumericString('$100.00', '$100.00');
        expect(result).toBe(0);
    });
});