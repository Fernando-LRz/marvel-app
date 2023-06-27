export type CurrentScreenAction = 
    | { type: 'setHomeScreen' }
    | { type: 'setSearchCharacterScreen' }
    | { type: 'setSearchComicScreen' };

export interface CurrentScreenState {
    current: 'homeScreen' | 'characterSearchScreen' | 'comicSearchScreen';
};

export const homeScreen: CurrentScreenState = {
    current: 'homeScreen'
};

export const characterSearchScreen: CurrentScreenState = {
    current: 'characterSearchScreen'
};

export const comicSearchScreen: CurrentScreenState = {
    current: 'comicSearchScreen'
};

export const CurrentScreenReducer = ( state: CurrentScreenState, action: CurrentScreenAction ): CurrentScreenState => {
    switch( action.type ) {
        case 'setHomeScreen':
            return { ...homeScreen }
        case 'setSearchCharacterScreen': 
            return { ...characterSearchScreen }
        case 'setSearchComicScreen': 
            return { ...comicSearchScreen }
        default: 
            return state;
    }
};