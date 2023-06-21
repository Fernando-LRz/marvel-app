import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import ComicStackNavigator from './ComicStackNavigator';
import SearchComicScreen from '../../screens/comic/SearchComicScreen';

const Tab = createBottomTabNavigator();

const ComicBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Tab.Screen 
                name="ComicStackNavigator" 
                component={ ComicStackNavigator } 
                options={{
                    title: "Home"
                }}
            />
            <Tab.Screen 
                name="SearchCharacterScreen" 
                component={ SearchComicScreen } 
                options={{
                    title: "Search"
                }}
            />
        </Tab.Navigator>
    );
};

export default ComicBottomTabNavigator;