import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import useCharacters from '../hooks/useCharacters';
import CharacterCard from '../components/CharacterCard';
import FlatListHeader from '../components/FlatListHeader';
import FlatListFooter from '../components/FlatListFooter';

const CharacterHomeScreen = () => {
    const { characterList, loadCharacters } = useCharacters();

    return (
        <View style={ styles.container }>
            <FlatList 
                data={ characterList }
                keyExtractor={ ( character, index ) => (character.id.toString() + index.toString()) }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ({ item }) => <CharacterCard character={ item } /> }

                onEndReached={ loadCharacters }
                onEndReachedThreshold={ 0.6 }

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