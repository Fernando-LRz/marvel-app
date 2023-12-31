import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CharacterBottomTabNavigator from './CharacterBottomTabNavigator';
import ComicBottomTabNavigator from './ComicBottomStackNavigator';

import Icon from 'react-native-vector-icons/Ionicons';

import CustomHeader from '../components/CustomHeader';
import CustomDrawer from '../components/CustomDrawer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {

    return (
        <Drawer.Navigator
            drawerContent={ ({ descriptors, navigation, state }) => 
                <CustomDrawer 
                    state={ state } 
                    descriptors={ descriptors } 
                    navigation={ navigation }
                />
            }
            screenOptions={{
                drawerLabelStyle: {
                    fontSize: 20
                },
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#fff',
                drawerActiveBackgroundColor: 'rgba(255,255,255,0.2)',
                header: (props) => <CustomHeader { ...props }/>
            }}
        >
            <Drawer.Screen 
                name="CharacterBottomTabNavigator" 
                component={ CharacterBottomTabNavigator } 
                options={{ 
                    title: "Characters",
                    drawerIcon: ({ color }) => (
                        <Icon name="person-outline" color={ color } size={ 25 }/>
                    )
                }}
            />
            <Drawer.Screen 
                name="ComicBottomTabNavigator" 
                component={ ComicBottomTabNavigator } 
                options={{ 
                    title: "Comics",
                    drawerIcon: ({ color }) => (
                        <Icon name="reader-outline" color={ color } size={ 25 }/>
                    )
                }}
            />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;