import { sortValueByAsc } from './sortValueByAsc';

export const getMedian = (data: any[], field?: string) => {
    const sortedData = sortValueByAsc(data, field);
    const i = Math.ceil(
        (sortedData.sort((a: any, b: any) => (field ? a[field] : a) - (field ? b[field] : b)).length - 1) / 2);
    return field ? data[i][field] : data[i];
};
