export function prevMonth(date: Date): Date {
    const month = date.getMonth();
    date.setMonth(month - 1);
    if (date.getMonth() !== month - 1 && (date.getMonth() !== 11 || (month === 11 && date.getDate() === 1)))
        date.setDate(0);
    return date;
}
