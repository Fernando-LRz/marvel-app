import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { DefaultTheme } from '@react-navigation/native';
import { Theme } from '@react-navigation/native';

import DrawerNavigator from './src/navigation/DrawerNavigator';
import AppBackground from './src/components/AppBackground';

import { CurrentScreenProvider } from './src/context/CurrentScreenContext';

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
            <CurrentScreenProvider>
                <AppBackground>
                    <DrawerNavigator/>
                </AppBackground>
            </CurrentScreenProvider>
        </NavigationContainer>
    );
};

export default App;