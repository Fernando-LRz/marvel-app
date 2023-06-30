import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ComicHomeScreen from '../screens/ComicHomeScreen';
import ComicDetailsScreen from '../screens/ComicDetailsScreen';

import { Comic } from '../interfaces/comicInterfaces';

type RootStackParams = {
    ComicHomeScreen: undefined;
    ComicDetailsScreen: { comic: Comic };
};

const Stack = createStackNavigator<RootStackParams>();

const ComicHomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ComicHomeScreen" component={ ComicHomeScreen } />
            <Stack.Screen name="ComicDetailsScreen" component={ ComicDetailsScreen } />
        </Stack.Navigator>
    );
};

export default ComicHomeStackNavigator;