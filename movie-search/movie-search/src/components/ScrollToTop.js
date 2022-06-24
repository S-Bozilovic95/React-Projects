import React, { useEffect, useState } from 'react';
import {FaChevronUp} from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";

const ScrollToTop = () => {
    const [showButton,setShowButton] = useState(false);

    const scroll = () =>{
        window.scrollTo({top:0,behavior:'smooth'});
    }


    useEffect(()=>{

        AOS.init({
            duration: 300,
            easing: 'ease-in-quad',
            once:false,
        });

        window.addEventListener("scroll",()=>{
            if(window.pageYOffset>500){
                setShowButton(true);
            }else{
                setShowButton(false);
            }
        })
    },[])

    return ( 
       <>
       {showButton ?(<button className='scrollToTop' onClick={scroll} data-aos="fade-in"><FaChevronUp/></button>): <button className='scrollToTop' onClick={scroll} data-aos="fade-out"><FaChevronUp/></button>};
      
       </>
     );
}
 
export default ScrollToTop;