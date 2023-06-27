import React, { useEffect, useContext } from 'react';
import { Keyboard, KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { CurrentScreenContext } from '../context/CurrentScreenContext';

interface Props extends BottomTabScreenProps<any, any>{};

const SearchComicScreen = ({ navigation }: Props) => {

    const { setSearchComicScreen } = useContext(CurrentScreenContext);

    useEffect(() => {
        navigation.addListener('focus', setSearchComicScreen);
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
                    }}>SearchComicScreen</Text>  

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

export default SearchComicScreen;