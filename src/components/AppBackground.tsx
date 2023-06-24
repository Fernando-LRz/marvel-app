import React, { useState, useContext, useEffect } from 'react';
import { Dimensions, ImageBackground } from 'react-native';

const AppBackground = ({ children }: any) => {
    return (
        <ImageBackground
            source={ require('../assets/app-avengers-bg.png') }
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