import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CharacterBottomTabNavigator from './character/CharacterBottomTabNavigator';
import ComicBottomTabNavigator from './comic/ComicBottomStackNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Characters" component={ CharacterBottomTabNavigator } />
            <Drawer.Screen name="Comics" component={ ComicBottomTabNavigator } />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;