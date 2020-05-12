import { debounce } from '../src/debounce';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));

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

    it('should return array lenght == 1', async () => {
        const result = [];
        const fn = debounce(() => {
            result.push('Hello!');
        });
        fn();
        await delay(600);
        expect(result.length).toBe(1);
    });
});
