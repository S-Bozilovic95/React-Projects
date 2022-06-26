import React from 'react';
import MovieItem from './MovieItem';
import NoResult from './NoResult';


const MovieList = ({list}) => {

    return ( 
        <ul className='list container'>
            {list!==undefined ?
                list.map((el,index)=>{
                return <MovieItem movie={el} key={index}/>
                }): <NoResult/>
            }
        </ul>
     );
}
 
export default MovieList;