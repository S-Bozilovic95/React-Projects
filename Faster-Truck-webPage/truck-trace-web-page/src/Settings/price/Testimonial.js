import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import testimonial1 from "../../img/testimonial-1.jpg";
import testimonial2 from "../../img/testimonial-2.jpg";
import testimonial3 from "../../img/testimonial-3.jpg";
import testimonial4 from "../../img/testimonial-4.jpg";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonial = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 0},
          items: 1
        },
    };

    return ( 
        <section className='container1 testimonial'>
            <hgroup>
                <h3>Testimonial</h3>
                <h2>Our Clients Say</h2>
            </hgroup>
        
            <Carousel responsive={responsive} infinite={true} arrows={false} showDots={true}>
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
                    <img src={testimonial2}/>
                    <p>Client Name <br/> <span style={{color:"var(--fontGrey)"}}>-Profession</span></p>
                </div>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.</p>
                <FaQuoteRight className='quote'/>
            </article>
            <article>
                <div>
                    <img src={testimonial3}/>
                    <p>Client Name <br/> <span style={{color:"var(--fontGrey)"}}>-Profession</span></p>
                </div>
                <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum.</p>
                <FaQuoteRight className='quote'/>
            </article>
            <article>
                <div>
                    <img src={testimonial4}/>
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