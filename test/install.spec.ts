import { install } from '../src/install';

const x = [{ date: '2019-01-01' }, { date: '5' }];

describe('install', () => {
    install();

    describe('Installed toDate', () => {
        it('should return true if Date', () => {
            x['toDate']();
            expect(x[0].date.constructor === Date && x[1].constructor !== Date).toBe(true);
        });
    });

    describe('Installed toLocalTime', () => {
        it('should return true if Date works', () => {
            const date = new Date(2020, 1, 21, 6, 0, 0);
            expect(date['toLocalTime']().constructor === Date && date['toLocalTime']().getFullYear() === 2020).toBeTruthy();
        });
    });

    describe('Installed toLocalTime', () => {
        it('should return true if stringDate works', () => {
            const stringDate = '2020-01-21T06:00:00';
            expect(stringDate['toLocalTime']().constructor === Date && stringDate['toLocalTime']().getFullYear() === 2020).toBeTruthy();
        });
    });

    describe('Installed toTitleCase', () => {
        it('should return title cased string', () => {
            const result = 'hello world!';
            expect(result['toTitleCase']()).toBe('Hello World!');
        });
    });

    describe('Installed truncateText', () => {
        const toTruncate = 'Lorem ipsum dolor sit amet, consectetur ';
        it('should return partial first word', () => {
            expect(toTruncate['truncateText']('...', 3)).toBe('Lor...');
        });
    });

    describe('Installed objectDifference', () => {
        const x = { name: 'Mike', age: '3', gender: 'Male' };
        it('should return false', () => {
            expect(x['objectDifference'](null)).toBeTruthy();
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
    
    describe('Installed removeDuplicated', () => {
        const values = [
            { name: 'Mike', age: '3', gender: 'Male' },
            { name: 'John', age: '5', gender: 'Male' },
        ];

        it('should return array lenght == 1', () => {
            expect(values['removeDuplicated']('gender').length).toBe(1);
        });
    });
});
