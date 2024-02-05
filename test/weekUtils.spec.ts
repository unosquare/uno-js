import { getWeekNumber, getWeekOfYear, getWeekIsoNumber, getWeekIsoOfYear } from '../src/weekUtils';

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
});
