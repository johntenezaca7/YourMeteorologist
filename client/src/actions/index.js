import axios from 'axios';
import { FETCH_WEATHER } from './types';

const API_KEY = '113783f37ed36c4f034dac31031153e3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);


    return {
        type: FETCH_WEATHER,
        payload:request
    }
}