const objectDifference = <T>(obj1: T, obj2: T | Record<string, unknown>): T | Record<string, unknown> => {
    if (!obj2 || Object.prototype.toString.call(obj2) !== '[object Object]') {
        return obj1;
    }

    const diffs: Record<string, unknown> = {};

    const compare = (item1: Record<string, unknown>, item2: Record<string, unknown>, prop: string): void => {
        if (item1 !== item2) {
            diffs[prop] = { prev: item1, new: item2, type: prop };
        }
    };

    Object.keys(obj1).forEach((prop) => compare(obj1[prop], obj2[prop], prop));

    return diffs;
};

export default objectDifference;
