import axios from 'axios';
import md5 from 'md5';

import { privateKey, publicKey } from '@env';

const ts = new Date().getTime();
const hash = md5(ts + privateKey + publicKey);

const MarvelApi = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public',
    params: { 
        ts, apiKey: publicKey, hash, limit: 40 
    }
});

export default MarvelApi;