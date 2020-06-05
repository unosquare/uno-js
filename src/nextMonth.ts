export function nextMonth(date: Date): Date {
    date.setMonth(date.getMonth() + 2);
    date.setDate(0);
    return date;
}
