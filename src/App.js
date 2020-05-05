import React, { Component } from "react";
import "./App.css";
import "./components/NavBar";
import Axios from "axios";
import NavBar from "./components/NavBar";
import WeatherDiv from "./components/WeatherDiv";
import Card from './components/Card';

import Forecast from "./components/Forecast";

class App extends Component {
  state = {
    city: "Baltimore",
    temp: undefined,
    humidity: undefined,
    windSpeed: undefined,
    icon: undefined,
    date: undefined,
    forecast: [],
  };

  componentDidMount() {
    this.getWeather();
    this.getForecast();
  }

  //Retrieves current weather forecast
  getWeather = async () => {
    await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      
      //Format current date
      let rawDate = new Date(res.data.sys.sunrise * 1000);
      let d = rawDate.getDate();
      let m = rawDate.getMonth() + 1;
      let y = rawDate.getFullYear();
      let currentDate = m + "/" + d + "/" + y;
      this.setState({
        temp: parseInt(res.data.main.temp),
        humidity: res.data.main.humidity,
        windSpeed: res.data.wind.speed,
        icon: res.data.weather[0].icon,
        date: currentDate,
      });
    });
    this.getForecast();
  };

  //Retrieves 5-Day Forecast

  getForecast = async () => {
    await Axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${this.state.city}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      const dailyData = res.data.list.filter((reading) => {
        return reading.dt_txt.includes("18:00:00");
      });

      this.setState({
        forecast: dailyData,
      });
    });
  };

  //Updates component state with new city, updates weather
  updateWeather(e) {
    e.preventDefault();
    e.persist();
    let newCity = e.target[0].value;
    this.setState(
      {
        city: newCity,
      },
      () => {
        this.getWeather();
      }
    );
  }

  render() {
    return (
      <div className="App">
        <NavBar changeText={this.updateWeather.bind(this)} />
        {/* <button className='btn btn-outline-secondary' onClick={this.getForecast}>Forecast</button> */}

        <WeatherDiv
          city={this.state.city}
          temp={this.state.temp}
          windSpeed={this.state.windSpeed}
          date={this.state.date}
          humidity={this.state.humidity}
          icon={this.state.icon}
        />

        <div className="container text-center FC-Div">
          <h1>5-Day Forecast</h1>
          <h5>{this.state.city}</h5>
          <div className="row row-cols-1 row-cols-sm-1 row-cols-md-6 justify-content-center">
            {this.state.forecast.map(data => {
               //Format current date
      let rawDate = new Date(data.dt * 1000);
      let d = rawDate.getDate();
      let m = rawDate.getMonth() + 1;
      let y = rawDate.getFullYear();
      let currentDate = m + "/" + d + "/" + y;
      let img = data.weather[0].icon;
      let description = data.weather[0].main
             return <Card
             date={currentDate}
             description={description}
             icon={img}
              temp={parseInt(data.main.temp)}

             />
            })}
          </div>
        </div>
      </div>
    );
  }
}
export default App;
