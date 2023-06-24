import React, { useEffect, useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { CurrentScreenContext } from '../context/CurrentScreenContext';

interface Props extends BottomTabScreenProps<any, any>{};

const ComicHomeScreen = ({ navigation }: Props) => {

    const { setHomeScreen } = useContext(CurrentScreenContext);

    useEffect(() => {
        navigation.addListener('focus', setHomeScreen);
    }, []);

    return (
        <View style={ styles.container }>
            <Text style={{ color: '#fff' }}>ComicHomeScreen</Text>
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