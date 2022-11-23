const regexISO = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
const regexDate = /\d{4}-([0]\d|1[0-2])-([0-2]\d|3[01])/;

const isDate = (value: unknown): boolean => {
    const stringValue = value.toString();
    const isValidDate = !Number.isNaN(new Date(stringValue).getDate());
    const isValidDateString = isValidDate && stringValue.match(regexDate) !== null;
    const isFormatValid = isValidDateString && new Date(stringValue).toISOString().match(regexISO) !== null;
    const isAlreadyDate = value instanceof Date;

    return isFormatValid || isAlreadyDate;
};

export default isDate;
