import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const SearchOptionCharacter = () => {
    return (
        <TouchableOpacity 
            style={ styles.container }
            activeOpacity={ 0.7 }
        >
            <Image
                source={{ uri: 'http://i.annihil.us/u/prod/marvel/i/mg/3/50/526548a343e4b.jpg' }}
                style={ styles.image }
            />
            <Text style={ styles.name }>Spider-Man</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        height: 100,
        backgroundColor: 'rgba(8,31,120,0.9)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
        overflow: 'hidden'
    },
    name: {
        flex: 1,
        fontSize: 25,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center'
    },
    image: {
        width: '30%',
        height: '100%',
        resizeMode: 'stretch'
    }
});

export default SearchOptionCharacter;