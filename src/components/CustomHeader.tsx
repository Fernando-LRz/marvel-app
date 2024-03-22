import React from 'react';
import { StyleSheet, Image, View, TouchableOpacity } from 'react-native';
import { DrawerHeaderProps } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';

interface Props extends DrawerHeaderProps{};

const CustomHeader = ({ navigation }: Props) => {
    return (
        <View style={ styles.container }>
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ () => navigation.toggleDrawer() }
            >
                <Icon name="menu-outline" size={ 50 } color="#fff"/>
            </TouchableOpacity>

            <Image 
                source={ require('../assets/header-marvel-logo.png') }
                style={ styles.marvelLogo }
            />

            <TouchableOpacity
                activeOpacity={ 0.8 }
            >
                <Image 
                    source={ require('../assets/header-avengers-logo.png') }
                    style={{ height: 34, width: 34 }}
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        height: 70,
        backgroundColor: '#000'
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