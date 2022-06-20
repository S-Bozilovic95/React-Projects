import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({movie}) => {

    return ( 
        <>
            <li className='list__item' style={{backgroundImage:`url(${movie.Poster})`}}>
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