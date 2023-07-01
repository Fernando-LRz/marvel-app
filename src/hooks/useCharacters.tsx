import { useEffect, useRef, useState } from 'react';
import { isAxiosError } from 'axios';
import { privateKey, publicKey } from '@env';

import generateHash from '../helpers/generateHash';
import MarvelApi from '../api/MarvelApi';

import { Character, MarvelCharacterResponse } from '../interfaces/characterInterfaces';

const useCharacters = () => {

    const [ isLoading, setIsLoading ] = useState(true);
    const [ isOptionLimitReached, setIsOptionLimitReached ] = useState<boolean>(false);

    const [ characterList, setCharacterList ] = useState<Character[]>([]);
    const [ characterOptionList, setCharacterOptionList ] = useState<Character[]>([]);
    
    const offset = useRef<number>(0);
    const searchOffset = useRef<number>(0);

    useEffect(() => {
        loadCharacters();
    }, []);

    const loadCharacters = async () => {
        setIsLoading(true);

        const ts = new Date().getTime().toString();
        const hash = generateHash(ts, publicKey, privateKey);

        try {
            const response = await MarvelApi.get<MarvelCharacterResponse>(`/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=20&offset=${offset.current}`);
            offset.current += 20;

            const filteredList = response.data.data.results.filter(c => !c.thumbnail.path.endsWith('image_not_available') && !(c.thumbnail.path + c.thumbnail.extension).endsWith('gif'));
            setCharacterList([...characterList, ...filteredList]);

        } catch (error) {
            if(isAxiosError(error)) console.log(error.response?.data);
        }

        setIsLoading(false);
    };

    const searchCharacters= async (namePrefix: string, isANewSearchTerm: boolean = false) => {
        setIsLoading(true);

        const ts = new Date().getTime().toString();
        const hash = generateHash(ts, publicKey, privateKey);

        try {
            const response = await MarvelApi.get<MarvelCharacterResponse>(`/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${namePrefix}&limit=10&offset=${searchOffset.current}`);
            searchOffset.current += 10;

            if(response.data.data.count < 10) setIsOptionLimitReached(true);

            const filteredList = response.data.data.results.filter(c => !c.thumbnail.path.endsWith('image_not_available') && !(c.thumbnail.path + c.thumbnail.extension).endsWith('gif'));
            
            if(!isANewSearchTerm) setCharacterOptionList([...characterOptionList, ...filteredList]);
            else setCharacterOptionList(filteredList);

        } catch (error) {
            if(isAxiosError(error)) console.log(error.response?.data);
        }

        setIsLoading(false);
    };

    const clearCharacterOptionList = () => {
        setCharacterOptionList([]);

        searchOffset.current = 0;
        setIsOptionLimitReached(false);
    };
    
    return {
        loadCharacters,
        searchCharacters,
        characterList,
        characterOptionList,
        clearCharacterOptionList,
        isLoading,
        isOptionLimitReached
    };
};

export default useCharacters;