const regexISO =
    /^(19[8-9]\d|20\d{2})[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])[T](0\d|1\d|2[0-4])[:]([0-5]\d)[:]([0-5]\d)[.](\d{3})[Z]$/;
const regexDate = /^(19[8-9]\d|20\d{2})[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])/;

const isDate = (value: unknown): boolean => {
    const stringValue = value.toString();
    const isValidDate = !Number.isNaN(new Date(stringValue).getDate());
    const isValidDateString = isValidDate && stringValue.match(regexDate) !== null;
    const isFormatValid = isValidDateString && new Date(stringValue).toISOString().match(regexISO) !== null;
    const isAlreadyDate = value instanceof Date;

    return isFormatValid || isAlreadyDate;
};

export default isDate;
