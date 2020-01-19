import { truncateText } from '../src/truncateText';

const toTruncate = 'Lorem ipsum dolor sit amet, consectetur ';

describe('truncateText', () => {
    it('should return partial first word', () => {
        const partialWord = truncateText('...', toTruncate, 3);
        expect(partialWord).toBe('Lor...');
    });
    it('should return partial string', () => {
        const partial = truncateText('...', toTruncate, 13);
        expect(partial).toBe('Lorem ipsum...');
    });
    it('should return partial string with final single dot', () => {
        const partial = truncateText('.', toTruncate, 13);
        expect(partial).toBe('Lorem ipsum.');
    });
    it('should return partial string with final single dot using tag', () => {
        const partial = truncateText`${toTruncate}${13}.`;
        expect(partial).toBe('Lorem ipsum.');
    });
    it('should return complex string using tag', () => {
        const partial = truncateText`Desc: ${toTruncate}${13}...`;
        expect(partial).toBe('Desc: Lorem ipsum...');
    });
    it('should return entire string', () => {
        const entire = truncateText('', toTruncate, 100);
        expect(entire).toBe(toTruncate);
    });
});
