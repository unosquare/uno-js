export function nextMonth(date: Date): Date {
    date.setDate(1);
    date.setMonth(date.getMonth() + 1);
    return date;
}
