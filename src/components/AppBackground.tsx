import React, { useState, useContext, useEffect } from 'react';
import { Dimensions, ImageBackground } from 'react-native';

import { BackgroundContext } from '../context/BackgroundContext';

const AppBackground = ({ children }: any) => {

    const { background } = useContext( BackgroundContext );
    const [ isOnHomeScreen, setIsOnHomeScreen ] = useState<boolean>(true);

    useEffect(() => {
        if (background.current === 'homeScreen') setIsOnHomeScreen(true);
        else setIsOnHomeScreen(false);
    }, [ background ]);

    return (
        <ImageBackground
            source={ 
                isOnHomeScreen 
                ? require('../assets/app-avengers-bg.png') 
                : require('../assets/app-marvel-bg.png') 
            }
            style={{
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height,
            }}
        >
            { children }
        </ImageBackground>
    );
};

export default AppBackground;