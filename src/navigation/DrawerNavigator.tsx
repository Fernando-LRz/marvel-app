import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CharacterBottomTabNavigator from './character/CharacterBottomTabNavigator';
import ComicBottomTabNavigator from './comic/ComicBottomStackNavigator';

import Header from '../components/Header';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={{
                header: ({ navigation }) => <Header navigation={ navigation }/>,
            }}
        >
            <Drawer.Screen 
                name="CharacterBottomTabNavigator" 
                component={ CharacterBottomTabNavigator } 
                options={{ title: "Characters" }}
            />
            <Drawer.Screen 
                name="ComicBottomTabNavigator" 
                component={ ComicBottomTabNavigator } 
                options={{ title: "Comics" }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;