import { toLocalTime } from './dateUtils';
import { isMoneyObject } from './money';
import { truncate } from './truncate';

export type FormatTypes = 'money' | 'percentage' | 'date' | 'decimal' | 'number' | 'days' | 'months';

const defaultLocate = 'en-US';
const defaultCurrency = 'USD';

const defaultOptions = {
    keepFormat: false,
    decimals: 2,
    nullValue: 'N/A',
    ignoreUndefined: false,
    locale: defaultLocate,
    currency: defaultCurrency,
    showCurrency: false,
} as const;

const formatMoney = (
    stringData: string,
    nullValue: string,
    locale: string,
    currency: string,
    showCurrency: boolean,
) => {
    const parsedMoney = Number.parseFloat(stringData);
    const amount = !parsedMoney
        ? nullValue
        : new Intl.NumberFormat(locale, { style: 'currency', currency }).format(truncate(parsedMoney, 100000));

    return showCurrency ? `${amount} ${currency}` : amount;
};

const formatDays = (stringData: string) => (Number(stringData) === 1 ? '1 day' : `${stringData} days`);

const formatMonths = (stringData: string) => (Number(stringData) === 1 ? '1 month' : `${stringData} months`);

const formatPercentage = (stringData: string, decimals: number) => {
    if (decimals === 0) return `${Math.round(Number.parseFloat(stringData))}%`;

    return `${truncate(Number.parseFloat(stringData)).toFixed(decimals)}%`;
};

const internalFotmatter = (
    stringData: string,
    {
        keepFormat,
        decimals,
        nullValue,
        locale,
        currency,
        showCurrency,
    }: {
        keepFormat: boolean;
        decimals: number;
        nullValue: string;
        locale: string;
        currency: string;
        showCurrency: boolean;
    },
    format?: FormatTypes,
): string => {
    switch (format) {
        case 'money':
            return formatMoney(stringData, nullValue, locale, currency, showCurrency);
        case 'percentage':
            return formatPercentage(stringData, decimals);
        case 'number':
            return `${Number.parseInt(stringData, 10)}`;
        case 'date':
            if (keepFormat) return toLocalTime(stringData).toLocaleDateString(locale);
            return new Date(stringData).toLocaleDateString(locale);
        case 'decimal': {
            const parsedDecimal = Number.parseFloat(stringData);
            return !parsedDecimal ? nullValue : parsedDecimal.toFixed(2);
        }
        case 'days':
            return formatDays(stringData);
        case 'months':
            return formatMonths(stringData);
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
        showCurrency?: boolean;
    },
): string | undefined => {
    if (isMoneyObject(data))
        return formatter(data.Amount, 'money', {
            ...defaultOptions,
            ...options,
            currency: data.Currency,
        });

    const { keepFormat, decimals, nullValue, ignoreUndefined, locale, currency, showCurrency } = {
        ...defaultOptions,
        ...options,
    };
    if (data === undefined && !ignoreUndefined) return undefined;

    return data === null
        ? nullValue
        : internalFotmatter(String(data), { keepFormat, decimals, nullValue, locale, currency, showCurrency }, format);
};

export const toMoney = (data: unknown, options?: { locale?: string; currency?: string; showCurrency?: boolean }) => {
    const defaultOptions = {
        ...options,
        nullValue: new Intl.NumberFormat(options?.locale ?? defaultLocate, {
            style: 'currency',
            currency: options?.currency ?? defaultCurrency,
        }).format(0),
    };

    if (isMoneyObject(data))
        return formatter(data.Amount, 'money', {
            ...defaultOptions,
            currency: data.Currency,
        });

    return formatter(data, 'money', defaultOptions);
};

export const toPercentage = (data: unknown, options?: { decimals?: number }) => formatter(data, 'percentage', options);
