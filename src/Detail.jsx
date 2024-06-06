import React from "react";

function Detail(props) {
   return (
     <div className="container">
       <h1> Weather App</h1>
       <div className="weather-info">
         <h2 id="city">Place : {props.cityName} - {props.country}</h2>
         <h2 id="temperature">Temperature : {props.temp}°C</h2>
         <h3 id="description">Weather : {props.weather}</h3>
         <h3 id="description"> Wind Speed : {props.windSpeed}</h3>
       </div>
     </div>
   ); 
}export default Detail;