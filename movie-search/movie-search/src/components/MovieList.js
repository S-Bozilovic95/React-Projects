import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({list}) => {

    return ( 
        <>
        {
            list.map((el,index)=>{
               return <MovieItem movie={el} key={index}/>
            })
        }
        </>
     );
}
 
export default MovieList;