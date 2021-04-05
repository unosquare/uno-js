import isDate from './isDate';
import isString from './isString';
import toLocalTime from './toLocalTime';

const toDate = (obj: string | Record<string, unknown>): void => {
    Object.keys(obj).forEach((prop) => {
        if (isString(obj[prop]) && isDate(obj[prop])) {
            obj[prop] = toLocalTime(obj[prop]);
        }
        if (typeof obj[prop] === 'object' && obj[prop]) {
            if (obj[prop] instanceof Array) {
                obj[prop].forEach(toDate);
            } else {
                Object.keys(obj[prop]).forEach(() => toDate(obj[prop]));
            }
        }
    });
};

export default toDate;
