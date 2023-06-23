import React, { useContext, useEffect } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { BackgroundContext } from '../context/BackgroundContext';

interface Props extends BottomTabScreenProps<any, any>{};

const SearchCharacterScreen = ({ navigation }: Props) => {

    const { setSearchScreenBackground } = useContext( BackgroundContext );

    useEffect(() => {
        navigation.addListener('focus', setSearchScreenBackground);
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