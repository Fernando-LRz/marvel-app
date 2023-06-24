import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';
import SearchInput from './SearchInput';

interface Props {
    navigation: DrawerNavigationProp<ParamListBase, string, undefined>
};

const CustomSearchHeader = ({ navigation }: Props) => {

    const [ searchTerm, setSearchTerm ] = useState('');

    return (
        <View style={ styles.container }>
            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ () => navigation.toggleDrawer() }
            >
                <Icon name="menu-outline" size={ 50 } color="#fff"/>
            </TouchableOpacity>

            <SearchInput 
                onDebounce={ () => setSearchTerm(searchTerm) }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
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

export default CustomSearchHeader;