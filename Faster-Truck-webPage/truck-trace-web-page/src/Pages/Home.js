import React from 'react';
import header from '../img/header.jpg'

const Home = () => {
    return ( 
        <>
            <header>
                <h3>Safe & Faster </h3>
                <h1>Logistic Services</h1>
                <article>
                <input type="text" placeholder="Tracking Id" required/>
                <input type="submit" value="Track & Trace"/>
                </article>
            </header>
        </>
     );
}
 
export default Home;