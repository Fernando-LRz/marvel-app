import React, { useState, useContext, useEffect } from 'react';
import { ImageBackground} from 'react-native';

import { BackgroundContext } from '../context/BackgroundContext';

const AppBackground = ({ children }: any) => {

    const { background } = useContext( BackgroundContext );
    const [ isOnHomeScreen, setIsOnHomeScreen ] = useState<boolean>(true);

    useEffect(() => {
        if(background.currentBackground === 'homeScreen') setIsOnHomeScreen(true);
        else setIsOnHomeScreen(false);
    }, [ background ]);

    return (
        <ImageBackground
            source={ 
                isOnHomeScreen 
                ? require('../assets/avengers-bg.png') 
                : require('../assets/marvel-bg.png') 
            }
            style={{ flex: 1 }}
        >
            { children }
        </ImageBackground>
    );
};

export default AppBackground;