import React from 'react';
import { Link } from 'react-router-dom';
import cinnamon from '../img/cinnamon-roll-collor.png';

const MovieItem = ({movie}) => {

    const checkPoster = poster =>{
        return poster==="N/A"? cinnamon : poster;
    }

    return ( 
        <>
            <li className='list__item' style={{backgroundImage:`url(${checkPoster(movie.Poster)})`}}>
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