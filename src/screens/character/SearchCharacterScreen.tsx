import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { BackgroundContext } from '../../context/BackgroundContext';

interface Props extends BottomTabScreenProps<any, any>{};

const SearchCharacterScreen = ({ navigation }: Props) => {

    const { setSearchScreenBackground } = useContext( BackgroundContext );

    useEffect(() => {
        navigation.addListener('focus', setSearchScreenBackground);
    }, []);

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