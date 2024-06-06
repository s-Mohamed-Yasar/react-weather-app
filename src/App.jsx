import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Detail from "./Detail";




const apiAddress = import.meta.env.VITE_REACT_APP_API_ADDRESS
const apiId = import.meta.env.VITE_REACT_APP_API_ID
const d = new Date().getFullYear()

function App() {
  const [city, setCity] = useState("")
  const [detail, setDeatail] = useState(false);
  const [response, setResponse] = useState([{
    country:"",
    cityName:"",
    temp:"",
    weather:"",
    windSpeed:"",
  }])

function handleChange(event){
const {name, value} = event.target
setCity(value)
}

async function submitData(event){
  event.preventDefault()
  try {
    const apiResponse = await axios.get(
      apiAddress,
      {
        params: {
          q: city,
          appid: apiId,
        },
      }
    );
    //console.log((((apiResponse.data.main.temp - 32) * 5) / 9).toFixed(2));

      setResponse(() =>{
        return {
          country:apiResponse.data.sys.country,
          cityName: apiResponse.data.name,
          temp: (apiResponse.data.main.temp - 273.15).toFixed(2),
          weather: apiResponse.data.weather[0].main,
          windSpeed: apiResponse.data.wind.speed
        };
        
      });
      
  } catch (error) {
    console.error(error.message);
  }

}
function getDetail() {
  setDeatail(true);
}
  return (
    <div>
      <div className="search-box" style={detail ? { marginTop: "5%" } : null}>
        <form onClick={submitData}>
          <input
            onChange={handleChange}
            name="city"
            value={city}
            type="text"
            id="search-city"
            placeholder="Enter City Name"
          />
          <button onClick={getDetail} type="submit" id="search-button">
            Search
          </button>
        </form>
      </div>
      {detail && (
        <Detail
          cityName={response.cityName}
          temp={response.temp}
          windSpeed={response.windSpeed}
          weather={response.weather}
          country={response.country}
        />
      )}
      <footer>{d} © All rights reserved by mohamed yasar</footer>
    </div>
  );
}

export default App
