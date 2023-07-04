import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';

import { Character } from '../interfaces/comicCharactersInterfaces';

interface Props {
    character: Character;
};

const ComicCharacterCard = ({ character }: Props) => {

    const imageUri = character.thumbnail.path + '.' + character.thumbnail.extension;

    return (
        <View style={ styles.container }>
            <Text 
                style={ styles.title }
                numberOfLines={ 1 }
            >
                { character.name.toLowerCase() }
            </Text>
            <Image 
                source={{ uri: imageUri }}
                style={ styles.image }
            />
        </View>
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

export default ComicCharacterCard;