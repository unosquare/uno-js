export const getDateUtc = (date: string) => {
    const dateValue = new Date(date);
    return new Date(dateValue.getTime() + dateValue.getTimezoneOffset() * 60000).toString();
};

const dateOptions: any = { month: 'numeric', day: 'numeric' };

const formatWeekDaysRange = (start: Date, end: Date) =>
    `[${start.toLocaleDateString('en-US', dateOptions)} - ${end.toLocaleDateString('en-US', dateOptions)}]`;

export const getWeekDaysRange = (week: number, year: number = null) => {
    year = year || new Date().getFullYear();
    const firstDayOfYear = new Date(year, 0, 1);

    let pivotDay = 1 + (week - 1) * 7 - firstDayOfYear.getDay();

    if (firstDayOfYear.getDay() > 4) pivotDay += 7;

    const weekStart = new Date(year, 0, pivotDay);
    const weekEnd = new Date(year, 0, pivotDay + 6);

    return formatWeekDaysRange(weekStart, weekEnd);
};

export const getWeek = (date: any) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - +onejan) / 86400000 + onejan.getDay() + 1) / 7) - 1;
};

export const getWeekOfYear = (): number => getWeek(new Date());

export const compareDates = (a: string, b: string) => compareRealDates(new Date(a), new Date(b));

export const compareRealDates = (a: Date, b: Date) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
};

export const formatQuarter = (rawQuarter: string) => {
    const [year, quarter] = rawQuarter.split('-');
    return `${quarter}-${year}`;
};
