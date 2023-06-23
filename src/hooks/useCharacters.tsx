import { useEffect, useRef, useState } from 'react';

import { Character, MarvelCharacterResponse } from '../interfaces/characterInterfaces';
import MarvelApi from '../api/MarvelApi';

const useCharacters = () => {

    const [ isLoading, setIsLoading ] = useState(true);

    const [ characterList, setCharacterList ] = useState<Character[]>([]);
    const offset = useRef<number>(0);

    useEffect(() => {
        loadCharacters();
    }, []);

    const loadCharacters = async () => {
        setIsLoading(true);

        const response = await MarvelApi.get<MarvelCharacterResponse>(`/characters?offset=${offset.current}`);
        offset.current += 40;

        setCharacterList([...characterList, ...response.data.data.results]);
        setIsLoading(false);
    };
    
    return {
        loadCharacters,
        isLoading
    };
};

export default useCharacters;