import React from 'react';


const PricingPack = () => {
    return ( 
        <section className='container pricing'>
            <hgroup>
                <h3>Pricing Plan</h3>
                <h2>Affordable Pricing Packages</h2>
            </hgroup>

            <div>
                <article>
                    <h2>$<span style={{color:"var(--darkViolet)"}}>49</span>/Mo</h2>
                    <h4>Basic</h4>
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap 4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browsers</p>
                    <button type='button'>Order Now</button>
                </article>

                <article>
                    <h2>$<span style={{color:"var(--darkViolet)"}}>99</span>/Mo</h2>
                    <h4>Premium</h4>
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap 4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browsers</p>
                    <button type='button'>Order Now</button>
                </article>

                <article>
                    <h2>$<span style={{color:"var(--darkViolet)"}}>149</span>/Mo</h2>
                    <h4>Business</h4>
                    <p>HTML5 & CSS3</p>
                    <p>Bootstrap 4</p>
                    <p>Responsive Layout</p>
                    <p>Compatible With All Browsers</p>
                    <button type='button'>Order Now</button>
                </article>
            </div>
        </section>
     );
}

export default PricingPack;