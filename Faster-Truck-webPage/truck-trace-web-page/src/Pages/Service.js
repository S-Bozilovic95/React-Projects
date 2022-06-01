import React from 'react';
import Header from '../Components/Header';
import Logistics from '../Settings/service/Logistics';
import Numbers from '../Settings/service/Numbers';
import Testimonial from '../Settings/price/Testimonial';

const Service = () => {
    return ( 
        <>
        <Header name={"-Service-"}/>
        <Logistics/>
        <Numbers/>
        <Testimonial/>
        </>
     );
}
 
export default Service;