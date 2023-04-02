import axios from 'axios';

export const api = async ({ uri, method = 'get', data }) => await axios[method](`${process.env.REACT_APP_BASE_URL}${uri}`, { data });
