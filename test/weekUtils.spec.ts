import {
    getDateOfISOWeek,
    getIsoYear,
    getIsoYearByDate,
    getWeekIsoNumber,
    getWeekIsoOfYear,
    getWeekNumber,
    getWeekOfYear,
} from '../src/weekUtils';

describe('weekUtils', () => {
    describe('getIsoWeekNumber', () => {
        it('should return the week number for a given date', () => {
            const date1 = new Date('2024-01-01');
            expect(getWeekIsoNumber(date1)).toBe(1);

            const date2 = new Date('2025-01-01');
            expect(getWeekIsoNumber(date2)).toBe(1);
        });
    });

    describe('getWeekOfYear', () => {
        it('should return the week number of the current date', () => {
            const currentDate = new Date();
            const currentWeekNumber = getWeekNumber(currentDate);
            expect(getWeekOfYear()).toBe(currentWeekNumber);
        });
    });

    describe('getIsoWeekOfYear', () => {
        it('should return the week number of the current date', () => {
            const currentDate = new Date();
            const currentWeekNumber = getWeekIsoNumber(currentDate);
            expect(getWeekIsoOfYear()).toBe(currentWeekNumber);
        });
    });

    describe('getIsoYear', () => {
        it('should return the Iso year number of the current date', () => {
            const currentDate = new Date();
            const isoYearNumber = getIsoYearByDate(currentDate);
            expect(getIsoYear()).toBe(isoYearNumber);
        });
    });

    describe('getIsoYearByDate', () => {
        it('should return the Iso year number of an specific date', () => {
            const specificDate = new Date(2024, 12, 31);
            const isoCorrectYear = 2025;
            expect(getIsoYearByDate(specificDate)).toBe(isoCorrectYear);
        });
    });

    describe('getDateOfISOWeek', () => {
        it('should return the Monday of week 2 of 2025', () => {
            const result = getDateOfISOWeek(2, 2025);
            expect(result.toISOString().split('T')[0]).toBe('2025-01-06');
        });
    });

    describe('getDateOfISOWeek', () => {
        it('should return the Monday of week 2 of 2024', () => {
            const result = getDateOfISOWeek(2, 2024);
            expect(result.toISOString().split('T')[0]).toBe('2024-01-08');
        });
    });
});
