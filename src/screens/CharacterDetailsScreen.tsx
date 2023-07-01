import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';

import { RootStackParams } from '../navigation/CharacterHomeStackNavigator';

interface Props extends StackScreenProps<RootStackParams, 'CharacterDetailsScreen'>{};

const CharacterDetailsScreen = ({ route }: Props) => {
    return (
        <View style={ styles.container }>
            <Text style={{ color: '#fff', fontSize: 25 }}>CharacterDetailsScreen</Text>
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