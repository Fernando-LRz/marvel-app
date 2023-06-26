import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Comic } from '../interfaces/comicInterfaces';

interface Props extends Comic{};

const ComicCard = ({ title, thumbnail }: Props) => {
    const imageUri = thumbnail.path + '.' + thumbnail.extension;

    return (
        <View style={ styles.container }>
            <Text style={ styles.title } numberOfLines={ 1 }>
                { title }
            </Text>

            <TouchableOpacity
                activeOpacity={ 0.8 }
            >
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
    title: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 5
    }
});

export default ComicCard;