import React from 'react';
import { ActivityIndicator } from 'react-native';

const FlatListFooter = () => {
    return (
        <ActivityIndicator 
            size={ 40 }
            color="#fff"
            style={{
                marginVertical: 20
            }}
        />
    );
};

export default FlatListFooter;