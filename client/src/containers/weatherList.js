import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts';
import GoogleMap from '../components/googleMaps'

class WeatherList extends Component {

	renderWeather(cityData) {
		const name = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const newTemps = temps.map((each) => {
            const newTemp = each * (9/5) -459.67;
            return Math.floor(newTemp)
        })

		const pressure = cityData.list.map(weather => weather.main.pressure);
		const humidity = cityData.list.map(weather => weather.main.humidity);
		const { lon, lat }= cityData.city.coord
		

		return(
			<tr key={name}>
				<td><GoogleMap 
                        isMarkerShown={false}
                        center={{ lat: lat, lng: lon }}   
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGGw0KAkK5iw2vwCSucTO1vJrQSwUxucA"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `220px` }} />}
                        mapElement={<div style={{ height: `90%` }} />}
                 /></td>
				<td><Chart data={newTemps} color="red" units="°F"/></td>
				<td><Chart data={pressure} color="orange" units="hPa"/></td>
				<td><Chart data={humidity} color="green" units="%"/></td>
			</tr>
		)
	}

    render(){
			
        return(
            <table className="table table-hover">
							<thead>
								<tr>
									<th>City</th>
									<th>Temperature (°F)</th>
									<th>Pressure (hPa)</th>
									<th>Humidity (%)</th>
								</tr>
							</thead>
							<tbody>
								{this.props.weather.map(this.renderWeather)}
							</tbody>
            </table>
        );
    }
}

function mapStateToProps(state){
	return{
		weather: state.weather
	}
}

export default connect(mapStateToProps)(WeatherList);