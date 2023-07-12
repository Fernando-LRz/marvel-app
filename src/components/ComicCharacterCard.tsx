import React from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';

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

            <ActivityIndicator color="#fff" size={ 20 } style={ styles.loading }/>

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
    },
    loading: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});

export default ComicCharacterCard;