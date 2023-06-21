import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import CharacterStackNavigator from './CharacterStackNavigator';
import SearchCharacterScreen from '../../screens/character/SearchCharacterScreen';

const Tab = createBottomTabNavigator();

const CharacterBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen 
                name="CharacterStackNavigator" 
                component={ CharacterStackNavigator } 
                options={{
                    title: "Home"
                }}
            />
            <Tab.Screen 
                name="SearchCharacterScreen" 
                component={ SearchCharacterScreen } 
                options={{
                    title: "Search"
                }}
            />
        </Tab.Navigator>
    );
};

export default CharacterBottomTabNavigator;