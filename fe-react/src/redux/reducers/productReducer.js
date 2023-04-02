import {
    SET_PRODUCTS,
    SET_CURRENT_PRODUCT
} from '../constants';

const initialState = {
    products: [],
    currentProduct: {}
};

export const productReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        case SET_CURRENT_PRODUCT:
            return {
                ...state,
                currentProduct: action.payload
            }
        default:
            return state;
    }
};

export const setProducts = payload => ({ type: SET_PRODUCTS, payload });
export const setCurrentProduct = payload => ({ type: SET_CURRENT_PRODUCT, payload });
