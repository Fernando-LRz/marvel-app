import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';
import FlatListHeader from '../components/FlatListHeader';
import FlatListFooter from '../components/FlatListFooter';

import { CurrentScreenContext } from '../context/CurrentScreenContext';

interface Props extends BottomTabScreenProps<any, any>{};

const CharacterHomeScreen = ({ navigation }: Props) => {
    const { setHomeScreen } = useContext(CurrentScreenContext);
    const { characterList, isLoading, loadCharacters } = useCharacters();

    useEffect(() => {
        navigation.addListener('focus', setHomeScreen);
    }, []);

    return (
        <View style={ styles.container }>
            <FlatList 
                data={ characterList }
                keyExtractor={ ( character, index ) => (character.id + index).toString() }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ({ item }) => <CharacterCard {...item} /> }

                // onEndReached={ loadCharacters }
                // onEndReachedThreshold={ 0.6 }

                ListHeaderComponent={ <FlatListHeader title="Characters"/> }
                ListFooterComponent={ <FlatListFooter /> }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    }
});

export default CharacterHomeScreen;