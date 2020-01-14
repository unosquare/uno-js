const regex = /^([1-9]|1[012])[- /.]([1-9]|[12][0-9]|3[01])[- /.](19[8-9][0-9]|20[0-9][0-9])$/;

export const toDate = (obj: {}): void => {
    Object.keys(obj).map(prop => {
        if (typeof obj[prop] === 'string' && new Date(obj[prop]).toLocaleDateString('en-us').match(regex)) {
            obj[prop] = new Date(obj[prop]);
        }
    });
};
