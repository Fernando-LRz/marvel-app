import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/CharacterHomeStackNavigator';

import useCharacters from '../hooks/useCharacters';
import CharacterInfoCard from '../components/CharacterInfoCard';

import { Comic } from '../interfaces/characterComicsInterfaces'; 

interface Props extends StackScreenProps<RootStackParams, 'CharacterDetailsScreen'>{};

const CharacterDetailsScreen = ({ route }: Props) => {

    const [ comicList, setComicList ] = useState<Comic[]>([]);
    const { loadCharacterComics } = useCharacters();

    const { character } = route.params;
    const uri = character.thumbnail.path + '.' + character.thumbnail.extension;

    const loadComics = async () => {
        const comics = await loadCharacterComics( character.id ); 
        if(!comics) return;

        setComicList(comics);
    }

    useEffect(() => {
        loadComics();
    }, []);

    return (
        <View style={ styles.container }>

            <View style={ styles.header }>                
                <Text style={ styles.name }>{ character.name }</Text>
                <Image 
                    source={{ uri: uri }}
                    style={ styles.image } 
                />
            </View>

           <CharacterInfoCard 
                character={ character }
                comicList={ comicList }
           />

            <View style={{ alignItems: 'center' }}>
                <Text style={{ color: '#fff' }}>Footer</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 18
    },
    header: {
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 180,
        marginTop: 20
    },
    name: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 20
    }
});

export default CharacterDetailsScreen;