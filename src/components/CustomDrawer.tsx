import React from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import { DrawerNavigationState, ParamListBase } from '@react-navigation/native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerDescriptorMap, DrawerNavigationHelpers } from '@react-navigation/drawer/lib/typescript/src/types';

interface Props {
    state: DrawerNavigationState<ParamListBase>; 
    navigation: DrawerNavigationHelpers; 
    descriptors: DrawerDescriptorMap;
};

const CustomDrawer = ({ state, descriptors, navigation }: Props) => {
    return (
        <ImageBackground
            style={{ flex: 1 }}
            source={ require('../assets/shield-bg.png') }
        >
            <DrawerContentScrollView>
                <DrawerItemList 
                    state={ state } 
                    descriptors={ descriptors } 
                    navigation={ navigation }
                />
            </DrawerContentScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    }
});

export default CustomDrawer;