import { install } from '../src/install';

const x = [{ date: '2019-01-01' }, { date: '5' }];
//Test started
describe('install', () => {
    install();
    describe('Installed toDate', () => {
        it('should return true if Date', () => {
            x['toDate']();
            expect(x[0].date.constructor === Date && x[1].constructor !== Date).toBe(true);
        });
    });
    describe('Installed humanize', () => {
        it('should return true if humanized', () => {
            expect('thisIsGood'['humanize']()).toBe('This Is Good');
        });
    });
    describe('Multiple install call', () => {
        it('shouldnt throw exception', () => {
            install();
            expect(true).toBe(true);
        });
    });
    describe('Installed validateNotNull', () => {
        it('should return true if validateNotNull', () => {
            expect(x[0]['validateNotNull']()).toBe(true);
        });
    });
});
