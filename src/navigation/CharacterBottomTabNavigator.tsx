import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import CharacterHomeStackNavigator from './CharacterHomeStackNavigator';
import CharacterSearchStackNavigator from './CharacterSearchStackNavigator';

const Tab = createBottomTabNavigator();

const CharacterBottomTabNavigator = () => {
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
                name="CharacterHomeStackNavigator" 
                component={ CharacterHomeStackNavigator } 
                options={{
                    tabBarLabel: "Characters",
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
                name="CharacterSearchStackNavigator" 
                component={ CharacterSearchStackNavigator } 
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

export default CharacterBottomTabNavigator;