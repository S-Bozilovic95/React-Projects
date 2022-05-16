import React from 'react';
import {AiFillInstagram,AiFillLinkedin,AiFillPhone,AiFillYoutube,AiOutlineTwitter,BsFillEnvelopeFill,FaFacebookF} from './index'

const Navbar = () => {


    
    return ( 
        <nav>
            <div className='upper'>
                <div className='container'>
                    <article><AiFillPhone/> <span>+381 456 456</span> <span className='crta'>|</span> <BsFillEnvelopeFill/> <span>mail@info.com</span></article>
                    <article><i><FaFacebookF/></i><i><AiOutlineTwitter/></i><i><AiFillLinkedin/></i><i><AiFillInstagram/></i><i><AiFillYoutube/></i></article>
                </div>
            </div>
        </nav> 
    );
}
 
export default Navbar;