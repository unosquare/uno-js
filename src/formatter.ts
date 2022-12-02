import toLocalTime from './toLocalTime';

export enum FormatTypes {
    MONEY = 'money',
    PERCENTAGE = 'percentage',
    DECIMAL_PERCENTAGE = 'decimalPercentage',
    DATE = 'date',
    DATE_LOCAL = 'dateLocal',
    DECIMAL = 'decimal',
    NUMBER = 'number',
    DAYS = 'days',
    MONTHS = 'months',
}

export const formatter = (data: string | number, format: FormatTypes): string => {
    if (!data && format === FormatTypes.MONEY) return '$0.00';
    if (data == null) return 'N/A';

    const stringData = data.toString();

    switch (format) {
        case FormatTypes.MONEY: {
            const parsedMoney = parseFloat(stringData);
            const truncate = Math[parsedMoney < 0 ? 'ceil' : 'floor'](parsedMoney * 100000) / 100000;
            return !parsedMoney ? 'N/A' : `$${truncate.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}`;
        }
        case FormatTypes.PERCENTAGE:
            return `${Math.round(parseFloat(stringData))}%`;
        case FormatTypes.DECIMAL_PERCENTAGE:
            return `${parseInt(stringData, 10).toFixed(2)}%`;
        case FormatTypes.NUMBER:
            return `${parseInt(stringData, 10)}`;
        case FormatTypes.DATE:
            return toLocalTime(stringData).toLocaleDateString('en-us');
        case FormatTypes.DATE_LOCAL:
            return new Date(stringData).toLocaleDateString('en-us');
        case FormatTypes.DECIMAL: {
            const parsedDecimal = parseFloat(stringData);
            return !parsedDecimal ? 'N/A' : parsedDecimal.toFixed(2);
        }
        case FormatTypes.DAYS:
            return `${stringData} days`;
        case FormatTypes.MONTHS:
            return `${stringData} months`;
        default:
            return 'N/A';
    }
};
