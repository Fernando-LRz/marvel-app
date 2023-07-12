import React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList } from 'react-native';

import ComicCharacterCard from './ComicCharacterCard';

import { Comic } from '../interfaces/comicInterfaces';
import { Character } from '../interfaces/comicCharactersInterfaces';

interface Props {
    comic: Comic;
    characterList: Character[];
    isLoading: boolean;
}

const ComicInfoCard = ({ comic, characterList, isLoading }: Props) => {

    return (
        <View style={ styles.container }>
            <ScrollView
                showsVerticalScrollIndicator={ false }
            >
                <Text style={ styles.label }>Description</Text>
                <Text style={ styles.text }>
                    { (!comic.description || comic.description === '#N/A') ? 'Not available' : comic.description }
                </Text>

                <Text style={ styles.label }>Modified</Text>
                <Text style={ styles.text }>
                    { (comic.modified.startsWith('-')) 
                        ? comic.modified.split('T')[0].substring(1)
                        : comic.modified.split('T')[0]
                    }
                </Text>

                <Text style={ styles.label }>Characters</Text>
                {
                    isLoading && <Text style={ styles.text }>Loading...</Text>
                }
                {
                    ( !isLoading && characterList.length === 0 ) 
                    ?   <Text style={ styles.text }>Not available</Text>
                    :   <FlatList 
                            data={ characterList }
                            keyExtractor={ ( comic, index ) => (comic.id.toString() + index.toString()) }
                            renderItem={ ({ item }) => <ComicCharacterCard character={ item }/> }                
                            horizontal={ true }
                            showsHorizontalScrollIndicator={ false }
                            style={{ marginTop: 10 }}
                        />
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(54,2,150,0.8)',
        paddingTop: 15,
        paddingBottom: 20,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 20,
        marginBottom: 10
    },
    label: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '700'
    },
    text: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'justify',
        fontWeight: '600',
        marginTop: 10,
        marginBottom: 15
    }
});


export default ComicInfoCard;