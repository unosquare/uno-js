import { humanize } from '../src/humanize';

describe('humanize', () => {
    describe('humanize word', () => {
        it('should return humanized string', () => {
            const result = humanize('HelloWorld!');
            expect(result).toBe('Hello World!');
        });
    });
    describe('humanize lowercase word', () => {
        it('should return humanized string', () => {
            const result = humanize('helloworld!');
            expect(result).toBe('Helloworld!');
        });
    });
});
