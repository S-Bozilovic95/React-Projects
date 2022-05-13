import React from 'react';
import spin from '../Assets/loading.svg';

const Loading = () => {
    return  <img src={spin} style={{position:"absolute",top:"50%",left:"50%"}}/> ;
}
 
export default Loading;