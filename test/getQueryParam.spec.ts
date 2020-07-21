import { getQueryParam } from '../src/getQueryParam';

describe('getQueryParam', () => {
    const singleUrl = 'https://github.com/unosquare/uno-js?id=3';
    const multipleUrl = 'https://github.com/unosquare/uno-js?id=3&user=MarcoLPR';
    const anchorUrl = 'https://github.com/unosquare/uno-js?id=3#Documents';

    it('should return id', () => {
        const id = getQueryParam('id', singleUrl);
        expect(id).toBe('3');
    });
    it('should return id on multiple params', () => {
        const id = getQueryParam('id', multipleUrl);
        expect(id).toBe('3');
    });
    it('should return user on multiple params', () => {
        const id = getQueryParam('user', multipleUrl);
        expect(id).toBe('MarcoLPR');
    });
    it('should return null', () => {
        const id = getQueryParam('user', singleUrl);
        expect(id).toBe(null);
    });
    it('should return id without anchor', () => {
        const id = getQueryParam('id', anchorUrl);
        expect(id).toBe('3');
    });
});
