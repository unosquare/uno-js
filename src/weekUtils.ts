export const getWeekNumber = (date: Date) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date.getTime() - onejan.getTime()) / 86400000 + onejan.getDay() + 1) / 7);
};

export const getWeekOfYear = (): number => getWeekNumber(new Date());

export const getWeekIsoNumber = (date: Date) => {
    const onejan = new Date(date.getFullYear(), 0, 1);
    const daysSinceOneJan = Math.floor((date.getTime() - onejan.getTime()) / 86400000);
    const dayOfWeek = (onejan.getDay() + 6) % 7;
    return Math.floor((daysSinceOneJan + dayOfWeek) / 7) + 1;
};

export const getWeekIsoOfYear = (): number => getWeekIsoNumber(new Date());
