import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import ComicStackNavigator from './ComicStackNavigator';
import SearchComicScreen from '../screens/SearchComicScreen';

const Tab = createBottomTabNavigator();

const ComicBottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarActiveTintColor: '#fff',
                tabBarInactiveTintColor: 'rgba(255,255,255,0.5)',
                tabBarLabelStyle: {
                    marginBottom: 8
                },
                tabBarStyle: {
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    height: 60,
                    borderWidth: 0
                }
            }}
        >
            <Tab.Screen 
                name="ComicStackNavigator" 
                component={ ComicStackNavigator } 
                options={{
                    tabBarLabel: "Comics",
                    tabBarIcon: ({ color, focused }) => (
                        <Icon 
                            name="list-outline" 
                            color={ color } 
                            size={ ( focused ) ? 30 : 25 }
                        />
                    )
                }}
            />
            <Tab.Screen 
                name="SearchCharacterScreen" 
                component={ SearchComicScreen } 
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ color, focused }) => (
                        <Icon 
                            name="search-outline" 
                            color={ color } 
                            size={ ( focused ) ? 30 : 25 }
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
};

export default ComicBottomTabNavigator;