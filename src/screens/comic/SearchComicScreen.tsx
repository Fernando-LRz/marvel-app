import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SearchComicScreen = () => {
    return (
        <View style={ styles.container }>
            <Text>SearchComicScreen</Text>
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

export default SearchComicScreen;