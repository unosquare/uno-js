export const objectDifference = (obj1: {}, obj2: {}): {} => {
    if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
        return obj1;
    }
    const diffs = {};

    const compare = (item1: {}, item2: {}, prop: string): void => {
        if (item1 !== item2) {
            diffs[prop] = { prev: item1, new: item2, type: prop };
        }
    };

    Object.keys(obj1).map((prop) => compare(obj1[prop], obj2[prop], prop));

    return diffs;
};
