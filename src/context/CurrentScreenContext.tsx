import React, { createContext, useReducer } from 'react';
import { CurrentScreenState, CurrentScreenReducer, homeScreen } from './CurrentScreenReducer';

interface CurrentScreenProps {
    background: CurrentScreenState;
    setHomeScreen: () => void;
    setSearchScreen: () => void;
};

export const CurrentScreenContext = createContext({} as CurrentScreenProps);

export const CurrentScreenProvider = ({ children }: any) => {

    const [ background, dispatch ] = useReducer( CurrentScreenReducer, homeScreen );

    const setHomeScreen = () => {
        dispatch({ type: 'setHomeScreen' });
    }

    const setSearchScreen = () => {
        dispatch({ type: 'setSearchScreen' });
    }

    return (
        <CurrentScreenContext.Provider
            value={{
                background, setHomeScreen, setSearchScreen
            }}
        >
            { children }
        </CurrentScreenContext.Provider>
    )
};