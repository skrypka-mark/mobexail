import i18n from '../../locale';
import { SET_NAVIGATION } from '../constants';
import { HOME_ROUTE } from '../../router/routes';

const initialState = {
    navigation: [{
        title: i18n.t('navigation.firstStep'),
        link: HOME_ROUTE
    }]
};

export const navigationReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_NAVIGATION:
            return {
                ...state,
                navigation: [state.navigation[0], ...action.payload]
            }
        default:
            return state;
    }
};

export const setNavigation = payload => ({ type: SET_NAVIGATION, payload });
