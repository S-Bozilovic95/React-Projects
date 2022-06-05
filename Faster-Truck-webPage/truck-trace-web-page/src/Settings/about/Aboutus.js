import React from 'react';
import { FaPlay } from 'react-icons/fa';
import truck from '../../img/about.jpg'

const Aboutus = () => {
    return ( 
        <section className='about container1'>
            <article>
                <img src={truck}/>
                <h3>25+ years experience</h3>
            </article>
            <article>
                <h4>About Us</h4>
                <h2>Trusted & Faster Logistic Service Provider</h2>
                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                <div><i><FaPlay/></i>Play Video</div>
            </article>
        </section>
     );
}
 
export default Aboutus;