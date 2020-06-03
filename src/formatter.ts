import { toLocalTime } from './toLocalTime';

export enum FormatTypes {
    MONEY = 'money',
    PERCENTAGE = 'percentage',
    DECIMAL_PERCENTAGE = 'decimalPercentage',
    DATE = 'date',
    DATE_LOCAL = 'dateLocal',
    DECIMAL = 'decimal',
    DAYS = 'days',
    MONTHS = 'months',
}

export const formatter = (data: string | number, format: FormatTypes): string => {
    if (!data && format === FormatTypes.MONEY) {
        return '$0.00';
    }
    if (data == null) {
        return 'N/A';
    }
    const stringData = data.toString();
    switch (format) {
        case FormatTypes.MONEY:
            const parsedMoney = parseFloat(stringData);
            if (!parsedMoney) {
                return 'N/A';
            }
            return parsedMoney.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        case FormatTypes.PERCENTAGE:
            return `${Math.round(parseFloat(stringData))}%`;
        case FormatTypes.DECIMAL_PERCENTAGE:
            return `${parseInt(stringData).toFixed(2)}%`;
        case FormatTypes.DATE:
            return toLocalTime(stringData).toLocaleDateString('en-us');
        case FormatTypes.DATE_LOCAL:
            return new Date(stringData).toLocaleDateString('en-us');
        case FormatTypes.DECIMAL:
            const parsedDecimal = parseFloat(stringData);
            if (!parsedDecimal) {
                return 'N/A';
            }
            return parsedDecimal.toFixed(2);
        case FormatTypes.DAYS:
            return `${stringData} days`;
        case FormatTypes.MONTHS:
            return `${stringData} months`;
    }
};
