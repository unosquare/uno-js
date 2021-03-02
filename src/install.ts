import { toDate } from './toDate';
import { humanize } from './humanize';
import { toLocalTime } from './toLocalTime';
import { toTitleCase } from './toTitleCase';
import { truncateText } from './truncateText';
import { objectDifference } from './objectDifference';
import { validateNotNull } from './validateNotNull';
import { removeDuplicated } from './removeDuplicated';

export const install = (): void => {
    if (!Object.prototype.hasOwnProperty.call(Array, 'toDate')) {
        Object.defineProperty(Array.prototype, 'toDate', {
            value: function () {
                return toDate(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(String, 'humanize')) {
        Object.defineProperty(String.prototype, 'humanize', {
            value: function () {
                return humanize(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(Date, 'toLocalTime')) {
        Object.defineProperty(Date.prototype, 'toLocalTime', {
            value: function () {
                return toLocalTime(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(String, 'toLocalTime')) {
        Object.defineProperty(String.prototype, 'toLocalTime', {
            value: function () {
                return toLocalTime(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(String, 'toTitleCase')) {
        Object.defineProperty(String.prototype, 'toTitleCase', {
            value: function () {
                return toTitleCase(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(String, 'truncateText')) {
        Object.defineProperty(String.prototype, 'truncateText', {
            value: function (complement: string, length: number) {
                return truncateText(complement, this, length);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(Object, 'objectDifference')) {
        Object.defineProperty(Object.prototype, 'objectDifference', {
            value: function (toCompare: Record<string, unknown>) {
                return objectDifference(this, toCompare);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(Object, 'validateNotNull')) {
        Object.defineProperty(Object.prototype, 'validateNotNull', {
            value: function () {
                return validateNotNull(this);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty.call(Array, 'removeDuplicated')) {
        Object.defineProperty(Array.prototype, 'removeDuplicated', {
            value: function (prop: string) {
                return removeDuplicated(this, prop);
            },
        });
    }
};
