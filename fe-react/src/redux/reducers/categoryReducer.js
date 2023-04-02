import {
    SET_CATEGORY
} from '../constants';

const initialState = {
    currentCategory: {}
};

export const categoryReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload
            }
        default:
            return state;
    }
};

export const setCategory = payload => ({ type: SET_CATEGORY, payload });
