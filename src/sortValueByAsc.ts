export const sortValueByAsc = (data: any[], prop?: string, isDate?: boolean) => data.sort((a: any, b: any) => {
    let x = prop ? a[prop] : a;
    let y = prop ? b[prop] : b;

    x = isDate ? new Date(a[prop]) : a[prop];
    y = isDate ? new Date(b[prop]) : b[prop];

    return x > y ? 1 : x < y ? -1 : 0;
});
