import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    navigation: DrawerNavigationProp<ParamListBase, string, undefined>
};

const CustomHeader = ({ navigation }: Props) => {

    return (
        <View style={ styles.container }>
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ () => navigation.toggleDrawer() }
            >
                <Icon name="menu-outline" size={ 40 } color="#fff"/>
            </TouchableOpacity>

            <Image 
                source={ require('../assets/marvel-logo.png') }
                style={ styles.marvelLogo }
            />

            <TouchableOpacity
                activeOpacity={ 0.8 }
            >
                <Icon name="search-outline" size={ 35 } color="#fff"/>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'transparent',
        paddingHorizontal: 10,
        height: 70
    },
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600'
    },
    marvelLogo: {
        width: 180,
        height: 40
    },
    avengersLogo: {
        width: 30, 
        height: 30
    }
});

export default CustomHeader;