import React, { Component } from 'react';
import './App.css';
import './components/NavBar';
import Axios from 'axios';
import NavBar from './components/NavBar';
import WeatherDiv from './components/WeatherDiv';

import Forecast from './components/Forecast';


class App extends Component {
  state = { city:'Baltimore',
            temp:undefined,
            humidity:undefined,
            windSpeed:undefined,
            icon:undefined,
            date:undefined            
}
  
  componentDidMount(){
  this.getWeather()
   }

  getWeather = async() =>{
    await Axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res=>{
      console.log(res)
      //Format current date
      let rawDate = new Date((res.data.sys.sunrise) * 1000);
                let d = rawDate.getDate();
                let m = rawDate.getMonth() + 1;
                let y = rawDate.getFullYear();
                let currentDate = (m + '/' + d + '/' + y);
      this.setState({
        temp:parseInt(res.data.main.temp), 
        humidity:res.data.main.humidity,
        windSpeed:res.data.wind.speed,
        icon:res.data.weather[0].icon, 
        date:currentDate
      })
      
     
   
    });
  }

  //onChange Function Console Log
handleValue(e){
  e.preventDefault();
  e.persist();
  let newCity = e.target[0].value;
  this.setState({
    city:newCity
  }, ()=> console.log(this.state))
}

  render() { 
    return ( 
      <div className="App">
        <NavBar
          changeText={this.handleValue.bind(this)}
          weather={this.getWeather}
        
        />
          
        <WeatherDiv city={this.state.city} 
                    temp={this.state.temp}
                    windSpeed={this.state.windSpeed}
                    date={this.state.date}
                    humidity={this.state.humidity}
                    icon={this.state.icon}
                    
        />

       
                  
    </div>
     );
  }
}
 
export default App;
