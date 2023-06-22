import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import {  DefaultTheme } from '@react-navigation/native';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import AvengersBackground from './src/components/AvengersBackground';

const theme: Theme = {
    ...DefaultTheme,  
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent'
    }
};

const App = () => {
    return (
        <NavigationContainer
            theme={ theme }
        >
            <AvengersBackground>
                <DrawerNavigator/>
            </AvengersBackground>
        </NavigationContainer>
    );
};

export default App;