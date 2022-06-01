import React from 'react';
import CountUp from 'react-countup';

const Numbers = () => {
 
    return ( 
        <section className='numbers'>
           <div className='container1'>
            <article>
                    <h3>Get a Quote</h3>
                    <h2>Request a Free Quote</h2>
                    <p style={{color: "var(--fontGrey)"}}>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                    <div>
                        <span>
                        <h4><CountUp end={250}/></h4>
                        <p>Skilled Experts</p>
                        </span>
                        <span>
                        <h4><CountUp end={1050}/></h4>
                        <p>Happy Clients</p>
                        </span>
                        <span>
                        <h4><CountUp end={2500}/></h4>
                        <p>Complete Projects</p>
                        </span>
                    </div>
                </article>

                <form>
                    <input type="text" placeholder='Your Name' required="Please fill out this field"/>
                    <input type="text" placeholder='Your Email' required="Please fill out this field"/>
                    <select>
                        <option>Select a Service</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 3</option>
                    </select>
                    <input type="submit" value="Get a Quote"/>
                </form>
           </div>
        </section>
     );
}
 
export default Numbers;