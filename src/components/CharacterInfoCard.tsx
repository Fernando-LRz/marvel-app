import React from 'react';
import { View, ScrollView, StyleSheet, Text, FlatList } from 'react-native';
import { Character } from '../interfaces/characterInterfaces';
import { Comic } from '../interfaces/characterComicsInterfaces';
import CharacterComicCard from './CharacterComicCard';

interface Props {
    character: Character;
    comicList: Comic[];
}

const CharacterInfoCard = ({ character, comicList }: Props) => {

    return (
        <View style={ styles.container }>
            <ScrollView
                showsVerticalScrollIndicator={ false }
            >
                <Text style={ styles.label }>Description</Text>
                <Text style={ styles.text }>
                    { (character.description) ? character.description : 'No description' }
                </Text>

                <Text style={ styles.label }>Modified</Text>
                <Text style={ styles.text }>{ character.modified.split('T')[0] }</Text>

                <Text style={ styles.label }>Comics</Text>
                <FlatList 
                    data={ comicList }
                    keyExtractor={ ( comic, index ) => (comic.id.toString() + index.toString()) }
                    renderItem={ ({ item }) => <CharacterComicCard comic={ item }/> }                
                    horizontal={ true }
                    showsHorizontalScrollIndicator={ false }
                    style={{ marginTop: 10 }}
                />

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(54,2,150,0.8)',
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 20,
        borderRadius: 20
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


export default CharacterInfoCard