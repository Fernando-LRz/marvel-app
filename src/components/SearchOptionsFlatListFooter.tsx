import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
    onPress: () => void;
};

const SearchOptionsFlatListFooter = ({ onPress }: Props) => {
    return (
        <TouchableOpacity
            activeOpacity={ 0.7 }
            style={ styles.container }
            onPress={ onPress }
        >
            <Text style={ styles.buttonText }>Load More</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6c05a8',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    }
});

export default SearchOptionsFlatListFooter;