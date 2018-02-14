import { combineReducers } from 'redux';
import WeatherReducer from './weather_reducer';
import AuthUser from './fetchUser_reducer';
import SavedCities from './savedInfo_reducer';
import PassUrl from './passUrl_reducer';

const rootReducer = combineReducers({
    weather: WeatherReducer,
    authUser: AuthUser,
    savedCities: SavedCities,
    url: PassUrl
})

export default rootReducer