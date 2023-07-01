import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CharacterSearchScreen from '../screens/CharacterSearchScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';

import { RootStackParams } from './CharacterHomeStackNavigator';

const Stack = createStackNavigator<RootStackParams>();

const CharacterSearchStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={ CharacterSearchScreen } />
            <Stack.Screen name="CharacterDetailsScreen" component={ CharacterDetailsScreen } />
        </Stack.Navigator>
    );
};

export default CharacterSearchStackNavigator;