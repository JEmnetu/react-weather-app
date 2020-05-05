import React from 'react';

const WeatherDiv = (props) => {
    return ( 
        <div className="container">

        <div id='weatherDiv' className='bg-primary'>
            <h1>{props.city} {props.date}</h1>
            <ul id="currentForecast">
                <li> <img alt='weather icon' src={'http://openweathermap.org/img/wn/' + props.icon + '@2x.png'}></img></li>
                <li> <span id="temp">{props.temp}&deg;F</span></li>
                <li><h2>Humidity:{props.humidity}%</h2></li>
                <li><h2>Wind: {props.windSpeed} mph</h2></li>
            </ul> 
        </div>
        </div>
     );
}
 
export default WeatherDiv;