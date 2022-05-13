import React, {useEffect, useState } from 'react';
import API from '../settings/Api'; 
import {ApiKey} from '../settings/ApiKey';
import CurrentWeather from './CurrentWeather';
import Error from './Error';

const Form = () => {

    const [cityName, setCityName] = useState("");
    const [coords, setCoords] = useState([]);

    const handleCityInfo = async city =>{

        let info = await API.get(`geo/1.0/direct?q=${city}&limit=5&appid=${ApiKey}`);
        
        setCoords(info.data);
    }

    const handleSubmit= (e) =>{
        e.preventDefault();

        handleCityInfo(cityName);
        localStorage.setItem("city",cityName);
        setCityName("");
    }


    useEffect(()=>{
        handleCityInfo(localStorage.city)
    },[])

    
    return ( 
        <div className='searchForm'>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter city name' onChange={(e)=> setCityName(e.target.value)} value={cityName} required />
                <input type="submit" value="Search" />
            </form>

           {coords.length !== 0 ? coords.map((item,index) =>(<CurrentWeather lat={item.lat} lon={item.lon} key={index}/>)) : <Error/>}
        </div>
     );
}
 
export default Form;