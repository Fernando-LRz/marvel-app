import React, { createContext, useReducer } from 'react';
import { CurrentScreenState, CurrentScreenReducer, homeScreen } from './CurrentScreenReducer';

interface CurrentScreenProps {
    currentScreen: CurrentScreenState;
    setHomeScreen: () => void;
    setSearchCharacterScreen: () => void;
    setSearchComicScreen: () => void;
};

export const CurrentScreenContext = createContext({} as CurrentScreenProps);

export const CurrentScreenProvider = ({ children }: any) => {

    const [ currentScreen, dispatch ] = useReducer(CurrentScreenReducer, homeScreen);

    const setHomeScreen = () => {
        dispatch({ type: 'setHomeScreen' });
    }

    const setSearchCharacterScreen = () => {
        dispatch({ type: 'setSearchCharacterScreen' });
    }

    const setSearchComicScreen = () => {
        dispatch({ type: 'setSearchComicScreen' });
    }

    return (
        <CurrentScreenContext.Provider
            value={{
                currentScreen, 
                setHomeScreen, 
                setSearchCharacterScreen,
                setSearchComicScreen
            }}
        >
            { children }
        </CurrentScreenContext.Provider>
    )
};