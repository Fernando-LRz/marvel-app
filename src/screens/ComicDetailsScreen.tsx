import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/ComicHomeStackNavigator';

import useComics from '../hooks/useComics';
import ComicInfoCard from '../components/ComicInfoCard';

import { Character } from '../interfaces/comicCharactersInterfaces';

interface Props extends StackScreenProps<RootStackParams, 'ComicDetailsScreen'>{};

const ComicDetailsScreen = ({ route }: Props) => {

    const [ characterList, setCharacterList ] = useState<Character[]>([]);
    const { loadComicCharacters } = useComics();

    const [ isLoading, setIsLoading ] = useState<boolean>(true);

    const { comic } = route.params;
    const uri = comic.thumbnail.path + '.' + comic.thumbnail.extension;

    const loadCharacters = async () => {
        const comics = await loadComicCharacters( comic.id ); 
        setIsLoading(false);

        if(!comics) return;

        setCharacterList(comics);
    }

    useEffect(() => {
        loadCharacters();
    }, []);

    return (
        <View style={ styles.container }>
            <View style={ styles.header }>                
                <Text style={ styles.title }>{ comic.title }</Text>
                <Image 
                    source={{ uri: uri }}
                    style={ styles.image } 
                />
            </View>

           <ComicInfoCard 
                comic={ comic }
                characterList={ characterList }
                isLoading={ isLoading }
           />
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
    title: {
        fontSize: 25,
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 20
    }
});

export default ComicDetailsScreen;