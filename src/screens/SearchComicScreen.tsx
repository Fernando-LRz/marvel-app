import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import useComics from '../hooks/useComics';
import SearchInput from '../components/SearchInput';
import SearchOptionComic from '../components/SearchOptionComic';
import FlatListHeader from '../components/FlatListHeader';

const SearchComicScreen = () => {
    const { searchComics, comicOptionList, clearComicOptionList } = useComics();
    const [ searchTerm, setSearchTerm ] = useState('');

    useEffect(() => {

        if(!searchTerm) {
            clearComicOptionList();
            return;
        }

        searchComics(searchTerm);
        
    }, [ searchTerm ]);

    return (
        <View style={ styles.container }>
            <SearchInput 
                onDebounce={ setSearchTerm }
                placeholder="Search comics"
            />

            <FlatList 
                data={ comicOptionList }
                keyExtractor={ ( comic, index ) => (comic.id.toString() + index.toString()) }
                showsVerticalScrollIndicator={ false }
                numColumns={ 1 }
                style={{ marginTop: 70, marginBottom: 30 }}
                renderItem={ ({item}) => <SearchOptionComic {...item} /> }

                ListHeaderComponent={ <FlatListHeader title={ searchTerm }/> }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 20
    },
    footer: {
        alignItems: 'center'
    }
});

export default SearchComicScreen;