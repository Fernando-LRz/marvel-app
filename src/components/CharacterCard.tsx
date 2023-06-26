import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Character } from '../interfaces/characterInterfaces';

interface Props extends Character{};

const CharacterCard = ({ name, thumbnail }: Props) => {
    const imageUri = thumbnail.path + '.' + thumbnail.extension;

    return (
        <View style={ styles.container }>
            <Text style={ styles.name } numberOfLines={ 1 }>
                { name }
            </Text>

            <TouchableOpacity
                activeOpacity={ 0.8 }
            >
                <Image 
                    source={{ uri: imageUri }}
                    style={{ 
                        ...styles.bgImage,
                        resizeMode: (thumbnail.path.endsWith('image_not_available')) ? 'center' : 'cover'
                    }}
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
    }
});

export default CharacterCard;