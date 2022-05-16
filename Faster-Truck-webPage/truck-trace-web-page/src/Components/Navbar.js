import React from 'react';
import {AiFillPhone,AiOutlineTwitter,AiFillInstagram,AiFillLinkedin,AiFillYoutube} from 'react-icons/ai';
import {BsFillEnvelopeFill} from 'react-icons/bs';
import {FaFacebookF} from 'react-icons/fa';

const Navbar = () => {


    
    return ( 
        <nav className='.container'>
            <div className='upper'>
                <article><AiFillPhone/> <span>+381 456 456</span> <span className='crta'>|</span> <BsFillEnvelopeFill/> <span>mail@info.com</span></article>
                <article><i><FaFacebookF/><AiOutlineTwitter/><AiFillLinkedin/><AiFillInstagram/><AiFillYoutube/> </i></article>
            </div>
        </nav> 
    );
}
 
export default Navbar;