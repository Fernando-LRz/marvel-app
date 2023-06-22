export type BackgroundAction = 
    | { type: 'setHomeScreenBackground' }
    | { type: 'setSearchScreenBackground' };

export interface BackgroundState {
    currentBackground: 'homeScreen' | 'searchScreen';
};

export const homeScreenBackground: BackgroundState = {
    currentBackground: 'homeScreen'
};

export const searchScreenBackground: BackgroundState = {
    currentBackground: 'searchScreen'
};

export const BackgroundReducer = ( state: BackgroundState, action: BackgroundAction ): BackgroundState => {
    switch( action.type ) {
        case 'setHomeScreenBackground':
            return { ...homeScreenBackground }
        case 'setSearchScreenBackground': 
            return { ...searchScreenBackground }
        default: 
            return state;
    }
};