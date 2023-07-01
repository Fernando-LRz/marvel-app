import React, { useEffect, useState } from 'react';
import { StyleSheet, View, FlatList, ActivityIndicator } from 'react-native';

import useComics from '../hooks/useComics';
import SearchInput from '../components/SearchInput';
import SearchOptionComic from '../components/SearchOptionComic';
import FlatListHeader from '../components/FlatListHeader';
import SearchOptionsFlatListFooter from '../components/SearchOptionsFlatListFooter';

const ComicSearchScreen = () => {
    const [ searchTerm, setSearchTerm ] = useState('');

    const { 
        searchComics, 
        comicOptionList, 
        clearComicOptionList, 
        isOptionLimitReached,
        isLoading
    } = useComics();

    useEffect(() => {
        clearComicOptionList();

        if(!searchTerm) return;
        searchComics(searchTerm, true);
        
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
                renderItem={ ({item}) => <SearchOptionComic comic={ item } /> }

                ListHeaderComponent={ <FlatListHeader title={ searchTerm }/> }
                ListFooterComponent={
                    (searchTerm && !isOptionLimitReached && !isLoading ) 
                    ? <SearchOptionsFlatListFooter onPress={ searchComics } onPressValue={ searchTerm }/> 

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
        marginHorizontal: 20
    },
    footer: {
        alignItems: 'center'
    }
});

export default ComicSearchScreen;