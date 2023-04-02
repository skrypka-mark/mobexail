import { combineReducers } from 'redux';
import { catalogReducer } from './catalogReducer';
import { productReducer } from './productReducer';
import { navigationReducer } from './navigationReducer';
import { categoryReducer } from './categoryReducer';

const rootReducer = combineReducers({
    catalogReducer,
    productReducer,
    navigationReducer,
    categoryReducer
});

export default rootReducer;