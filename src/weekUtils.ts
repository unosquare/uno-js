export const getStartOfWeek = (date: Date) => {
    const startOfWeek = new Date(date);
    const diffDays = startOfWeek.getDay();
    startOfWeek.setDate(startOfWeek.getDate() - diffDays);
    startOfWeek.setHours(0, 0, 0, 0);
    return startOfWeek;
};

const areDatesInSameWeek = (date1: Date, date2: Date) => {
    const startOfWeek1 = getStartOfWeek(date1);
    const startOfWeek2 = getStartOfWeek(date2);
    return startOfWeek1.getTime() === startOfWeek2.getTime();
};

export const getWeekNumber = (date: Date): number => {
    const jan1st = new Date(date.getFullYear(), 0, 1);
    const daysFromJan1UntilDate = Math.floor((date.getTime() - jan1st.getTime()) / (24 * 60 * 60 * 1000));
    const offsetFromJan1ToSundaySameWeek = -(jan1st.getDay() % 7) % 7;
    const weeksRaw = (daysFromJan1UntilDate + offsetFromJan1ToSundaySameWeek) / 7;

    const weekOfDate =
        (weeksRaw >= 0 ? Math.floor(weeksRaw) : Math.ceil(weeksRaw)) + (daysFromJan1UntilDate !== 365 ? 1 : 0);

    const lastDayOfPreviousYear = new Date(date.getFullYear() - 1, 11, 31);

    if (weekOfDate === 1 && areDatesInSameWeek(lastDayOfPreviousYear, date))
        return getWeekNumber(lastDayOfPreviousYear);

    return weekOfDate;
};

export const getWeekOfYear = (): number => getWeekNumber(new Date());

export const getWeekIsoNumber = (date: Date): number => {
    const dayOfWeek = date.getDay();
    const thursday = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (4 - dayOfWeek));
    return Math.ceil(((thursday.getTime() - new Date(thursday.getFullYear(), 0, 1).getTime()) / 86400000 + 1) / 7);
};

export const getWeekIsoOfYear = (): number => getWeekIsoNumber(new Date());
