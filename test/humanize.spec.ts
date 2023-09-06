import {humanize, getQuartile} from '../src/humanize';

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

    describe('humanize lowercase word', () => {
        it('should return empty string', () => {
            const result = humanize('');
            expect(result).toBe('');
        });
    });
});

describe('getQuartile', () => {
    describe('should return quartile from data', () => {
        it('should return quartile', () => {
            const data = [1, 2, 3, 4, 5, 6, 7, 8];
            const result = getQuartile(data);
            expect(result).toEqual([3,5,7]);
        });
    });
});