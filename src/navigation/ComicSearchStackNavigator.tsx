import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ComicSearchScreen from '../screens/ComicSearchScreen';
import ComicDetailsScreen from '../screens/ComicDetailsScreen';

import { Comic } from '../interfaces/comicInterfaces';

type RootStackParams = {
    ComicSearchScreen: undefined;
    ComicDetailsScreen: { comic: Comic };
};

const Stack = createStackNavigator<RootStackParams>();

const ComicSearchStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ComicSearchScreen" component={ ComicSearchScreen } />
            <Stack.Screen name="ComicDetailsScreen" component={ ComicDetailsScreen } />
        </Stack.Navigator>
    );
};

export default ComicSearchStackNavigator;