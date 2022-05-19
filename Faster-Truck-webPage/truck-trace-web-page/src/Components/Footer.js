import React from 'react';
import { AiFillPhone,AiOutlineTwitter,AiFillInstagram,AiFillLinkedin } from 'react-icons/ai';
import { BsFillEnvelopeFill } from 'react-icons/bs';
import { FaChevronRight, FaFacebookF } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

const Footer = () => {


    return ( 
        <footer>
           
            <div className='container row'>
                <article>
                    <h3>Get in Touch</h3>
                    <p><MdLocationOn/> 123 Street, Krusevac, Serbia </p>
                    <p><AiFillPhone/> +381 123 123 45 </p>
                    <p><BsFillEnvelopeFill/> info@reactpractice.com </p>
                    <span><i><AiOutlineTwitter/></i><i><FaFacebookF/></i><i><AiFillLinkedin/></i><i><AiFillInstagram/></i> </span>
                </article>

                <article>
                    <h3>Quick Links</h3>
                    <ul>
                        <li><FaChevronRight/> Home</li>
                        <li><FaChevronRight/> About Us</li>
                        <li><FaChevronRight/> Our Services</li>
                        <li><FaChevronRight/> Pricing Plan</li>
                        <li><FaChevronRight/> Contact Us</li>
                    </ul>
                </article>

                <article>
                    <h3>Newsletter</h3>
                    <p>Rebum labore lorem dolores kasd est, et ipsum amet et at kasd, ipsum sea tempor magna tempor. Accu kasd sed ea duo ipsum. Dolor duo eirmod sea justo no lorem est diam</p>
                    <form>
                    <input type="text" placeholder="Your Email Address" required/>
                    <input type="submit" value="Sign Up"/>
                    </form>
                </article>
            </div>
            <hr/>
            <div className='container'>
                <p>&copy;All Rights Reserved. Designed by Svetozar</p>
            </div>
            
        </footer>
     );
}
 
export default Footer;