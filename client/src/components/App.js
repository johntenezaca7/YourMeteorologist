import React, { Component } from 'react';

import SearchBar from '../containers/Search';
import WeatherList from  '../containers/weatherList'


class App extends Component {
  render() {
    return (
        <div>
          <SearchBar />
          <WeatherList />
        </div>
    );
  }
}

export default App;
