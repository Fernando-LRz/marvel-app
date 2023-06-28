import React, { useEffect, useContext } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import useCharacters from '../hooks/useCharacters';
import SearchOptionCharacter from '../components/SearchOptionCharacter';
import SearchOptionsFlatListFooter from '../components/SearchOptionsFlatListFooter';

import { CurrentScreenContext } from '../context/CurrentScreenContext';

interface Props extends BottomTabScreenProps<any, any>{};

const SearchCharacterScreen = ({ navigation }: Props) => {
    const { setSearchCharacterScreen } = useContext(CurrentScreenContext);

    const { testArray, searchCharacters } = useCharacters();

    useEffect(() => {
        navigation.addListener('focus', setSearchCharacterScreen);
    }, []);

    return (
        <View style={ styles.container }>
            <FlatList 
                data={ testArray }
                // keyExtractor={ ( character, index ) => (character.id + index).toString() }
                keyExtractor={ ( character, index ) => (index).toString() }
                showsVerticalScrollIndicator={ false }
                renderItem={ ({ item }) => <SearchOptionCharacter /> }

                ListFooterComponentStyle={ styles.footer }
                ListFooterComponent={ 
                    (testArray.length > 0) 
                    ? <SearchOptionsFlatListFooter onPress={ searchCharacters }/> 
                    : undefined
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

export default SearchCharacterScreen;