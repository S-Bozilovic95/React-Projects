import React, { useEffect, useState } from 'react';
import { BiListCheck } from 'react-icons/bi';
import {Link} from 'react-router-dom'
import {AiFillInstagram,AiFillLinkedin,AiFillPhone,AiFillYoutube,AiOutlineTwitter,BsFillEnvelopeFill,FaFacebookF,FaTruck,AiOutlineMenu,FaShoppingBasket} from './index'
import { Fade } from "react-awesome-reveal";

const Navbar = () => {

    const[myStyle, setMystyle] = useState("flex")

    const handleDropdown = (e) =>{
        if(myStyle === "flex"){
            setMystyle("none")
        }else{
            setMystyle("flex")
        }
    }

    useEffect(()=>{
     window.addEventListener('resize', ()=>{
        if(window.innerWidth > 768){
            setMystyle("flex")
        }
     }) 

    },[])
    


    return ( 
        <Fade direction='down' duration={500}>
        <nav>
            <div className='upper'>
                <div className='container'>
                    <article><AiFillPhone/> <span>+381 456 456</span> <span className='crta'>|</span> <BsFillEnvelopeFill/> <span>mail@info.com</span></article>
                    <article><i><FaFacebookF/></i><i><AiOutlineTwitter/></i><i><AiFillLinkedin/></i><i><AiFillInstagram/></i><i><AiFillYoutube/></i></article>
                </div>
            </div>

            <div className='navbar container'>
                <h2><FaTruck/> Faster</h2>

                <i className='dropDown' onClick={()=> handleDropdown()}><AiOutlineMenu/></i>
              
              <Fade direction='down' duration={500}>
                <ul style={{display:`${myStyle}`}}>
                    <li><Link to="/" className='lol'>Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Service</Link></li>
                    <li><Link to="/price">Price</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><i className='basket'><FaShoppingBasket/></i></li>
                </ul>
              </Fade>
               
                
            </div>
        </nav> 
        </Fade>
    );
}
 
export default Navbar;