import { isDate } from './isDate';
import { isString } from './isString';
import { toLocalTime } from './toLocalTime';

export const toDate = (obj: string | Record<string, unknown>): void => {
    Object.keys(obj).map((prop) => {
        if (isString(obj[prop]) && isDate(obj[prop])) {
            obj[prop] = toLocalTime(obj[prop]);
        }
        if (typeof obj[prop] === 'object' && obj[prop]) {
            if (obj[prop] instanceof Array) {
                obj[prop].map(toDate);
            } else {
                Object.keys(obj[prop]).map(() => toDate(obj[prop]));
            }
        }
    });
};
