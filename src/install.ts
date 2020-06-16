import * as UnoJs from './';

export const install = (): void => {
    if (!Array.prototype.hasOwnProperty('toDate')) {
        Object.defineProperty(Array.prototype, 'toDate', {
            value: function () {
                return UnoJs.toDate(this);
            },
        });
    }

    if (!String.prototype.hasOwnProperty('humanize')) {
        Object.defineProperty(String.prototype, 'humanize', {
            value: function () {
                return UnoJs.humanize(this);
            },
        });
    }

    if (!Date.prototype.hasOwnProperty('toLocalTime')) {
        Object.defineProperty(Date.prototype, 'toLocalTime', {
            value: function () {
                return UnoJs.toLocalTime(this);
            },
        });
    }

    if (!String.prototype.hasOwnProperty('toLocalTime')) {
        Object.defineProperty(String.prototype, 'toLocalTime', {
            value: function () {
                return UnoJs.toLocalTime(this);
            },
        });
    }

    if (!String.prototype.hasOwnProperty('toTitleCase')) {
        Object.defineProperty(String.prototype, 'toTitleCase', {
            value: function () {
                return UnoJs.toTitleCase(this);
            },
        });
    }

    if (!String.prototype.hasOwnProperty('truncateText')) {
        Object.defineProperty(String.prototype, 'truncateText', {
            value: function (complement: string, length: number) {
                return UnoJs.truncateText(complement, this, length);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty('objectDifference')) {
        Object.defineProperty(Object.prototype, 'objectDifference', {
            value: function (toCompare: Record<string, unknown>) {
                return UnoJs.objectDifference(this, toCompare);
            },
        });
    }

    if (!Object.prototype.hasOwnProperty('validateNotNull')) {
        Object.defineProperty(Object.prototype, 'validateNotNull', {
            value: function () {
                return UnoJs.validateNotNull(this);
            },
        });
    }

    if (!Array.prototype.hasOwnProperty('removeDuplicated')) {
        Object.defineProperty(Array.prototype, 'removeDuplicated', {
            value: function (prop: string) {
                return UnoJs.removeDuplicated(this, prop);
            },
        });
    }
};
