export const validateObject = (
    fn: (propName: string, originalItem?: object) => boolean,
): ((item: object) => boolean) => (item: object): boolean => !Object.keys(item).some((x) => !fn(x, item));
