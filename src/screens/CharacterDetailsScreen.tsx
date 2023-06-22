import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CharacterDetailsScreen = () => {
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