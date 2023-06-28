import React from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';

const SearchOptionComic = () => {
    return (
        <TouchableOpacity 
            style={ styles.container }
            activeOpacity={ 0.7 }
        >
            <Image
                source={{ uri: 'http://i.annihil.us/u/prod/marvel/i/mg/3/20/649453d2a502d.jpg' }}
                style={ styles.image }
            />
            <Text style={ styles.title }>Captain America</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        height: 100,
        backgroundColor: 'rgba(255,255,255,0.2)',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.4)',
        overflow: 'hidden'
    },
    title: {
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

export default SearchOptionComic;