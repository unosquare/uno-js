import { toLocalTime } from './dateUtils';
import { truncate } from './truncate';

export enum FormatTypes {
    MONEY = 'money',
    PERCENTAGE = 'percentage',
    DATE = 'date',
    DECIMAL = 'decimal',
    NUMBER = 'number',
    DAYS = 'days',
    MONTHS = 'months',
}

const defaultOptions = { keepFormat: false, decimals: 2, nullValue: 'N/A' };

export const formatter = (
    data: string | number | null,
    format: FormatTypes,
    options?: { keepFormat?: boolean; decimals?: number; nullValue?: string },
): string => {
    const { keepFormat, decimals, nullValue } = { ...defaultOptions, ...options };

    if (!data && format === FormatTypes.MONEY) return '$0.00';
    if (data == null) return nullValue;

    const stringData = data.toString();

    switch (format) {
        case FormatTypes.MONEY: {
            const parsedMoney = parseFloat(stringData);
            return !parsedMoney
                ? nullValue
                : new Intl.NumberFormat('en-US', {
                      style: 'currency',
                      currency: 'USD',
                  }).format(truncate(parsedMoney, 100000));
        }
        case FormatTypes.PERCENTAGE:
            if (decimals === 0) return `${Math.round(parseFloat(stringData))}%`;

            return `${truncate(parseFloat(stringData)).toFixed(decimals)}%`;
        case FormatTypes.NUMBER:
            return `${parseInt(stringData, 10)}`;
        case FormatTypes.DATE:
            if (keepFormat) return toLocalTime(stringData).toLocaleDateString('en-us');
            return new Date(stringData).toLocaleDateString('en-us');
        case FormatTypes.DECIMAL: {
            const parsedDecimal = parseFloat(stringData);
            return !parsedDecimal ? nullValue : parsedDecimal.toFixed(2);
        }
        case FormatTypes.DAYS:
            return Number(stringData) === 1 ? '1 day' : `${stringData} days`;
        case FormatTypes.MONTHS:
            return Number(stringData) === 1 ? '1 month' : `${stringData} months`;
        default:
            return nullValue;
    }
};
