import { toDate } from './toDate';
import { humanize } from './humanize';
import { toLocalTime } from './toLocalTime';
import { toTitleCase } from './toTitleCase';
import { truncateText } from './truncateText';
import { objectDifference } from './objectDifference';
import { validateNotNull } from './validateNotNull';
import { removeDuplicated } from './removeDuplicated';

export const install = (): void => {
    if (!Array.prototype.hasOwnProperty('toDate')) {
        Object.defineProperty(Array.prototype, 'toDate', {
            value: function () {
                return toDate(this);
            },
        });
    }

    if (!String.prototype.hasOwnProperty('humanize')) {
        Object.defineProperty(String.prototype, 'humanize', {
            value: function () {
                return humanize(this);
            },
        });
    }

    if (!Date.prototype.hasOwnProperty('toLocalTime')) {
        Object.defineProperty(Date.prototype, 'toLocalTime', {
            value: function () {
                return toLocalTime(this);
            },
        });
    }

    if (!String.prototype.hasOwnProperty('toLocalTime')) {
        Object.defineProperty(String.prototype, 'toLocalTime', {
            value: function () {
                return toLocalTime(this);
            },
        });
    }

    if (!String.prototype.hasOwnProperty('toTitleCase')) {
        Object.defineProperty(String.prototype, 'toTitleCase', {
            value: function () {
                return toTitleCase(this);
            },
        });
    }

    if (!String.prototype.hasOwnProperty('truncateText')) {
        Object.defineProperty(String.prototype, 'truncateText', {
            value: function (complement: string, length: number) {
                return truncateText(complement, this, length);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty('objectDifference')) {
        Object.defineProperty(Object.prototype, 'objectDifference', {
            value: function (toCompare: Record<string, unknown>) {
                return objectDifference(this, toCompare);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty('validateNotNull')) {
        Object.defineProperty(Object.prototype, 'validateNotNull', {
            value: function () {
                return validateNotNull(this);
            },
        });
    }

    if (!Array.prototype.hasOwnProperty('removeDuplicated')) {
        Object.defineProperty(Array.prototype, 'removeDuplicated', {
            value: function (prop: string) {
                return removeDuplicated(this, prop);
            },
        });
    }
};
