import { getQueryParam } from '../src/getQueryParam';

describe('getQueryParam', () => {
    const singleUrl = 'https://github.com/unosquare/uno-js?id=3';
    const multipleUrl = 'https://github.com/unosquare/uno-js?id=3&user=MarcoLPR';
    it('should return id', () => {
        const id = getQueryParam('id', singleUrl);
        expect(id).toBe('3');
    });
    it('should return id on multiple params', () => {
        const id = getQueryParam('id', multipleUrl);
        expect(id).toBe('3');
    });
    it('should return null', () => {
        const id = getQueryParam('user', singleUrl);
        expect(id).toBe(null);
    });
});
