import toLocaleString from '../src/toLocaleString';

const stringDate = '2020-01-21T06:00:00';
const locales = 'en-us';

describe('toDate', () => {
    it('Should return: January 21, 2020', () => {
        const date = toLocaleString(stringDate, locales);
        expect(date).toBe('January 21, 2020');
    });

    it('Should return error', () => {
        const date = toLocaleString('aa****');
        expect(date).toBe('');
    });
});