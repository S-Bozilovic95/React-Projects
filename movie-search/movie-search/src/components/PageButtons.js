import React from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const PageButtons = ({handlePages,page,totalResult}) => {


    return ( 
        <>
            <section className='container pages'>
                <article className='pages__infoBox'>
                    <i onClick={()=>handlePages("-")}><FaArrowLeft/></i>
                    <span>{page}</span>
                    <i onClick={()=>handlePages("+")}><FaArrowRight/></i>
                </article>
                <p className='pages__infoText'>Total Pages: {isNaN(totalResult)?0 : Math.ceil(totalResult/10)}</p>
            </section>
        </>
     );
}
 
export default PageButtons;