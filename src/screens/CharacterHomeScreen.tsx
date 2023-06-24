import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { BackgroundContext } from '../context/BackgroundContext';
import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';
import FlatListHeader from '../components/FlatListHeader';
import FlatListFooter from '../components/FlatListFooter';

interface Props extends BottomTabScreenProps<any, any>{};

const CharacterHomeScreen = ({ navigation }: Props) => {
    
    const { setHomeScreenBackground } = useContext( BackgroundContext );
    const { characterList, isLoading, loadCharacters } = useCharacters();

    useEffect(() => {
        navigation.addListener('focus', setHomeScreenBackground);
    }, []);

    return (
        <View style={ styles.container }>
            <FlatList 
                data={ characterList }
                keyExtractor={ ( character, index ) => (character.id + index).toString() }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ({ item }) => <CharacterCard {...item} /> }

                onEndReached={ loadCharacters }
                onEndReachedThreshold={ 0.4 }

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