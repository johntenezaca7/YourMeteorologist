import React, { Component } from 'react';
import SearchBar from '../containers/Search';
import WeatherList from  '../containers/weatherList'

class SearchAndDisplay extends Component {
    render(){
            return(
                <div>
                    <div className="search-bar">
                            <SearchBar />
                    </div>
                    <div className="data-table">
                        <WeatherList />
                    </div>
                </div>
            )
        }
}

export default SearchAndDisplay;