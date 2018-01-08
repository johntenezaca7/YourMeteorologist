import axios from 'axios';
import { FETCH_WEATHER, FETCH_USER, FETCH_USERS_SAVED_INFO, PASS_URL } from './types';

const API_KEY = '113783f37ed36c4f034dac31031153e3';
const ROOT_URL = `//api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const fetchWeather = (city) => {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload:request
    }
}

export const fetchuUser = () => {
    const request = axios.get('/api/current_user');

    return {
        type: FETCH_USER,
        payload: request
    }
}

export const fetchSavedInfo = () => {
    const request = axios.get('/api/savedInfo');

    return {
        type: FETCH_USERS_SAVED_INFO,
        payload: request
    }
}

export const passUrl = (url) => {
    return {
        type:PASS_URL,
        payload: url
    }
}