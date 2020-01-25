export const validateObject = (item: object, fn: (propName: string, item: object) => boolean): boolean => {
    const result = Object.keys(item).map(x => fn(x, item));
    return !result.some(x => !x);
};
