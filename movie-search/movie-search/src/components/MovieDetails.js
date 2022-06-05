import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../assets/api';
import { ApiKey } from '../assets/ApiKey';


const MovieDetails = () => {
    const[details,setDetails] = useState({
        data:{},
        loading: true,
        error: null
    })
    const {imdbID} = useParams();
    const navigate = useNavigate();

    const {data,loading,error} = details;

    const getDetails= async (imdbID) =>{
        await API.get(`?i=${imdbID}&${ApiKey}`)
        .then(res=>{
           if(res.data.Response === "True"){
               setDetails({
                   ...details,
                   data:res.data,
                   loading:false,
               })
           }else{
               setDetails({
                   ...details,
                   loading:false,
                   error:res.data.Error
               })
           }
        })
    }


    useEffect(()=>{
        getDetails(imdbID);
    },[])

    console.log(details);

    const handleBack = e =>{
        navigate("/");
    }
    
    return ( 
        <>
        <h2>{imdbID}</h2>
        <button onClick={handleBack}>Back</button>
        </>
     );
}
 
export default MovieDetails;