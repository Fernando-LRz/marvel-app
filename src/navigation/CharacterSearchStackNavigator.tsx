import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CharacterSearchScreen from '../screens/CharacterSearchScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';

import { Character } from '../interfaces/characterInterfaces';

type RootStackParams = {
    CharacterSearchScreen: undefined;
    CharacterDetailsScreen: { character: Character };
};

const Stack = createStackNavigator<RootStackParams>();

const CharacterSearchStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CharacterSearchScreen" component={ CharacterSearchScreen } />
            <Stack.Screen name="CharacterDetailsScreen" component={ CharacterDetailsScreen } />
        </Stack.Navigator>
    );
};

export default CharacterSearchStackNavigator;