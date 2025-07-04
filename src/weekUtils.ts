export const getWeekNumber = (date: Date) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
};

export const getWeekOfYear = (): number => getWeekNumber(new Date());

export const getWeekIsoNumber = (date: Date): number => {
    const dayOfWeek = date.getDay();
    const thursday = new Date(date.getFullYear(), date.getMonth(), date.getDate() + (4 - dayOfWeek));
    return Math.ceil(((thursday.getTime() - new Date(thursday.getFullYear(), 0, 1).getTime()) / 86400000 + 1) / 7);
};

export const getWeekIsoOfYear = (): number => getWeekIsoNumber(new Date());

export const getIsoYearByDate = (date: Date): number => {
    const dayOfWeek = date.getDay() === 0 ? 7 : date.getDay();
    const thursday = new Date(date);
    thursday.setDate(date.getDate() + (4 - dayOfWeek));
    return thursday.getFullYear();
};

export const getIsoYear = (): number => getIsoYearByDate(new Date());

export const getDateOfISOWeek = (week: number, year: number): Date => {
    const isoReferenceDate = new Date(year, 0, 4);
    const firstMondayOfISOWeek = new Date(year, 0, 4 - ((isoReferenceDate.getDay() + 6) % 7));
    return new Date(
        firstMondayOfISOWeek.getFullYear(),
        firstMondayOfISOWeek.getMonth(),
        firstMondayOfISOWeek.getDate() + (week - 1) * 7,
    );
};
