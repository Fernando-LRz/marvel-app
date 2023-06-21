import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ComicHomeScreen from '../../screens/comic/ComicHomeScreen';
import ComicDetailsScreen from '../../screens/comic/ComicDetailsScreen';

const Stack = createStackNavigator();

const ComicStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="ComicHomeScreen" component={ ComicHomeScreen } />
            <Stack.Screen name="ComicDetailsScreen" component={ ComicDetailsScreen } />
        </Stack.Navigator>
    );
};

export default ComicStackNavigator;