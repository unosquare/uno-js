"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortValueByDesc = (data, prop, isDate) => data.sort((a, b) => {
    let x = prop ? a[prop] : a;
    let y = prop ? b[prop] : b;
    x = isDate ? new Date(a[prop]) : a[prop];
    y = isDate ? new Date(b[prop]) : b[prop];
    return x > y ? -1 : x < y ? 1 : 0;
});
//# sourceMappingURL=sortValueByDesc.js.map