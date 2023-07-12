import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Character } from '../interfaces/characterInterfaces';

interface Props {
    character: Character;
};

const CharacterCard = ({ character }: Props) => {

    const { name, thumbnail } = character;
    const navigation = useNavigation<any>(); 

    const imageUri = thumbnail.path + '.' + thumbnail.extension;

    return (
        <View style={ styles.container }>
            <Text style={ styles.name } numberOfLines={ 1 }>
                { name }
            </Text>

            <TouchableOpacity
                activeOpacity={ 0.8 }
                onPress={ 
                    () => navigation.navigate('CharacterDetailsScreen', { character }) 
                }
            >
                <ActivityIndicator color="rgba(255,255,255,0.8)" size={ 28 } style={ styles.loading }/>
                
                <Image 
                    source={{ uri: imageUri }}
                    style={ styles.bgImage }
                />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 180,
        marginHorizontal: 8,
        marginVertical: 8,
        overflow: 'hidden'
    },
    bgImage: {
        width: '100%', 
        height: 120,
        borderRadius: 15,
        overflow: 'hidden'
    },
    name: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 5
    },
    loading: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    }
});

export default CharacterCard;