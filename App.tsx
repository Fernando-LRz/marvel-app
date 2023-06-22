import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme } from '@react-navigation/native';
import { Theme } from '@react-navigation/native';

import { BackgroundProvider } from './src/context/BackgroundContext';
import DrawerNavigator from './src/navigation/DrawerNavigator';
import AppBackground from './src/components/AppBackground';

export const theme: Theme = {
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
            <BackgroundProvider>
                <AppBackground>
                    <DrawerNavigator/>
                </AppBackground>
            </BackgroundProvider>
        </NavigationContainer>
    );
};

export default App;