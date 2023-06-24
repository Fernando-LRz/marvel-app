import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { Character } from '../interfaces/characterInterfaces';

interface Props extends Character{};

const CharacterCard = ({ name, thumbnail }: Props) => {
    const imageUri = thumbnail.path + '.' + thumbnail.extension;

    return (

        // <TouchableOpacity 
        //     style={ styles.container }
        //     activeOpacity={ 0.8 }
        // >
        //     <Image 
        //         source={{ uri: imageUri }}
        //         style={ styles.image }
        //     />
        //     <View style={{ width: '45%' }}>
        //         <Text style={ styles.name }>{ name }</Text>
        //     </View>
        // </TouchableOpacity>

        <View style={ styles.container }>
            <Text style={ styles.name } numberOfLines={ 1 }>
                { name }
            </Text>

            <TouchableOpacity
                activeOpacity={ 0.8 }
            >
                <Image 
                    source={{ uri: imageUri }}
                    style={ styles.bgImage }
                />
            </TouchableOpacity>
        </View>
    );
};

// const styles = StyleSheet.create({
//     container: {
//         width: 185, 
//         height: 120,
//         flexDirection: 'row',
//         justifyContent: 'space-around',
//         alignItems: 'center',
//         marginHorizontal: 8,
//         marginVertical: 8,
//         borderRadius: 15,
//         backgroundColor: 'rgba(135, 135, 135, 0.6)'
//     },
//     image: {
//         width: 70,
//         height: 70,
//         borderRadius: 100
//     },
//     name: {
//         color: '#fff',
//         fontSize: 19,
//         fontWeight: 'bold',
//     }
// });

const styles = StyleSheet.create({
    container: {
        width: '45%',
        marginHorizontal: 8,
        marginVertical: 8,
        overflow: 'hidden'
    },
    bgImage: {
        width: 185, 
        height: 120,
        borderRadius: 15,
        overflow: 'hidden'
    },
    name: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginBottom: 5,
        // textAlign: 'center'
    }
});

export default CharacterCard;