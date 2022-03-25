import axios from 'axios';
import { API_URL } from '../constants';

const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
});

export default axiosInstance;