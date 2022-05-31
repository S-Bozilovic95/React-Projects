import React from 'react';
import Header from '../Components/Header';
import Logistics from '../Settings/service/Logistics';
import Numbers from '../Settings/service/Numbers';

const Service = () => {
    return ( 
        <>
        <Header name={"-Service-"}/>
        <Logistics/>
        <Numbers/>
        </>
     );
}
 
export default Service;