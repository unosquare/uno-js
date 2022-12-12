import trimText from '../src/trimText';

describe('trimText', () => {
    it('should trim text', () => {
        const text = '  text  \r\n   \t text';
        expect(trimText(text)).toBe(' text text');
    });
});
