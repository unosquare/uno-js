import toDate from './toDate';
import humanize from './humanize';
import toLocalTime from './toLocalTime';
import toTitleCase from './toTitleCase';
import truncateText from './truncateText';
import objectDifference from './objectDifference';
import validateNotNull from './validateNotNull';
import removeDuplicated from './removeDuplicated';

const install = (): void => {
    if (!Object.prototype.hasOwnProperty.call(Array, 'toDate')) {
        Object.defineProperty(Array.prototype, 'toDate', {
            value() {
                return toDate(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(String, 'humanize')) {
        Object.defineProperty(String.prototype, 'humanize', {
            value() {
                return humanize(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(Date, 'toLocalTime')) {
        Object.defineProperty(Date.prototype, 'toLocalTime', {
            value() {
                return toLocalTime(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(String, 'toLocalTime')) {
        Object.defineProperty(String.prototype, 'toLocalTime', {
            value() {
                return toLocalTime(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(String, 'toTitleCase')) {
        Object.defineProperty(String.prototype, 'toTitleCase', {
            value() {
                return toTitleCase(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(String, 'truncateText')) {
        Object.defineProperty(String.prototype, 'truncateText', {
            value(complement: string, length: number) {
                return truncateText(complement, this, length);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(Object, 'objectDifference')) {
        Object.defineProperty(Object.prototype, 'objectDifference', {
            value(toCompare: Record<string, unknown>) {
                return objectDifference(this, toCompare);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(Object, 'validateNotNull')) {
        Object.defineProperty(Object.prototype, 'validateNotNull', {
            value() {
                return validateNotNull(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(Array, 'removeDuplicated')) {
        Object.defineProperty(Array.prototype, 'removeDuplicated', {
            value(prop: string) {
                return removeDuplicated(this, prop);
            },
        });
    }
};

export default install;
