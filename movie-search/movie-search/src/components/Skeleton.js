import React from 'react';

const Skeleton = ({num}) => {
    
    return ( 
        <section className='container skeletonBox'>
            {
                [...Array(num)].map((el,index)=>{
                    return(
                        <div className='skeleton' key={index}>
                        <p className='skeleton__desc'></p>
                        <h4 className='skeleton__header'></h4>
                        <p className='skeleton__text'></p>
                        </div>
                    )
                })
            }
        </section>
     );
}
 
export default Skeleton;