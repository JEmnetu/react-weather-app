import React, { Component } from 'react';
import Card from '../components/Card';
import list from '../list.json';

class Forecast extends Component {
    state = {  }
    render() { 
        return ( 
        <div id="forecast-div">
            <h1>5 Day Forecast</h1>
                <div id="card-group">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
        </div> );
    }
}
 
export default Forecast;