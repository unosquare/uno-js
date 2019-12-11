"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.groupedCount = (data, prop) => data
    .reduce((array, current) => {
    const index = array.findIndex((x) => x[prop] === current[prop]);
    if (index >= 0) {
        array[index].Count++;
    }
    else {
        array.push(Object.assign({ Count: 1, [prop]: current[prop] }));
    }
    return array;
}, [])
    .map((x) => ({ name: x[prop], value: x.Count }))
    .sort((a, b) => a.name > b.name ? 1 : a.name < b.name ? -1 : 0);
//# sourceMappingURL=groupedCount.js.map