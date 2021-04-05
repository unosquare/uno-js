const validateNotNull = (item: Record<string, unknown>, ignoreProps: string[] = []): boolean =>
    !Object.keys(item).some((prop) => item[prop] == null && !ignoreProps?.includes(prop));

export default validateNotNull;
