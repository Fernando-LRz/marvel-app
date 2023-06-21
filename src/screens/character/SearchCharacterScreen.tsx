import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchCharacterScreen = () => {
    return (
        <View style={ styles.container }>
            <Text>SearchCharacterScreen</Text>
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

export default SearchCharacterScreen;