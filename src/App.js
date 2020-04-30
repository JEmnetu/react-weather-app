import React, { Component } from 'react';
import './App.css';
import './components/NavBar';
import Axios from 'axios';
import NavBar from './components/NavBar';
import WeatherDiv from './components/WeatherDiv';
import InputBox from './components/InputBox';
import Button from './components/Button';
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
      
      
      //  console.log(this.state)
     
   
    });
  }
  // onchange = () =>{
  //   console.log()
  // }
  render() { 
    return ( 
      <div className="App">
        <NavBar>
          <div id='nav-wrapper'>
          <h2 id="main-heading">HabteJ Weather App</h2>
          <form onSubmit={(e)=>{
            e.preventDefault();
            // console.log(e.target[0].value)
            this.setState({city:e.target[0].value}, ()=>{
              this.getWeather();
            });
           
            // this.getWeather();
          }}>
              <InputBox type='text' name='city'/>
              <Button type='submit'>Submit</Button>
            </form>
            </div>
        </NavBar>
        <WeatherDiv city={this.state.city} 
                    temp={this.state.temp}
                    windSpeed={this.state.windSpeed}
                    date={this.state.date}
                    humidity={this.state.humidity}
                    icon={this.state.icon}
        />

        <Forecast>
        {/* {list.map((l) =>{
          return <Card>gkuy</Card>
        } ) } */}
       
          
        </Forecast>

                  
    </div>
     );
  }
}
 
export default App;
