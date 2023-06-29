import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import useCharacters from '../hooks/useCharacters';
import SearchInput from '../components/SearchInput';
import SearchOptionCharacter from '../components/SearchOptionCharacter';
import FlatListHeader from '../components/FlatListHeader';

const SearchCharacterScreen = () => {
    const { searchCharacters, characterOptionList, clearCharacterOptionList } = useCharacters();
    const [ searchTerm, setSearchTerm ] = useState('');

    useEffect(() => {

        if(!searchTerm) {
            clearCharacterOptionList();
            return;
        }

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
                keyExtractor={ ( character, index ) => (character.id.toString() + index.toString()) }
                showsVerticalScrollIndicator={ false }
                numColumns={ 1 }
                style={{ marginTop: 70, marginBottom: 30 }}
                renderItem={ ({item}) => <SearchOptionCharacter {...item} /> }

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