import axios from 'axios';

const MarvelApi = axios.create({
    baseURL: 'https://gateway.marvel.com/v1/public'
});

export default MarvelApi;