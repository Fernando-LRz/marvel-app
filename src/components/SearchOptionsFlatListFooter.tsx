import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface Props {
    onPress: (value: string) => void;
    onPressValue: string;
};

const SearchOptionsFlatListFooter = ({ onPress, onPressValue }: Props) => {
    return (
        <View style={ styles.container }>
            <TouchableOpacity
                activeOpacity={ 0.7 }
                style={ styles.button }
                onPress={ () => onPress(onPressValue) }
            >
                <Text style={ styles.buttonText }>Load More</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#ad1111',
        justifyContent: 'center',
        alignItems: 'center',
        width: '40%',
        marginVertical: 15,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 20
    },
    buttonText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff'
    }
});

export default SearchOptionsFlatListFooter;