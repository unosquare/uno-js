export function prevMonth(date: Date): Date {
    date.setDate(0);
    return date;
}
