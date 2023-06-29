import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import useCharacters from '../hooks/useCharacters';
import SearchInput from '../components/SearchInput';
import SearchOptionCharacter from '../components/SearchOptionCharacter';
import FlatListHeader from '../components/FlatListHeader';
import SearchOptionsFlatListFooter from '../components/SearchOptionsFlatListFooter';

const SearchCharacterScreen = () => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const { 
        searchCharacters, 
        characterOptionList, 
        clearCharacterOptionList, 
        isOptionLimitReached
    } = useCharacters();

    useEffect(() => {
        clearCharacterOptionList();
        
        if(!searchTerm) return;
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
                ListFooterComponent={
                    (searchTerm && !isOptionLimitReached ) 
                    ? <SearchOptionsFlatListFooter onPress={ searchCharacters } onPressValue={ searchTerm }/> 
                    : <></>
                }
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