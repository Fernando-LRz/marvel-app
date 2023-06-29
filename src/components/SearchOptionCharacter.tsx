import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { Character } from '../interfaces/characterInterfaces';

interface Props extends Character{};

const SearchOptionCharacter = ({ name, thumbnail }: Props) => {
    
    const imageUri = thumbnail.path + '.' + thumbnail.extension;

    return (
        <TouchableOpacity 
            style={ styles.container }
            activeOpacity={ 0.7 }
        >
            <Image
                source={{ uri: imageUri }}
                style={ styles.image }
            />
            <Text style={ styles.name }>{ name }</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        height: 100,
        backgroundColor: 'rgba(54,2,150,0.9)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
        overflow: 'hidden'
    },
    name: {
        flex: 1,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginHorizontal: 10
    },
    image: {
        width: '30%',
        height: '100%',
        resizeMode: 'stretch'
    }
});

export default SearchOptionCharacter;