import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

import { Comic } from '../interfaces/comicInterfaces';

interface Props extends Comic{};

const SearchOptionComic = ({ title, thumbnail }: Props) => {

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
            
            <Text style={ styles.title }>{ title }</Text>        
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        height: 120,
        backgroundColor: 'rgba(54,2,150,0.9)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
        overflow: 'hidden'
    },
    title: {
        flex: 1,
        fontSize: 20,
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

export default SearchOptionComic;