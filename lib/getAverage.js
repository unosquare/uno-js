"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverage = (data, fixed, field) => {
    let length = data.length;
    let value = 0;
    data.map((x) => {
        if (isNaN(field ? x[field] : x)) {
            length--;
            return;
        }
        value += field ? x[field] : x;
    });
    return (value / length).toFixed(fixed || 2);
};
//# sourceMappingURL=getAverage.js.map