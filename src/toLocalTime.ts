export const toLocalTime = (obj: {}): void => {
    Object.keys(obj).map(prop => {
        if (obj[prop] instanceof Date) obj[prop] = new Date(obj[prop].toLocaleString());
    });
};
