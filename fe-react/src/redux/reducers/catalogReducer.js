import { SET_CATALOG } from '../constants';

const initialState = {
    catalog: []
};

export const catalogReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_CATALOG:
            return {
                ...state,
                catalog: action.payload
            }
        default:
            return state;
    }
};

export const setCatalog = payload => ({ type: SET_CATALOG, payload });
