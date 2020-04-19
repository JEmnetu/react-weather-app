import React, { Component } from 'react';
import './App.css';
import './components/NavBar';
import Axios from 'axios';
import NavBar from './components/NavBar';

class App extends Component {
  state = {  }
  componentDidMount(){
  this.getWeather();
  }
  getWeather = async() =>{
    await Axios.get(`https://api.openweathermap.org/data/2.5/forecast?id=4366647&units=imperial&appid=${process.env.REACT_APP_API_KEY}`)
    .then(res=>console.log(res));
  }
  render() { 
    return ( 
      <div className="App">
      <NavBar>JEH Weather App</NavBar>
    </div>
     );
  }
}
 
export default App;
