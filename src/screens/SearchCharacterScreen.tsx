import React, { useEffect, useContext } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { CurrentScreenContext } from '../context/CurrentScreenContext';

interface Props extends BottomTabScreenProps<any, any>{};

const SearchCharacterScreen = ({ navigation }: Props) => {
    const { setSearchScreen } = useContext(CurrentScreenContext);

    useEffect(() => {
        navigation.addListener('focus', setSearchScreen);
    }, []);

    return (
        <KeyboardAvoidingView 
            style={ styles.container }
            behavior="height"
        >
            <ScrollView>
                <TouchableWithoutFeedback 
                    onPress={ Keyboard.dismiss }
                >
                    
                    <Text style={{ 
                        textAlign: 'center', 
                        color: '#fff' 
                    }}>SearchCharacterScreen</Text>  

                </TouchableWithoutFeedback>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default SearchCharacterScreen;