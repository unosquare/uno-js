"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function debounce(func, waitMilliseconds = 500) {
    let timeoutId;
    // tslint:disable-next-line: only-arrow-functions
    return function (t, ...args) {
        const context = t;
        const doLater = () => {
            timeoutId = undefined;
            func.apply(context, args);
        };
        if (timeoutId !== undefined) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(doLater, waitMilliseconds);
    };
}
exports.debounce = debounce;
