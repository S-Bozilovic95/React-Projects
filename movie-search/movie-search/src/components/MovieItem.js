import React from 'react';
import { Link } from 'react-router-dom';

const MovieItem = ({movie}) => {
    return ( 
        <>
            <li><Link to={`/MovieDetails/${movie.imdbID}`}>{movie.Title}</Link></li>
        </>
     );
}
 
export default MovieItem;