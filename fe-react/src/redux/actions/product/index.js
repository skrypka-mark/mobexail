import { api } from '../../../axios';
import { setCurrentProduct } from '../../reducers/productReducer';

export const getCurrentProduct = id => async dispatch => {
    const { data } = await api({ uri: `product/${id}` });
    dispatch(setCurrentProduct(data));
};
