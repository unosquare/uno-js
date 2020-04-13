import { toLocalTime } from './toLocalTime';

const regex = /^(19[8-9]\d|20\d{2})[-](0[1-9]|1[0-2])[-](0[1-9]|[12]\d|3[01])[T](0\d|1\d|2[0-4])[:]([0-5]\d)[:]([0-5]\d)[.](\d{3})[Z]$/;

export const toDate = (obj: {}): void => {
    Object.keys(obj).map((prop) => {
        if (
            typeof obj[prop] === 'string' &&
            obj[prop].length > 5 &&
            !isNaN(new Date(obj[prop]).getDate()) &&
            new Date(obj[prop]).toISOString().match(regex)
        ) {
            obj[prop] = toLocalTime(obj[prop]);
        }
        if (typeof obj[prop] === 'object') {
            if (obj[prop] instanceof Array) {
                obj[prop].map(toDate);
            } else {
                Object.keys(obj[prop]).map(() => toDate(obj[prop]));
            }
        }
    });
};
