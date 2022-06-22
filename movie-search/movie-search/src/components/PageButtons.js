import React from 'react';
import {FaArrowLeft, FaArrowRight} from 'react-icons/fa';

const PageButtons = ({handlePages}) => {


    return ( 
        <>
            <section className='container pages'>
                <i onClick={()=>handlePages("-")}><FaArrowLeft/></i>
                <i onClick={()=>handlePages("+")}><FaArrowRight/></i>
            </section>
        </>
     );
}
 
export default PageButtons;