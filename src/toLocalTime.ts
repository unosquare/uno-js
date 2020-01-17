export const toLocalTime = (date: string | Date): Date => {
    const baseDate = date instanceof Date ? date : new Date(date);
    return new Date(
        Date.UTC(
            baseDate.getFullYear(),
            baseDate.getMonth(),
            baseDate.getDate(),
            baseDate.getHours(),
            baseDate.getMinutes(),
            baseDate.getSeconds(),
            baseDate.getMilliseconds(),
        ),
    );
};
