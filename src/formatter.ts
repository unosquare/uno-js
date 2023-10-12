import { toLocalTime } from './dateUtils';
import { truncate } from './truncate';

export type FormatTypes = 'money' | 'percentage' | 'date' | 'decimal' | 'number' | 'days' | 'months';

const defaultOptions = { keepFormat: false, decimals: 2, nullValue: 'N/A', ignoreUndefined: false };

const internalFotmatter = (
    stringData: string,
    { keepFormat, decimals, nullValue }: { keepFormat: boolean; decimals: number; nullValue: string },
    format?: FormatTypes,
): string => {
    switch (format) {
        case 'money': {
            const parsedMoney = parseFloat(stringData);
            return !parsedMoney
                ? nullValue
                : new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                  }).format(truncate(parsedMoney, 100000));
        }
        case 'percentage':
            if (decimals === 0) return `${Math.round(parseFloat(stringData))}%`;

            return `${truncate(parseFloat(stringData)).toFixed(decimals)}%`;
        case 'number':
            return `${parseInt(stringData, 10)}`;
        case 'date':
            if (keepFormat) return toLocalTime(stringData).toLocaleDateString('en-us');
            return new Date(stringData).toLocaleDateString('en-us');
        case 'decimal': {
            const parsedDecimal = parseFloat(stringData);
            return !parsedDecimal ? nullValue : parsedDecimal.toFixed(2);
        }
        case 'days':
            return Number(stringData) === 1 ? '1 day' : `${stringData} days`;
        case 'months':
            return Number(stringData) === 1 ? '1 month' : `${stringData} months`;
        default:
            return nullValue;
    }
};

export const formatter = (
    data: string | number | null | undefined,
    format?: FormatTypes,
    options?: { keepFormat?: boolean; decimals?: number; nullValue?: string; ignoreUndefined?: boolean },
): string | undefined => {
    const { keepFormat, decimals, nullValue, ignoreUndefined } = { ...defaultOptions, ...options };
    if (data === undefined && !ignoreUndefined) return undefined;

    if (!data && format === 'money') return '$0.00';

    return data == null ? nullValue : internalFotmatter(data.toString(), { keepFormat, decimals, nullValue }, format);
};
