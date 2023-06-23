import React, { useState, useEffect } from 'react';
import { View, StyleSheet, TextInput, Platform } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import useDebouncedValue from '../hooks/useDebouncedValue';

interface Props {
    onDebounce: (value: string) => void;
};

const SearchInput = ({ onDebounce }: Props) => {

    const [ textValue, setTextValue ] = useState('');
    const { debouncedValue } = useDebouncedValue(textValue);

    useEffect(() => {
        onDebounce(debouncedValue);
    }, [ debouncedValue ]);

    return (
        <View style={ styles.container }>
            <View style={ styles.backgroundText }>
                <TextInput 
                    placeholder="Search"
                    placeholderTextColor="rgba(255,255,255,0.7)"
                    autoCapitalize="none"
                    autoCorrect={ false }
                    style={ styles.inputText }
                    value={ textValue }
                    onChangeText={ setTextValue }
                />
                <Icon 
                    name="search-outline"
                    color="#fff"
                    size={ 30 }
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 0.9
    },
    backgroundText: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        paddingHorizontal: 20,
        borderRadius: 50, 
        backgroundColor: 'rgba(255, 255, 255, 0.4)',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    inputText: {
        flex: 1,
        fontSize: 18,
        color: '#fff'
    }
});

export default SearchInput;