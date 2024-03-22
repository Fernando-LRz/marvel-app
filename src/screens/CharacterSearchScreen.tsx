import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import useCharacters from '../hooks/useCharacters';
import SearchInput from '../components/SearchInput';
import SearchOptionCharacter from '../components/SearchOptionCharacter';
import FlatListHeader from '../components/FlatListHeader';
import SearchOptionsFlatListFooter from '../components/SearchOptionsFlatListFooter';

const CharacterSearchScreen = () => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const { 
        searchCharacters, 
        characterOptionList, 
        clearCharacterOptionList, 
        isOptionLimitReached,
        isLoading
    } = useCharacters();

    useEffect(() => {
        clearCharacterOptionList();
        
        if(!searchTerm) return;
        searchCharacters(searchTerm, true);

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
                renderItem={ ({item}) => <SearchOptionCharacter character={ item } /> }

                ListHeaderComponent={ <FlatListHeader title={ searchTerm }/> }
                ListFooterComponent={
                    ( searchTerm && !isOptionLimitReached && !isLoading ) 
                    ? <SearchOptionsFlatListFooter onPress={ searchCharacters } onPressValue={ searchTerm }/> 

                    : ( searchTerm && isLoading )
                        ? <ActivityIndicator size={ 35 } color="#fff" style={{ marginVertical: 28 }} />
                        : <></>
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 10
    },
    footer: {
        alignItems: 'center'
    }
});

export default CharacterSearchScreen;