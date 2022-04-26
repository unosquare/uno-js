const validateObject =
    (
        fn: (propName: string, originalItem?: Record<string, unknown>) => boolean,
    ): ((item: Record<string, unknown>) => boolean) =>
    (item: Record<string, unknown>): boolean =>
        !Object.keys(item).some((x) => !fn(x, item));

export default validateObject;
