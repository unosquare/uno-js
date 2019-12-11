import { debounce } from '../lib/debounce';

describe('debounce', () => {
    it('should return array lenght == 1', () => {
        const result = [];
        const fn = debounce(() => {
            result.push('Hello!');
            console.log(result);
        }, 500);
        fn();
        fn();
        fn();
        while (result.length <= 0) { const x = 1; }
        expect(result.length).toBe(1);
    });
});
