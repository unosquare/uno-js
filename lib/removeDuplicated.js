"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDuplicated = (array, prop) => {
    return array.filter((x, i, arr) => arr.map(y => y[prop]).indexOf(x[prop]) === i);
};
