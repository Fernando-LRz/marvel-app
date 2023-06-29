import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import useCharacters from '../hooks/useCharacters';
import SearchInput from '../components/SearchInput';
import SearchOptionCharacter from '../components/SearchOptionCharacter';
import FlatListHeader from '../components/FlatListHeader';

const SearchCharacterScreen = () => {
    const { searchCharacters, characterOptionList } = useCharacters();
    const [ searchTerm, setSearchTerm ] = useState('');

    useEffect(() => {
        if(searchTerm.length === 0) return; 
        searchCharacters(searchTerm);
    }, [ searchTerm ]);

    return (
        <View style={ styles.container }>
            <SearchInput 
                onDebounce={ setSearchTerm }
                placeholder="Search characters"
            />

            <FlatList 
                data={ characterOptionList }
                keyExtractor={ ( character, index ) => (character.id + index).toString() }
                showsVerticalScrollIndicator={ false }
                numColumns={ 1 }
                renderItem={ ({ item }) => <SearchOptionCharacter {...item} /> }

                ListHeaderComponent={ <FlatListHeader title={ searchTerm }/> }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10
    },
    footer: {
        alignItems: 'center'
    }
});

export default SearchCharacterScreen;