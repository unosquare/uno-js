import { DateRange, YearMonth, YearQuarter, YearWeek, YearWeekIso } from '../src/dateRange';
import { getIsoYearByDate, getWeekIsoNumber, getWeekNumber } from '../src/weekUtils';

describe('YearQuarter', () => {
    it('should contains year and quarter', () => {
        const yearQuarter = new YearQuarter(2019, 1);
        expect(yearQuarter.Year).toBe(2019);
        expect(yearQuarter.Quarter).toBe(1);
    });

    it('should contains start date and end date', () => {
        const yearQuarter = new YearQuarter(2019, 1);
        expect(yearQuarter.StartDate.getFullYear()).toBe(2019);
        expect(yearQuarter.StartDate.getMonth()).toBe(0);
        expect(yearQuarter.StartDate.getDate()).toBe(1);
        expect(yearQuarter.EndDate.getFullYear()).toBe(2019);
        expect(yearQuarter.EndDate.getMonth()).toBe(2);
        expect(yearQuarter.EndDate.getDate()).toBe(31);
    });

    it('should contains current year and quarter', () => {
        const yearQuarter = YearQuarter.Current;
        expect(yearQuarter.Year).toBe(new Date().getFullYear());
        expect(yearQuarter.Quarter).toBe(Math.floor(new Date().getMonth() / 3 + 1));
    });

    it('should contains next year and quarter', () => {
        const yearQuarter = YearQuarter.Current.Next;
        const current = YearQuarter.Current;
        const nextQuarter = current.Quarter + 1;
        const nextYear = current.Year + (nextQuarter > 4 ? 1 : 0);

        expect(yearQuarter.Year).toBe(nextYear);
        expect(yearQuarter.Quarter).toBe(nextQuarter > 4 ? 1 : nextQuarter);
    });

    it('should contains previous year and quarter', () => {
        const yearQuarter = YearQuarter.Current.Previous;
        const current = YearQuarter.Current;
        const previousQuarter = current.Quarter - 1;
        const previousYear = current.Year - (previousQuarter < 1 ? 1 : 0);

        expect(yearQuarter.Year).toBe(previousYear);
        expect(yearQuarter.Quarter).toBe(previousQuarter < 1 ? 4 : previousQuarter);
    });

    it('should contains string representation', () => {
        const yearQuarter = new YearQuarter(2019, 1);
        expect(yearQuarter.toString()).toBe('2019-Q1');
    });

    it('should contains current year and quarter from date', () => {
        const yearQuarter = YearQuarter.FromDate(new Date());
        expect(yearQuarter.Year).toBe(new Date().getFullYear());
        expect(yearQuarter.Quarter).toBe(Math.floor(new Date().getMonth() / 3 + 1));
    });

    it('should contains current year and quarter from string', () => {
        const yearQuarter = YearQuarter.FromString('2019-Q1');
        expect(yearQuarter.Year).toBe(2019);
        expect(yearQuarter.Quarter).toBe(1);
    });

    it('should contains months', () => {
        const yearQuarter = new YearQuarter(2019, 1);
        expect(yearQuarter.YearMonths.length).toBe(3);
        expect(yearQuarter.YearMonths[0].Month).toBe(1);
        expect(yearQuarter.YearMonths[1].Month).toBe(2);
        expect(yearQuarter.YearMonths[2].Month).toBe(3);
    });
});

