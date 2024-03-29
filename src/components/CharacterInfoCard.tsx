import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import CharacterComicCard from './CharacterComicCard';

import { Character } from '../interfaces/characterInterfaces';
import { Comic } from '../interfaces/characterComicsInterfaces';

interface Props {
    character: Character;
    comicList: Comic[];
    isLoading: boolean;
}

const CharacterInfoCard = ({ character, comicList, isLoading }: Props) => {

    return (
        <View style={ styles.container }>
            <Text style={ styles.label }>Description</Text>
            <Text style={ styles.text }>
                { (!character.description || character.description === '#N/A') ? 'Not available' : character.description }
            </Text>

            <Text style={ styles.label }>Modified</Text>
            <Text style={ styles.text }>
                { (character.modified.startsWith('-')) 
                    ? character.modified.split('T')[0].substring(1)
                    : character.modified.split('T')[0]
                }
            </Text>

            <Text style={ styles.label }>Comics</Text>
            {
                isLoading && <Text style={ styles.text }>Loading...</Text>
            }
            {
                ( !isLoading && comicList.length === 0 )
                ?   <Text style={ styles.text }>Not available</Text>
                :   <FlatList 
                        data={ comicList }
                        keyExtractor={ ( comic, index ) => (comic.id.toString() + index.toString()) }
                        renderItem={ ({ item }) => <CharacterComicCard comic={ item }/> }                
                        horizontal={ true }
                        showsHorizontalScrollIndicator={ false }
                        style={{ marginTop: 10 }}
                    />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 15,
        paddingBottom: 20,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 10,
    },
    label: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '700',
        textAlign: 'center'
    },
    text: {
        fontSize: 17,
        color: '#fff',
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 15,
        textAlign: 'justify'
    }
});

export default CharacterInfoCard;