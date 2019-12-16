import { debounce } from '../dist';

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

describe('debounce', () => {
    it('should return array lenght == 1', async () => {
        const result = [];
        const fn = debounce(() => {
            result.push('Hello!');
        }, 150);
        fn();
        await delay(100);
        fn();
        await delay(100);
        fn();
        await delay(300);
        expect(result.length).toBe(1);
    });
});
