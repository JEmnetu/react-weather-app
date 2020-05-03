import React from 'react';

const Card = (props) => {
  return (
    <div className=" mx-sm-1 my-sm-1ß col-md-2 col-xs-12">
      <div className="card">
        <div className="card-block">
          <div className="card-title">
            <h4>{props.date}</h4>
          </div>
          <div className="card-text">
            <p>{props.description}</p>
            <img id="cardWeatherIcon" alt='weather icon' src={'http://openweathermap.org/img/wn/' + props.icon + '@2x.png'}></img>
            <h5>{props.temp}&deg;F</h5>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Card;