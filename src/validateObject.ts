export const validateObject = (item: object, fn: (propName: string) => boolean): boolean => {
    const result = Object.keys(item).map(x => fn(x));
    return !result.some(x => !x);
};
