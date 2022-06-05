import React from 'react';
import Header from '../Components/Header';
import Aboutus from '../Settings/about/Aboutus';
import Choose from '../Settings/about/Choose';
import Delivery from '../Settings/about/Delivery';

const About = () => {
    return ( 
        <>
         <Header name={"-About Us-"}/>
         <Aboutus/>
         <Choose/>
         <Delivery/>
        </>
     );
}
 
export default About;