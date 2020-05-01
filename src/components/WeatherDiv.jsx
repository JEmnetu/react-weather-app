import React from 'react';

const WeatherDiv = (props) => {
    return ( 
        <div id='weatherDiv' style={{backgroundColor:'rgb(17, 73, 239)'}}>
            <h1>{props.city} {props.date}</h1>
            <ul id="currentForecast">
                <li> <img alt='weather icon' src={'http://openweathermap.org/img/wn/' + props.icon + '@2x.png'}></img></li>
                <li> <span id="temp">{props.temp}&deg;</span></li>
                <li><h2>Humidity:{props.humidity}%</h2></li>
                <li><h2>Wind: {props.windSpeed} mph</h2></li>
            </ul> 
        </div>
     );
}
 
export default WeatherDiv;