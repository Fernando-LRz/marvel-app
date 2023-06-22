import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import CharacterHomeScreen from '../screens/CharacterHomeScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';

const Stack = createStackNavigator();

const CharacterStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="CharacterHomeScreen" component={ CharacterHomeScreen } />
            <Stack.Screen name="CharacterDetailsScreen" component={ CharacterDetailsScreen } />
        </Stack.Navigator>
    );
};

export default CharacterStackNavigator;