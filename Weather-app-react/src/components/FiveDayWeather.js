import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import API from '../settings/Api'; 
import {ApiKey, WeatherIcons} from '../settings/ApiKey';
import ReactCountryFlag from "react-country-flag";
import Loading from './Loading';


const FiveDayWeather = () => {
    const {lat, lon} = useParams();
    const [weather,setWeather] = useState("");
    const navigate = useNavigate();

    const getFiveWeather = async(lat,lon) =>{

        let info = await API.get(`data/2.5/forecast?lat=${lat.slice(1)}&lon=${lon.slice(1)}&units=metric&appid=${ApiKey}`);
        setWeather(info.data);
    }


    useEffect(()=>{
        getFiveWeather(lat,lon);
    },[])

    const handleBack = e =>{
        navigate("/");
    }
    

    return ( 
        <>
           {weather? (
               <div className='fiveDayCard'>
                   <h1>{weather.city.name} {weather.city.country} <ReactCountryFlag countryCode={weather.city.country} svg /></h1>
                    
                    <ul>
                        {weather.list
                        .filter((el,i)=>i%8===0)
                        .map((item,index) =>(
                            <li key={index}><h3>{item.dt_txt.slice(0,10)}</h3> <img src={`${WeatherIcons}${item.weather[0].icon}@4x.png`} /> <span>{Math.floor(item.main.temp_min)} C° | {Math.ceil(item.main.temp_max)} C°</span></li>
                        ))}
                    </ul>
                    <button onClick={handleBack}>Back</button>
               </div>
           ) : <Loading/>}

        </>
     );
}


 
export default FiveDayWeather ;