import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({list}) => {

    return ( 
        <ul className='list container'>
        {
            list.map((el,index)=>{
               return <MovieItem movie={el} key={index}/>
            })
        }
        </ul>
     );
}
 
export default MovieList;