describe('YearMonth', () => {
    it('should contains year and month', () => {
        const yearMonth = new YearMonth(2019, 1);
        expect(yearMonth.Year).toBe(2019);
        expect(yearMonth.Month).toBe(1);
    });

    it('should contains start date and end date', () => {
        const yearMonth = new YearMonth(2019, 1);
        expect(yearMonth.StartDate.getFullYear()).toBe(2019);
        expect(yearMonth.StartDate.getMonth()).toBe(0);
        expect(yearMonth.StartDate.getDate()).toBe(1);
        expect(yearMonth.EndDate.getFullYear()).toBe(2019);
        expect(yearMonth.EndDate.getMonth()).toBe(0);
        expect(yearMonth.EndDate.getDate()).toBe(31);
    });

    it('should contains current year and month', () => {
        const yearMonth = YearMonth.Current;
        expect(yearMonth.Year).toBe(new Date().getFullYear());
        expect(yearMonth.Month).toBe(new Date().getMonth() + 1);
    });

    it('should contains days', () => {
        const yearMonth = new YearMonth(2019, 1);
        expect(yearMonth.Days.length).toBe(31);
        expect(yearMonth.Days[0].getFullYear()).toBe(2019);
        expect(yearMonth.Days[0].getMonth()).toBe(0);
        expect(yearMonth.Days[0].getDate()).toBe(1);
        expect(yearMonth.Days[30].getFullYear()).toBe(2019);
        expect(yearMonth.Days[30].getMonth()).toBe(0);
        expect(yearMonth.Days[30].getDate()).toBe(31);
    });

    it('should contains next year and month', () => {
        const yearMonth = YearMonth.Current.Next;
        const current = YearMonth.Current;
        const nextMonth = current.Month + 1;
        const nextYear = current.Year + (nextMonth > 12 ? 1 : 0);

        expect(yearMonth.Year).toBe(nextYear);
        expect(yearMonth.Month).toBe(nextMonth > 12 ? 1 : nextMonth);
    });

    it('should contains previous year and month', () => {
        const yearMonth = YearMonth.Current.Previous;
        const current = YearMonth.Current;
        const previousMonth = current.Month - 1;
        const previousYear = current.Year - (previousMonth < 1 ? 1 : 0);

        expect(yearMonth.Year).toBe(previousYear);
        expect(yearMonth.Month).toBe(previousMonth < 1 ? 12 : previousMonth);
    });

    it('should contains string representation', () => {
        const yearMonth = new YearMonth(2019, 1);
        expect(yearMonth.toString()).toBe('2019-01');
    });

    it('should contains current year and month from date', () => {
        const yearMonth = YearMonth.FromDate(new Date());
        expect(yearMonth.Year).toBe(new Date().getFullYear());
        expect(yearMonth.Month).toBe(new Date().getMonth() + 1);
    });

    it('should contains current year and month from string', () => {
        const yearMonth = YearMonth.FromString('2019-01');
        expect(yearMonth.Year).toBe(2019);
        expect(yearMonth.Month).toBe(1);
    });

    it('should contains a YearQuarter', () => {
        const yearMonth = new YearMonth(2019, 1);
        expect(yearMonth.YearQuarter.Year).toBe(2019);
        expect(yearMonth.YearQuarter.Quarter).toBe(1);
    });
});

describe('DateRange', () => {
    it('should contains start date and end date', () => {
        const startDate = new Date(2019, 0, 1);
        const endDate = new Date(2019, 0, 2);
        const dateRange = new DateRange(startDate, endDate);
        expect(dateRange.StartDate).toBe(startDate);
        expect(dateRange.EndDate).toBe(endDate);
    });

    it('should contains days in between', () => {
        const startDate = new Date(2019, 0, 1);
        const endDate = new Date(2019, 0, 2);
        const dateRange = new DateRange(startDate, endDate);
        expect(dateRange.DaysInBetween).toBe(1);
    });

    it('should contains days', () => {
        const startDate = new Date(2019, 0, 1);
        const endDate = new Date(2019, 0, 2);
        const dateRange = new DateRange(startDate, endDate);
        expect(dateRange.Days.length).toBe(2);
        expect(dateRange.Days[0].getTime()).toBe(startDate.getTime());
        expect(dateRange.Days[1].getTime()).toBe(endDate.getTime());
    });

    it('should contains string representation', () => {
        const startDate = new Date(2019, 0, 1);
        const endDate = new Date(2019, 0, 2);
        const dateRange = new DateRange(startDate, endDate);
        expect(dateRange.toString()).toBe('[1/1/2019 - 1/2/2019]');
    });
});

