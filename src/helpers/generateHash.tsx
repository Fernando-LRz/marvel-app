import md5 from 'md5';

const generateHash = (ts: string, publicKey: string, privateKey: string) => {
    return md5(ts + privateKey + publicKey);
};

export default generateHash;