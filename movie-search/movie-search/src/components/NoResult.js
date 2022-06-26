import React from 'react';
import noFound from '../img/noFound.gif'

const NoResult = () => {

    return ( 
        <section className='container resultBox'>
            <h2 className='resultBox__text'>No <span>Results</span> Found</h2>
            <img src={noFound} className='resultBox__gif' />
        </section>
     );
}
 
export default NoResult;