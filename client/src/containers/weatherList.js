import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts';
import GoogleMap from '../components/googleMaps';
import CheckUser from '../components/checkUser';

class WeatherList extends Component {


	renderWeather(cityData) {
	
		cityData = cityData.info || cityData;

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
			<div key={name} className="render-data">
				<div>
					<div className="save-city">
						<p>{name}</p>
						<CheckUser city={name} selectedCity={cityData}/>
					</div>	
					<GoogleMap 
                        isMarkerShown={false}
                        center={{ lat: lat, lng: lon }}   
                        googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCGGw0KAkK5iw2vwCSucTO1vJrQSwUxucA"
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `220px` }} />}
                        mapElement={<div style={{ height: `90%` }} />}
                 	/>
					<div className="chart-info">					 
						<div>Temperature (°F)</div>
						<div>Pressure (hPa)</div>
						<div>Humidity (%)</div>
					</div>
				 </div>
				<div className="render-charts">
					<div><Chart data={newTemps} color="red" units="°F"/></div>
					<div><Chart data={pressure} color="orange" units="hPa"/></div>
					<div><Chart data={humidity} color="green" units="%"/></div>
				</div>
			</div>
		)
	}

    render(){
		if(this.props.url === '/savedInfo'){
			if(this.props.saved){
	
				return(
					<div >
						{this.props.saved.map(this.renderWeather)}
					
					</div>
				)
			} else {
				return (<div>Loading</div>)
			}
		}
        return(
            <div className="data-display">
				{this.props.weather.map(this.renderWeather)}
			</div>
        );
    }
}

function mapStateToProps(state){
	return{
		weather: state.weather,
	}
}

export default connect(mapStateToProps)(WeatherList);

