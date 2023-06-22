import React, { createContext, useReducer } from 'react';
import { BackgroundState, BackgroundReducer, homeScreenBackground } from './BackgroundReducer';

interface BackgroundContextProps {
    background: BackgroundState;
    setHomeScreenBackground: () => void;
    setSearchScreenBackground: () => void;
};

export const BackgroundContext = createContext({} as BackgroundContextProps);

export const BackgroundProvider = ({ children }: any) => {

    const [ background, dispatch ] = useReducer( BackgroundReducer, homeScreenBackground );

    const setHomeScreenBackground = () => {
        dispatch({ type: 'setHomeScreenBackground' })
    }

    const setSearchScreenBackground = () => {
        dispatch({ type: 'setSearchScreenBackground' })
    }

    return (
        <BackgroundContext.Provider
            value={{
                background, setHomeScreenBackground, setSearchScreenBackground
            }}
        >
            { children }
        </BackgroundContext.Provider>
    )
};