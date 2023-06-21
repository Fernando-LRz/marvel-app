import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

import CharacterBottomTabNavigator from './character/CharacterBottomTabNavigator';
import ComicBottomTabNavigator from './comic/ComicBottomStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerTintColor: '#fff',
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: '600'
                },
                headerStyle: {
                    backgroundColor: '#231b5c'
                }
            }}
        >
            <Drawer.Screen name="Characters" component={ CharacterBottomTabNavigator } />
            <Drawer.Screen name="Comics" component={ ComicBottomTabNavigator } />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;