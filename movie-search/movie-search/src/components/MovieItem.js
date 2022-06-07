import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({movie}) => {
    return ( 
        <>
            <li className='list__item'><Link to={`/MovieDetails/${movie.imdbID}`} className='list__link'>{movie.Title}</Link><img src={movie.Poster} className='list__image'/></li>
        </>
     );
}
 
export default MovieItem;