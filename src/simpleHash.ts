import crypto from 'crypto';

export const getSimpleHash = (obj: unknown) => {
    if (obj === undefined) throw new Error('Object is undefined');

    const objString = JSON.stringify(obj);
    return crypto.createHash('sha256').update(objString).digest('hex');
};
