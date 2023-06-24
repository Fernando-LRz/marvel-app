import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
    title: string;
}

const FlatListHeader = ({ title }: Props) => {
    return (
        <View style={ styles.container }>
            <Text style={ styles.title }>{ title }</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: -5,
        marginBottom: 10,
        marginLeft: 8
    },
    title: {
        fontSize: 30, 
        color: '#fff',
        fontWeight: 'bold'
    }
});

export default FlatListHeader;