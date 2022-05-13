import React, { useEffect, useState } from 'react';
import API from '../settings/Api'; 
import {ApiKey, WeatherIcons} from '../settings/ApiKey';
import {Link} from 'react-router-dom'; 
import ReactCountryFlag from "react-country-flag";
import Loading from './Loading';

const CurrentWeather = (props) => {
    const[weather,setWeather] = useState("");

    const getCurrentWeather = async (lat,lon) =>{

        let info = await API.get(`data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${ApiKey}`)
        setWeather(info.data);

    }

    useEffect(()=>{
        getCurrentWeather(props.lat,props.lon);
    },[props])


    return ( 
       <>
       {weather? (
        <article className='currentWeatherCard'>
            <img src={`${WeatherIcons}${weather.weather[0].icon}@2x.png`} />
            <div>
                 <hgroup><Link to={`/FiveDayWeather/:${weather.coord.lat}/:${weather.coord.lon}`}><h2>{weather.name}, {weather.sys.country}</h2></Link> <ReactCountryFlag countryCode={weather.sys.country} svg /></hgroup>
                 <span><p><span id='currentTemp'>{weather.main.temp}°C</span></p> min: {Math.floor(weather.main.temp_min)}°C | max: {Math.ceil(weather.main.temp_max)}°C | wind: {weather.wind.speed} m/s | rain: {weather.clouds.all}% | {weather.main.pressure} hpa</span>
                 <p>Geo Coords: <span id='geoCoords'>[ {weather.coord.lon}, {weather.coord.lat} ]</span></p>
            </div>
        </article>
       ) : <Loading/>}
       </>
     );
}

export default CurrentWeather;