import React, { Component } from 'react';

import SearchBar from '../containers/Search';
import WeatherList from  '../containers/weatherList'


class App extends Component {
  render() {
    return (
        <div className="app">
            <h1 className="title"> urMetrologist </h1>
            <div className="search-bar">
              <SearchBar />
            </div>
          <div className="data-table">
           <WeatherList />
          </div>
        </div>
    );
  }
}

export default App;
