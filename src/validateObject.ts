export const validateObject = (item: object, ignoreProps?: string[]): boolean => {
    let isValid = true;
    Object.keys(item).map(prop => {
        if (item[prop] == null) {
            if (ignoreProps && ignoreProps.indexOf(prop) > -1) {
                return;
            }
            isValid = false;
            return;
        }
    });
    return isValid;
};
