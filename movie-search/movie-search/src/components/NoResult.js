import React from 'react';
import noFound from '../img/noFound.gif'
import popcorn from '../img/popcorn.png';

const NoResult = () => {

    return ( 
        <section className='container resultBox'>
            <img src={popcorn} className='resultBox__img'/>
            <img src={noFound} className='resultBox__gif' />
            <h2 className='resultBox__text'>No <span>Results</span> Found</h2>
        </section>
     );
}
 
export default NoResult;