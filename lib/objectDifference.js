"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectDifference = (obj1, obj2) => {
    if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
        return obj1;
    }
    const diffs = {};
    let prop;
    const compare = (item1, item2) => {
        if (item1 !== item2) {
            diffs[prop] = { prev: item1, new: item2, type: prop };
        }
    };
    for (prop in obj1) {
        if (obj1.hasOwnProperty(prop)) {
            compare(obj1[prop], obj2[prop]);
        }
    }
    return diffs;
};
//# sourceMappingURL=objectDifference.js.map