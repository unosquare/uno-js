import { humanize } from '../lib/humanize';

describe('humanize', function () {
    describe('humanize word', function () {
        it('should return humanized string', function () {
            const result = humanize('HelloWorld!');
            expect(result).toBe('Hello World!');
        });
    });
    describe('humanize lowercase word', function () {
        it('should return humanized string', function () {
            const result = humanize('helloworld!');
            expect(result).toBe('Helloworld!');
        });
    });
});