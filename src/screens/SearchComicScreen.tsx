import React, { useEffect, useContext } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import useComics from '../hooks/useComics';
import SearchOptionComic from '../components/SearchOptionComic';
import SearchOptionsFlatListFooter from '../components/SearchOptionsFlatListFooter';

import { CurrentScreenContext } from '../context/CurrentScreenContext';

interface Props extends BottomTabScreenProps<any, any>{};

const SearchComicScreen = ({ navigation }: Props) => {

    const { setSearchComicScreen } = useContext(CurrentScreenContext);

    const { testArray, searchComics } = useComics();

    useEffect(() => {
        navigation.addListener('focus', setSearchComicScreen);
    }, []);

    return (
        <View style={ styles.container }>
            <FlatList 
                data={ testArray }
                // keyExtractor={ ( comic, index ) => (comic.id + index).toString() }
                keyExtractor={ ( comic, index ) => (index).toString() }
                showsVerticalScrollIndicator={ false }
                renderItem={ ({ item }) => <SearchOptionComic /> }

                ListFooterComponentStyle={ styles.footer }
                ListFooterComponent={ 
                    <SearchOptionsFlatListFooter onPress={ searchComics }/> 
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

export default SearchComicScreen;