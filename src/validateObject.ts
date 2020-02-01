export const validateObject = (fn: (propName: string, originalItem?: object) => boolean): Function => {
    return (item: object): boolean => {
        return !Object.keys(item).some(x => !fn(x, item));
    };
};
