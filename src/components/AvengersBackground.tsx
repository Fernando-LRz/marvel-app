import React from 'react';
import { ImageBackground} from 'react-native';

const AvengersBackground = ({ children }: any) => {
    return (
        <ImageBackground
            source={ require('../assets/avengers-bg.png') }
            style={{ flex: 1 }}
        >
            { children }
        </ImageBackground>
    );
};

export default AvengersBackground;