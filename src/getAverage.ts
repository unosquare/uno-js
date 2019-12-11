export const getAverage = (data: any[], fixed?: number, field?: string) => {
    let length = data.length;
    let value = 0;
    data.map((x: any) => {
        if (isNaN(field ? x[field] : x)) {
            length--;
            return;
        }
        value += field ? x[field] : x;
    });
    return (value / length).toFixed(fixed || 2);
};
