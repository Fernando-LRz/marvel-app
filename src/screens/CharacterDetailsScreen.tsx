import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any,any>{}

const CharacterDetailsScreen = ({ navigation, route }: Props) => {
    return (
        <View style={ styles.container }>
            <Text>CharacterDetailsScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CharacterDetailsScreen;