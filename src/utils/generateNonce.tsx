import crypto from 'crypto';
export const nonce = () => {
    const uniqNonce: string = crypto.randomBytes(16).toString('hex');

    return uniqNonce;
};
