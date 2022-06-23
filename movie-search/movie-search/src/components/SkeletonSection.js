import React from 'react';

const SkeletonSecton = () => {
    return ( 
        <section className='container skeletonSection'>
            <div className='skeletonSection__item1'></div>
            <p className='skeletonSection__item2'></p>
            <p className='skeletonSection__item3'></p>
            <div className='skeletonSection__item4'></div>
            <div className='skeletonSection__item5'></div>
            <div className='skeletonSection__item6'></div>
        </section>
     );
}
 
export default SkeletonSecton;