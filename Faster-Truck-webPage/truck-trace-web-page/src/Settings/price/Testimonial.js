import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import testimonial1 from "../../img/testimonial-1.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Testimonial = () => {
    return ( 
        <section className='container testimonial'>
            <hgroup>
                <h3>Testimonial</h3>
                <h2>Our Clients Say</h2>
            </hgroup>
        
            <Carousel autoFocus={true}  emulateTouch={true}>
            <article>
                <div>
                    <img src={testimonial1}/>
                    <p >Client Name <br/> <span style={{color:"var(--fontGrey)"}}>-Profession</span></p>
                </div>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.</p>
                <FaQuoteRight className='quote'/>
            </article>
            <article>
                <div>
                    <img src={testimonial1}/>
                    <p>Client Name <br/> <span style={{color:"var(--fontGrey)"}}>-Profession</span></p>
                </div>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.</p>
                <FaQuoteRight className='quote'/>
            </article>
            <article>
                <div>
                    <img src={testimonial1}/>
                    <p>Client Name <br/> <span style={{color:"var(--fontGrey)"}}>-Profession</span></p>
                </div>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.</p>
                <FaQuoteRight className='quote'/>
            </article>
            </Carousel>
        </section>
     );
}
 
export default Testimonial;