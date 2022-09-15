const compareDates = (a: string, b: string) => {
    const aDate = new Date(a);
    const bDate = new Date(b);
    if (aDate < bDate) return -1;
    if (aDate > bDate) return 1;
    return 0;
};

export default compareDates;
