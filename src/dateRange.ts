const dateOptions: Intl.DateTimeFormatOptions = { month: 'numeric', day: 'numeric', year: 'numeric' };

export const formatDateRange = (start: Date, end: Date) =>
    `[${start.toLocaleDateString('en-US', dateOptions)} - ${end.toLocaleDateString('en-US', dateOptions)}]`;

export type IHasYear = {
    Year: number;
};

export type IHasMonth = {
    Month: number;
};

export type IHasQuarter = {
    Quarter: number;
};

export type IHasWeek = {
    Week: number;
};

export type IHasStartDate = {
    StartDate: Date;
};

export type IHasEndDate = {
    EndDate: Date;
};

export type IYearQuarter = IHasYear & IHasQuarter;

export type IYearMonth = IHasYear & IHasMonth;

export type IYearWeek = IHasYear & IHasWeek;

export type IDateRange = IHasStartDate & IHasEndDate;

export type IYearQuarterDateRange = IYearQuarter & IDateRange;

export type IYearMonthDateRange = IYearMonth & IDateRange;

export type IYearWeekDateRange = IYearWeek & IDateRange;

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
        quarter = quarter ?? YearQuarter.CurrentQuarter;

        const startDate = new Date(year, (quarter - 1) * 3, 1);
        const endDate = new Date(year, quarter * 3, 0);

        super(startDate, endDate);

        this.Year = year;
        this.Quarter = quarter;
    }

    Year: number;

    Quarter: number;

    static get Current(): YearQuarter {
        return new YearQuarter();
    }

    static FromDate(date: Date): YearQuarter {
        return new YearQuarter(date.getFullYear(), Math.floor(date.getMonth() / 3 + 1));
    }

    static get CurrentQuarter(): number {
        return Math.floor(new Date().getMonth() / 3 + 1);
    }

    get IsCurrent(): boolean {
        return this.Year === new Date().getFullYear() && this.Quarter === YearQuarter.CurrentQuarter;
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

    get YearMonths(): YearMonth[] {
        return Array.from({ length: 3 }).map((_, i) => new YearMonth(this.Year, this.Quarter * 3 - 2 + i));
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

    static get Current(): YearMonth {
        return new YearMonth();
    }

    static FromDate(date: Date): YearMonth {
        return new YearMonth(date.getFullYear(), date.getMonth() + 1);
    }

    get IsCurrent(): boolean {
        return this.Year === new Date().getFullYear() && this.Month === new Date().getMonth() + 1;
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

    get YearQuarter(): YearQuarter {
        return YearQuarter.FromDate(this.StartDate);
    }

    toString(): string {
        return `${this.Year}-${this.Month.toString().padStart(2, '0')}`;
    }
}

export const getWeekNumber = (date: Date) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
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

    static get Current(): YearWeek {
        return new YearWeek();
    }

    static FromDate(date: Date): YearWeek {
        return new YearWeek(date.getFullYear(), getWeekNumber(date));
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
