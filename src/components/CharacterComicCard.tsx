import React from 'react';
import { View, StyleSheet, Text, Image, ActivityIndicator } from 'react-native';

import { Comic } from '../interfaces/characterComicsInterfaces';

interface Props {
    comic: Comic;
};

const CharacterComicCard = ({ comic }: Props) => {

    const imageUri = comic.thumbnail.path + '.' + comic.thumbnail.extension;

    return (
        <View style={ styles.container }>
            <Text 
                style={ styles.title }
                numberOfLines={ 1 }
            >
                { comic.title.toLowerCase() }
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

export default CharacterComicCard;