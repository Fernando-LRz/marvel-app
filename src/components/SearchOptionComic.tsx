import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Comic } from '../interfaces/comicInterfaces';

interface Props {
    comic: Comic;
};

const SearchOptionComic = ({ comic }: Props) => {

    const { title, thumbnail } = comic;
    const navigation = useNavigation<any>();

    const imageUri = thumbnail.path + '.' + thumbnail.extension;

    return (
        <TouchableOpacity 
            style={ styles.container }
            activeOpacity={ 0.7 }
            onPress={ 
                () => navigation.navigate('ComicDetailsScreen', { comic }) 
            }
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
        height: 110,
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