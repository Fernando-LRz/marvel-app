import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CharacterHomeScreen from '../screens/CharacterHomeScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';

import { Character } from '../interfaces/characterInterfaces';

export type RootStackParams = {
    HomeScreen: undefined;
    CharacterDetailsScreen: { character: Character };
};

const Stack = createStackNavigator<RootStackParams>();

const CharacterHomeStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="HomeScreen" component={ CharacterHomeScreen } />
            <Stack.Screen name="CharacterDetailsScreen" component={ CharacterDetailsScreen } />
        </Stack.Navigator>
    );
};

export default CharacterHomeStackNavigator;