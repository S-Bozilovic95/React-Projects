import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({list}) => {


    return ( 
        <ul className='list container'>
            {list.length!=0?
                list.map((el,index)=>{
                return <MovieItem movie={el} key={index}/>
                }):"loading"
            }
        </ul>
     );
}
 
export default MovieList;