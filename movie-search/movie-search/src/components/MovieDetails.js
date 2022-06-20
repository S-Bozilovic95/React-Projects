import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import API from '../assets/api';
import { ApiKey } from '../assets/ApiKey';
import {GiPopcorn} from 'react-icons/gi';
import {FaRegClock, FaArrowLeft} from 'react-icons/fa';
import imdbPic from '../img/imdbLogo.png';
import rottenPic from '../img/rotten.png';
import metaPic from '../img/metaCritic.png';
import Footer from './Footer';

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
        await API.get(`?i=${imdbID}&plot=full&${ApiKey}`)
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

    const handleBack = () =>{
        navigate("/");
    }

    const handleRatings = arr =>{
       return arr.map((el,index)=>{
            return (<div key={index}>{el.Source==="Rotten Tomatoes"?<img src={rottenPic} />:el.Source==="Internet Movie Database"?<img src={imdbPic}/>:el.Source==="Metacritic"?<img src={metaPic} />:<GiPopcorn/>} <p>{el.Value}</p></div>)
        })
    }
    
    return ( 
       <>
            <section className='detail'>
                    <article style={{backgroundImage:`linear-gradient(to top,rgba(18, 22, 33, 2),rgba(18, 22, 33, 0.5)), url(${data.Poster})`}} className='detail__banner'>
                        <h1>{data.Title}</h1>
                    </article>

                <div className='container'>
                        <article className='detail__container__ratings'>
                            {data.Ratings ? handleRatings(data.Ratings):null}
                        </article>

                        <article className='detail__container__descShort'>
                            <h4 className='detail__container__descShort__type'>{data.Type ==="series"? `Seasons: ${data.totalSeasons}`:"Movie"}</h4>
                            <h4>{data.Genre}</h4>
                            <h4>{data.Country} - {data.Released}</h4>
                            <p><i><FaRegClock/></i> {data.Runtime}</p>
                        </article>

                        <article className='detail__container__descLong'>
                            <h4><span>Cast: </span>{data.Actors ==="N/A"? "No Info" : data.Actors}</h4>
                            <h4><span>Director: </span>{data.Director==="N/A"? "No Info" : data.Director}</h4>
                            <h4><span>Awards:</span> {data.Awards==="N/A"? "No Info"  : data.Awards}</h4>
                            <p>{data.Plot}</p>
                        </article>
                        <i className='detail__container__back' onClick={handleBack}><FaArrowLeft/></i>
                </div>
            </section>
            <Footer/>
       </>
        
     );
}
 
export default MovieDetails;