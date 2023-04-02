import { api } from '../../../axios';
import { setCategory } from '../../reducers/categoryReducer';

export const getCategory = id => async dispatch => {
    const { data } = await api({ uri: `category/${id}` });
    dispatch(setCategory(data));
};
