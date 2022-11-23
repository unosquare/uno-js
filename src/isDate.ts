const regexISO = /\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z)/;
const regexDate = /\d{4}-(0\d|1[0-2])-([0-2]\d|3[01])/;

const isDate = (value: unknown): boolean => {
    const stringValue = value.toString();
    const isValidDate = !Number.isNaN(new Date(stringValue).getDate());

    if (value instanceof Date && isValidDate) return true;

    const isValidDateString = isValidDate && stringValue.match(regexDate) !== null;
    return isValidDateString && new Date(stringValue).toISOString().match(regexISO) !== null;
};

export default isDate;
