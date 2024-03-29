import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import ComicHomeStackNavigator from './ComicHomeStackNavigator';
import ComicSearchStackNavigator from './ComicSearchStackNavigator';

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
                    backgroundColor: '#000',
                    height: 60,
                    borderColor: '#000'
                }
            }}
        >
            <Tab.Screen 
                name="ComicHomeStackNavigator" 
                component={ ComicHomeStackNavigator } 
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
                name="ComicSearchStackNavigator" 
                component={ ComicSearchStackNavigator } 
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