import { toLocalTime } from './dateUtils';
import { truncate } from './truncate';

export type FormatTypes = 'money' | 'percentage' | 'date' | 'decimal' | 'number' | 'days' | 'months';

const defaultOptions = <const>{
    keepFormat: false,
    decimals: 2,
    nullValue: 'N/A',
    ignoreUndefined: false,
    locale: 'en-US',
    currency: 'USD',
};

const internalFotmatter = (
    stringData: string,
    {
        keepFormat,
        decimals,
        nullValue,
        locale,
        currency,
    }: { keepFormat: boolean; decimals: number; nullValue: string; locale: string; currency: string },
    format?: FormatTypes,
): string => {
    switch (format) {
        case 'money': {
            const parsedMoney = parseFloat(stringData);
            return !parsedMoney
                ? nullValue
                : new Intl.NumberFormat(locale, { style: 'currency', currency }).format(truncate(parsedMoney, 100000));
        }
        case 'percentage':
            if (decimals === 0) return `${Math.round(parseFloat(stringData))}%`;

            return `${truncate(parseFloat(stringData)).toFixed(decimals)}%`;
        case 'number':
            return `${parseInt(stringData, 10)}`;
        case 'date':
            if (keepFormat) return toLocalTime(stringData).toLocaleDateString(locale);
            return new Date(stringData).toLocaleDateString(locale);
        case 'decimal': {
            const parsedDecimal = parseFloat(stringData);
            return !parsedDecimal ? nullValue : parsedDecimal.toFixed(2);
        }
        case 'days':
            return Number(stringData) === 1 ? '1 day' : `${stringData} days`;
        case 'months':
            return Number(stringData) === 1 ? '1 month' : `${stringData} months`;
        default:
            return stringData;
    }
};

export const formatter = (
    data: unknown,
    format?: FormatTypes,
    options?: {
        keepFormat?: boolean;
        decimals?: number;
        nullValue?: string;
        ignoreUndefined?: boolean;
        locale?: string;
        currency?: string;
    },
): string | undefined => {
    const { keepFormat, decimals, nullValue, ignoreUndefined, locale, currency } = { ...defaultOptions, ...options };
    if (data === undefined && !ignoreUndefined) return undefined;

    return data == null
        ? nullValue
        : internalFotmatter(String(data), { keepFormat, decimals, nullValue, locale, currency }, format);
};

export const toMoney = (data: unknown, options?: { locale?: string; currency?: string }) =>
    formatter(data, 'money', { ...options, nullValue: '$0.00' });

export const toPercentage = (data: unknown, options?: { decimals?: number }) => formatter(data, 'percentage', options);
