import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import useComics from '../hooks/useComics';
import ComicCard from '../components/ComicCard';
import FlatListHeader from '../components/FlatListHeader';
import FlatListFooter from '../components/FlatListFooter';

interface Props extends BottomTabScreenProps<any, any>{};

const ComicHomeScreen = ({ navigation }: Props) => {
    const { comicList, loadComics } = useComics();

    return (
        <View style={ styles.container }>
            <FlatList 
                data={ comicList }
                keyExtractor={ ( character, index ) => (character.id + index).toString() }
                showsVerticalScrollIndicator={ false }
                numColumns={ 2 }
                renderItem={ ({ item }) => <ComicCard {...item} /> }

                // onEndReached={ loadComics }
                // onEndReachedThreshold={ 0.6 }

                ListHeaderComponent={ <FlatListHeader title="Comics"/> }
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

export default ComicHomeScreen;