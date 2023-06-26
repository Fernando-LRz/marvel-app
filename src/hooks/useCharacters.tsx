import { useEffect, useRef, useState } from 'react';
import { isAxiosError } from 'axios';
import { privateKey, publicKey } from '@env';

import generateHash from '../helpers/generateHash';
import MarvelApi from '../api/MarvelApi';

import { Character, MarvelCharacterResponse } from '../interfaces/characterInterfaces';

const useCharacters = () => {

    const [ isLoading, setIsLoading ] = useState(true);

    const [ characterList, setCharacterList ] = useState<Character[]>([]);
    const offset = useRef<number>(0);

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
    
    return {
        loadCharacters,
        characterList,
        isLoading
    };
};

export default useCharacters;