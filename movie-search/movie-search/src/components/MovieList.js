import React from 'react';
import MovieItem from './MovieItem';

const MovieList = ({list}) => {

    console.log(list);

    return ( 
        <ul className='list container'>
            {list!==undefined ?
                list.map((el,index)=>{
                return <MovieItem movie={el} key={index}/>
                }):(<h3>There Are No Results For This Item</h3>)
            }
        </ul>
     );
}
 
export default MovieList;