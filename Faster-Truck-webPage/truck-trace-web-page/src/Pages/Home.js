import React from 'react';

const Home = () => {
    return ( 
        <>
            <header className='homeHeader'>
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