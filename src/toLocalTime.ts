export const toLocalTime: {} = (obj: {}) => {
    for (const prop in obj) {
        if (obj.hasOwnProperty(prop) && obj[prop] instanceof Date) {
            obj[prop] = new Date(obj[prop].toLocaleString());
        }
    }
};
