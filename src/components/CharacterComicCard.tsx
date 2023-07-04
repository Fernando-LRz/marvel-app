import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

import { Comic } from '../interfaces/characterComicsInterfaces';

interface Props {
    comic: Comic;
}

const CharacterComicCard = ({ comic }: Props) => {

    const imageUri = comic.thumbnail.path + '.' + comic.thumbnail.extension;

    return (
        <TouchableOpacity 
            style={ styles.container }
            activeOpacity={ 0.7 }
        >
            <Text 
                style={ styles.title }
                numberOfLines={ 1 }
            >
                { comic.title.toLowerCase() }
            </Text>
            <Image 
                source={{ uri: imageUri }}
                style={ styles.image }
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginRight: 15,
        height: 110,
        width: 150
    },
    image: {
        flex: 1,
        borderRadius: 10
    },
    title: {
        fontSize: 15, 
        color: '#fff',
        fontWeight: '600',
        marginBottom: 3
    }
});

export default CharacterComicCard;