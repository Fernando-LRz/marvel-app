import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { BackgroundContext } from '../../context/BackgroundContext';

interface Props extends BottomTabScreenProps<any, any>{};

const ComicHomeScreen = ({ navigation }: Props) => {

    const { setHomeScreenBackground } = useContext( BackgroundContext );

    useEffect(() => {
        navigation.addListener('focus', setHomeScreenBackground);
    }, []);

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