import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import popcorn from '../img/popcorn.png';
import AOS from "aos";
import "aos/dist/aos.css";

const MovieItem = ({movie}) => {

    const checkPoster = poster =>{
        return poster==="N/A"? popcorn : !poster ? popcorn : poster;
    }

    useEffect(()=>{
        AOS.init({
            duration: 200,
            easing: 'ease-in-quad',
            once:false,
        });
    },[])

    return ( 
        <>
            <li className='list__item' data-aos="fade-up" style={{backgroundImage:`url(${checkPoster(movie.Poster)})`}}>
                <div className='list__item__card'>
                <p className='list__item__card__year'>{movie.Year}</p>
                <h4 className='list__item__card__header'>{movie.Title}</h4>
                <p className='list__item__card__type'>{movie.Type}</p>
                <Link to={`/MovieDetails/${movie.imdbID}`} className='list__item__card__link'>More Info</Link>
                </div>
            </li>
        </>
     );
}
 
export default MovieItem;