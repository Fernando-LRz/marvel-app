import React, { useState, useContext, useEffect } from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';

const AppBackground = ({ children }: any) => {
    return (
        // <ImageBackground
        //     source={ require('../assets/app-avengers-bg.png') }
        //     style={{
        //         width: Dimensions.get('window').width,
        //         height: Dimensions.get('window').height,
        //     }}
        // >
        //     { children }
        // </ImageBackground>
        <View
            style={{
                flex: 1,
                backgroundColor: '#000'
            }}
        >
            { children }
        </View>
    );
};

export default AppBackground;