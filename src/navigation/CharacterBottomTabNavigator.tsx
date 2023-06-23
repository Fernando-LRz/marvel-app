import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Ionicons';

import CharacterStackNavigator from './CharacterStackNavigator';
import SearchCharacterScreen from '../screens/SearchCharacterScreen';

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
                    backgroundColor: 'transparent',
                    borderColor: 'transparent',
                    height: 60,
                    borderWidth: 0
                }
            }}
        >
            <Tab.Screen 
                name="CharacterStackNavigator" 
                component={ CharacterStackNavigator } 
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
                name="SearchCharacterScreen" 
                component={ SearchCharacterScreen } 
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