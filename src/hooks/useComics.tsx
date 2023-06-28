import { useEffect, useRef, useState } from 'react';
import { isAxiosError } from 'axios';
import { privateKey, publicKey } from '@env';

import generateHash from '../helpers/generateHash';
import MarvelApi from '../api/MarvelApi';

import { Comic, MarvelComicsResponse } from '../interfaces/comicInterfaces';

const useComics = () => {

    const [ isLoading, setIsLoading ] = useState(true);

    const [ comicList, setComicList ] = useState<Comic[]>([]);
    const [ comicOptionList, setComicOptionList ] = useState<Comic[]>([]);

    const currentSearchTerm = useRef<string>('');
    const searchOffset = useRef<number>(0);
    const offset = useRef<number>(0);

    const testArray: any[] = [1,2,3,4,5,6,7,8,9,10];

    useEffect(() => {
        // loadComics();
    }, []);

    const loadComics = async () => {
        setIsLoading(true);

        const ts = new Date().getTime().toString();
        const hash = generateHash(ts, publicKey, privateKey);

        try {
            const response = await MarvelApi.get<MarvelComicsResponse>(`/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${offset.current}`);
            offset.current += 20;

            const filteredList = response.data.data.results.filter(c => !c.thumbnail.path.endsWith('image_not_available') && !(c.thumbnail.path + c.thumbnail.extension).endsWith('gif'));
            setComicList([...comicList, ...filteredList]);

        } catch (error) {
            if(isAxiosError(error)) console.log(error.response?.data);
        }

        setIsLoading(false);
    };

    const searchComics = async (titlePrefix?: string) => {
        setIsLoading(true);

        if(titlePrefix) currentSearchTerm.current = titlePrefix;
        if(!titlePrefix) titlePrefix = currentSearchTerm.current;

        const ts = new Date().getTime().toString();
        const hash = generateHash(ts, publicKey, privateKey);

        try {
            const response = await MarvelApi.get<MarvelComicsResponse>(`/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${titlePrefix}&limit=10&offset=${searchOffset.current}`);
            searchOffset.current += 10;

            const filteredList = response.data.data.results.filter(c => !c.thumbnail.path.endsWith('image_not_available') && !(c.thumbnail.path + c.thumbnail.extension).endsWith('gif'));
            setComicOptionList([...comicOptionList, ...filteredList]);

        } catch (error) {
            if(isAxiosError(error)) console.log(error.response?.data);
        }

        setIsLoading(false);
    };
    
    return {
        loadComics,
        searchComics,
        comicList,
        isLoading,
        testArray
    };
};

export default useComics;