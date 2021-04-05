const toLocalTime = (date: string | Date): Date => {
    if (typeof date === 'string' && date.toUpperCase().endsWith('Z')) {
        return new Date(date);
    }
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

export default toLocalTime;
