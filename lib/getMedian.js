"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sortValueByAsc_1 = require("./sortValueByAsc");
exports.getMedian = (data, field) => {
    const sortedData = sortValueByAsc_1.sortValueByAsc(data, field);
    const i = Math.ceil((sortedData.sort((a, b) => (field ? a[field] : a) - (field ? b[field] : b)).length - 1) / 2);
    return field ? data[i][field] : data[i];
};
//# sourceMappingURL=getMedian.js.map