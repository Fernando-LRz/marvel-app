import { useEffect, useRef, useState } from 'react';
import { isAxiosError } from 'axios';
import { privateKey, publicKey } from '@env';

import generateHash from '../helpers/generateHash';
import MarvelApi from '../api/MarvelApi';

import { Comic, MarvelComicsResponse } from '../interfaces/comicInterfaces';
import { MarvelComicCharactersResponse } from '../interfaces/comicCharactersInterfaces';

const useComics = () => {

    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ isOptionLimitReached, setIsOptionLimitReached ] = useState<boolean>(false);

    const [ comicList, setComicList ] = useState<Comic[]>([]);
    const [ comicOptionList, setComicOptionList ] = useState<Comic[]>([]);

    const offset = useRef<number>(0);
    const searchOffset = useRef<number>(0);

    useEffect(() => {
        loadComics();
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

    const searchComics = async (titlePrefix: string, isANewSearchTerm: boolean = false) => {
        setIsLoading(true);

        const ts = new Date().getTime().toString();
        const hash = generateHash(ts, publicKey, privateKey);

        try {
            const response = await MarvelApi.get<MarvelComicsResponse>(`/comics?ts=${ts}&apikey=${publicKey}&hash=${hash}&titleStartsWith=${titlePrefix}&limit=10&offset=${searchOffset.current}`);
            searchOffset.current += 10;

            if(response.data.data.count < 10) setIsOptionLimitReached(true);

            const filteredList = response.data.data.results.filter(c => !c.thumbnail.path.endsWith('image_not_available') && !(c.thumbnail.path + c.thumbnail.extension).endsWith('gif'));
            
            if(!isANewSearchTerm) setComicOptionList([...comicOptionList, ...filteredList]);
            else setComicOptionList(filteredList);

        } catch (error) {
            if(isAxiosError(error)) console.log(error.response?.data);
        }

        setIsLoading(false);
    };

    const loadComicCharacters = async (id: number) => {
        const ts = new Date().getTime().toString();
        const hash = generateHash(ts, publicKey, privateKey);

        try {
            const response = await MarvelApi.get<MarvelComicCharactersResponse>(`/comics/${id}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`);
            if(response.data.data.count === 0) return;

            const filteredList = response.data.data.results.filter(c => !c.thumbnail.path.endsWith('image_not_available') && !(c.thumbnail.path + c.thumbnail.extension).endsWith('gif'));
            return filteredList;    
        
        } catch (error) {
            if(isAxiosError(error)) console.log(error.response?.data);
        }
    };

    const clearComicOptionList = () => {
        setComicOptionList([]);

        searchOffset.current = 0;
        setIsOptionLimitReached(false);
    };
    
    return {
        loadComics,
        searchComics,
        loadComicCharacters,
        comicList,
        comicOptionList,
        clearComicOptionList,
        isLoading,
        isOptionLimitReached
    };
};

export default useComics;