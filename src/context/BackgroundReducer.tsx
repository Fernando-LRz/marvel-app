export type BackgroundAction = 
    | { type: 'setHomeScreenBackground' }
    | { type: 'setSearchScreenBackground' };

export interface BackgroundState {
    current: 'homeScreen' | 'searchScreen';
};

export const homeScreenBackground: BackgroundState = {
    current: 'homeScreen'
};

export const searchScreenBackground: BackgroundState = {
    current: 'searchScreen'
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