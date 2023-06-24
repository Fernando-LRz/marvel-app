export type CurrentScreenAction = 
    | { type: 'setHomeScreen' }
    | { type: 'setSearchScreen' };

export interface CurrentScreenState {
    current: 'homeScreen' | 'searchScreen';
};

export const homeScreen: CurrentScreenState = {
    current: 'homeScreen'
};

export const searchScreen: CurrentScreenState = {
    current: 'searchScreen'
};

export const CurrentScreenReducer = ( state: CurrentScreenState, action: CurrentScreenAction ): CurrentScreenState => {
    switch( action.type ) {
        case 'setHomeScreen':
            return { ...homeScreen }
        case 'setSearchScreen': 
            return { ...searchScreen }
        default: 
            return state;
    }
};