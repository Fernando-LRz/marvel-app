import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ComicHomeScreen = () => {
    return (
        <View style={ styles.container }>
            <Text>ComicHomeScreen</Text>
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

export default ComicHomeScreen;