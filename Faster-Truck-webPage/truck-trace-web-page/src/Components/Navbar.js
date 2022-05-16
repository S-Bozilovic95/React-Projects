import React from 'react';
import {Link} from 'react-router-dom'
import {AiFillInstagram,AiFillLinkedin,AiFillPhone,AiFillYoutube,AiOutlineTwitter,BsFillEnvelopeFill,FaFacebookF,FaTruck,AiOutlineMenu} from './index'

const Navbar = () => {


    
    return ( 
        <nav>
            <div className='upper'>
                <div className='container'>
                    <article><AiFillPhone/> <span>+381 456 456</span> <span className='crta'>|</span> <BsFillEnvelopeFill/> <span>mail@info.com</span></article>
                    <article><i><FaFacebookF/></i><i><AiOutlineTwitter/></i><i><AiFillLinkedin/></i><i><AiFillInstagram/></i><i><AiFillYoutube/></i></article>
                </div>
            </div>
            <div className='container'>
                <h2><i><FaTruck/></i> Faster</h2>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/price">Price</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>

                </ul>
            </div>
        </nav> 
    );
}
 
export default Navbar;