describe('YearWeek', () => {
    it('should contains year and week', () => {
        const yearWeek = new YearWeek(2019, 1);
        expect(yearWeek.Year).toBe(2019);
        expect(yearWeek.Week).toBe(1);
    });

    it('should contains start date and end date', () => {
        const yearWeek = new YearWeek(2023, 1);
        expect(yearWeek.StartDate.getFullYear()).toBe(2023);
        expect(yearWeek.StartDate.getMonth()).toBe(0);
        expect(yearWeek.StartDate.getDate()).toBe(1);
        expect(yearWeek.EndDate.getFullYear()).toBe(2023);
        expect(yearWeek.EndDate.getMonth()).toBe(0);
        expect(yearWeek.EndDate.getDate()).toBe(7);
    });

    it('should contains current year and week', () => {
        const yearWeek = YearWeek.Current;
        expect(yearWeek.Year).toBe(new Date().getFullYear());
        expect(yearWeek.Week).toBe(getWeekNumber(new Date()));
    });

    it('should contains next year and week', () => {
        const yearWeek = YearWeek.Current.Next;
        const current = YearWeek.Current;
        const nextWeek = current.Week + 1;
        const nextYear = current.Year + (nextWeek > 52 ? 1 : 0);

        expect(yearWeek.Year).toBe(nextYear);
        expect(yearWeek.Week).toBe(nextWeek > 52 ? 1 : nextWeek);
    });

    it('should contains previous year and week', () => {
        const yearWeek = YearWeek.Current.Previous;
        const current = YearWeek.Current;
        const previousWeek = current.Week - 1;
        const previousYear = current.Year - (previousWeek < 1 ? 1 : 0);

        expect(yearWeek.Year).toBe(previousYear);
        expect(yearWeek.Week).toBe(previousWeek < 1 ? 52 : previousWeek);
    });

    it('should contains string representation', () => {
        const yearWeek = new YearWeek(2019, 1);
        expect(yearWeek.toString()).toBe('2019-W01');
    });

    it('should contains current year and week from date', () => {
        const yearWeek = YearWeek.FromDate(new Date());
        expect(yearWeek.Year).toBe(new Date().getFullYear());
        expect(yearWeek.Week).toBe(getWeekNumber(new Date()));
    });

    it('should contains current year and week from string', () => {
        const yearWeek = YearWeek.FromString('2019-W01');
        expect(yearWeek.Year).toBe(2019);
        expect(yearWeek.Week).toBe(1);
    });
});

describe('YearWeekIso', () => {
    it('should contains year and week', () => {
        const yearWeekIso = new YearWeekIso(2019, 1);
        expect(yearWeekIso.Year).toBe(2019);
        expect(yearWeekIso.Week).toBe(1);
    });

    it('should contains start date and end date', () => {
        const yearWeekIso = new YearWeek(2023, 1);
        expect(yearWeekIso.StartDate.getFullYear()).toBe(2023);
        expect(yearWeekIso.StartDate.getMonth()).toBe(0);
        expect(yearWeekIso.StartDate.getDate()).toBe(1);
        expect(yearWeekIso.EndDate.getFullYear()).toBe(2023);
        expect(yearWeekIso.EndDate.getMonth()).toBe(0);
        expect(yearWeekIso.EndDate.getDate()).toBe(7);
    });

    it('should contains current year and week', () => {
        const yearWeekIso = YearWeekIso.Current;
        expect(yearWeekIso.Year).toBe(getIsoYearByDate(new Date()));
        expect(yearWeekIso.Week).toBe(getWeekIsoNumber(new Date()));
    });

    it('should contains next year and week', () => {
        const yearWeekIso = YearWeekIso.Current.Next;
        const current = YearWeekIso.Current;
        const nextWeek = current.Week + 1;
        const nextYear = current.Year + (nextWeek > 52 ? 1 : 0);

        expect(yearWeekIso.Year).toBe(nextYear);
        expect(yearWeekIso.Week).toBe(nextWeek > 52 ? 1 : nextWeek);
    });

    it('should contains previous year and week', () => {
        const yearWeekIso = YearWeekIso.Current.Previous;
        const current = YearWeekIso.Current;
        const previousWeek = current.Week - 1;
        const previousYear = current.Year - (previousWeek < 1 ? 1 : 0);

        expect(yearWeekIso.Year).toBe(previousYear);
        expect(yearWeekIso.Week).toBe(previousWeek < 1 ? 52 : previousWeek);
    });

    it('should contains string representation', () => {
        const yearWeekIso = new YearWeek(2019, 1);
        expect(yearWeekIso.toString()).toBe('2019-W01');
    });

    it('should contains current year and week from date', () => {
        const yearWeekIso = YearWeekIso.FromDate(new Date());
        expect(yearWeekIso.Year).toBe(new Date().getFullYear());
        expect(yearWeekIso.Week).toBe(getWeekIsoNumber(new Date()));
    });

    it('should contains current year and week from string', () => {
        const yearWeekIso = YearWeekIso.FromString('2019-W01');
        expect(yearWeekIso.Year).toBe(2019);
        expect(yearWeekIso.Week).toBe(1);
    });

    it('Should calculate correctly the date range for week 2 of 2025', () => {
        const week = new YearWeekIso(2025, 2);
        expect(week.StartDate.toISOString().split('T')[0]).toBe('2025-01-06');
        expect(week.EndDate.toISOString().split('T')[0]).toBe('2025-01-12');
    });

    it('Should calculate correctly the date range for week 2 of 2024', () => {
        const week = new YearWeekIso(2024, 2);
        expect(week.StartDate.toISOString().split('T')[0]).toBe('2024-01-08');
        expect(week.EndDate.toISOString().split('T')[0]).toBe('2024-01-14');
    });
});
