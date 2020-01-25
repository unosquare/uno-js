export const validateObject = (
    item: object,
    fn: (propName: string, prop: any, originalItem?: object) => boolean,
): boolean => {
    const result = Object.keys(item).map(x => fn(x, item[x], item));
    return !result.some(x => !x);
};
