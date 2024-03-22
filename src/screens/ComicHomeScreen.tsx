import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import useComics from '../hooks/useComics';
import ComicCard from '../components/ComicCard';
import FlatListHeader from '../components/FlatListHeader';
import FlatListFooter from '../components/FlatListFooter';

const ComicHomeScreen = () => {
    const { comicList, loadComics } = useComics();

    return (
        <View style={ styles.container }>
            <FlatList 
                data={ comicList }
                keyExtractor={ ( comic, index ) => (comic.id.toString() + index.toString()) }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ({ item }) => <ComicCard comic={ item } /> }

                onEndReached={ loadComics }
                onEndReachedThreshold={ 0.6 }

                ListHeaderComponent={ <FlatListHeader title="Comics"/> }
                ListFooterComponent={ <FlatListFooter /> }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000',
        paddingHorizontal: 5
    }
});

export default ComicHomeScreen;