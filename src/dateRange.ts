export interface IHasYear {
    Year: number;
}

export interface IHasMonth {
    Month: number;
}

export interface IHasQuarter {
    Quarter: number;
}

export interface IHasWeek {
    Week: number;
}

export interface IHasStartDate {
    StartDate: Date;
}

export interface IHasEndDate {
    EndDate: Date;
}

export interface IYearQuarter extends IHasYear, IHasQuarter {}

export interface IYearMonth extends IHasYear, IHasMonth {}

export interface IYearWeek extends IHasYear, IHasWeek {}

export interface IDateRange extends IHasStartDate, IHasEndDate {}

export interface IYearQuarterDateRange extends IYearQuarter, IDateRange {}

export interface IYearMonthDateRange extends IYearMonth, IDateRange {}

export interface IYearWeekDateRange extends IYearWeek, IDateRange {}

export class DateRange implements IDateRange {
    constructor(startDate: Date, endDate: Date) {
        this.StartDate = startDate;
        this.EndDate = endDate;
    }

    StartDate: Date;
    EndDate: Date;

    get DaysInBetween(): number {
        return Math.round(Math.abs(this.EndDate.getTime() - this.StartDate.getTime()) / (1000 * 3600 * 24));
    }

    get Days(): Date[] {
        const days: Date[] = [];
        const startDate = new Date(this.StartDate);
        const endDate = new Date(this.EndDate);

        while (startDate <= endDate) {
            days.push(new Date(startDate));
            startDate.setDate(startDate.getDate() + 1);
        }

        return days;
    }

    toString(): string {
        return formatDateRange(this.StartDate, this.EndDate);
    }
}

export class YearQuarter extends DateRange implements IYearQuarterDateRange {
    constructor(year?: number, quarter?: number) {
        year = year ?? new Date().getFullYear();
        quarter = quarter ?? Math.ceil(new Date().getMonth() + 1 / 3);

        const startDate = new Date(year, (quarter - 1) * 3, 1);
        const endDate = new Date(year, quarter * 3, 0);

        super(startDate, endDate);

        this.Year = year;
        this.Quarter = quarter;
    }

    Year: number;
    Quarter: number;
    StartDate: Date;
    EndDate: Date;

    static get Current(): YearQuarter {
        return new YearQuarter();
    }

    get Next(): YearQuarter {
        const nextQuarter = this.Quarter + 1;
        const nextYear = this.Year + (nextQuarter > 4 ? 1 : 0);

        return new YearQuarter(nextYear, nextQuarter > 4 ? 1 : nextQuarter);
    }

    get Previous(): YearQuarter {
        const previousQuarter = this.Quarter - 1;
        const previousYear = this.Year - (previousQuarter < 1 ? 1 : 0);

        return new YearQuarter(previousYear, previousQuarter < 1 ? 4 : previousQuarter);
    }

    toString(): string {
        return `${this.Year}-Q${this.Quarter}`;
    }
}

export class YearMonth extends DateRange implements IYearMonthDateRange {
    constructor(year?: number, month?: number) {
        year = year ?? new Date().getFullYear();
        month = month ?? new Date().getMonth() + 1;

        const startDate = new Date(year, month - 1, 1);
        const endDate = new Date(year, month, 0);

        super(startDate, endDate);

        this.Year = year;
        this.Month = month;
    }

    Year: number;
    Month: number;
    StartDate: Date;
    EndDate: Date;

    static get Current(): YearMonth {
        return new YearMonth();
    }

    get Next(): YearMonth {
        const nextMonth = this.Month + 1;
        const nextYear = this.Year + (nextMonth > 12 ? 1 : 0);

        return new YearMonth(nextYear, nextMonth > 12 ? 1 : nextMonth);
    }

    get Previous(): YearMonth {
        const previousMonth = this.Month - 1;
        const previousYear = this.Year - (previousMonth < 1 ? 1 : 0);

        return new YearMonth(previousYear, previousMonth < 1 ? 12 : previousMonth);
    }
    
    toString(): string {
        return `${this.Year}-${this.Month.toString().padStart(2, '0')}`;
    }
}

const dateOptions: any = { month: 'numeric', day: 'numeric', year: 'numeric' };

export const formatDateRange = (start: Date, end: Date) =>
    `[${start.toLocaleDateString('en-US', dateOptions)} - ${end.toLocaleDateString('en-US', dateOptions)}]`;

    
export const getWeekNumber = (date: any) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - +onejan) / 86400000 + onejan.getDay() + 1) / 7);
};

export const getWeekOfYear = (): number => getWeekNumber(new Date());

export class YearWeek extends DateRange implements IYearWeekDateRange {
    constructor(year?: number, week?: number) {
        year = year ?? new Date().getFullYear();
        week = week ?? getWeekOfYear();

        const startDate = new Date(year, 0, 1 + (week - 1) * 7);
        const endDate = new Date(year, 0, 7 + (week - 1) * 7);

        super(startDate, endDate);

        this.Year = year;
        this.Week = week;
    }

    Year: number;
    Week: number;
    StartDate: Date;
    EndDate: Date;

    static get Current(): YearWeek {
        return new YearWeek();
    }

    get Next(): YearWeek {
        const nextWeek = this.Week + 1;
        const nextYear = this.Year + (nextWeek > 52 ? 1 : 0);

        return new YearWeek(nextYear, nextWeek > 52 ? 1 : nextWeek);
    }

    get Previous(): YearWeek {
        const previousWeek = this.Week - 1;
        const previousYear = this.Year - (previousWeek < 1 ? 1 : 0);

        return new YearWeek(previousYear, previousWeek < 1 ? 52 : previousWeek);
    }
    
    toString(): string {
        return `${this.Year}-W${this.Week.toString().padStart(2, '0')}`;
    }
}

