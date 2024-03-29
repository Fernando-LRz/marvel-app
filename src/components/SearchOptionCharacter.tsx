import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Character } from '../interfaces/characterInterfaces';

interface Props {
    character: Character;
};

const SearchOptionCharacter = ({ character }: Props) => {

    const { name, thumbnail } = character;
    const navigation = useNavigation<any>(); 
    
    const imageUri = thumbnail.path + '.' + thumbnail.extension;

    return (
        <TouchableOpacity 
            style={ styles.container }
            activeOpacity={ 0.7 }
            onPress={ 
                () => navigation.navigate('CharacterDetailsScreen', { character }) 
            }
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
        height: 110,
        backgroundColor: '#20253b',
        borderRadius: 20,
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