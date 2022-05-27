import React from 'react';
import Header from '../Components/Header';
import PricingPack from '../Settings/price/PricingPack';
import Testimonial from '../Settings/price/Testimonial';


const Price = () => {
    return ( 
        <>
        <Header name={"-Prices-"}/>
        <PricingPack/>
        <Testimonial/>
        </>
     );
}
 
export default Price;