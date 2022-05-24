import React from 'react';
import Header from '../Components/Header';
import {MdLocationOn} from 'react-icons/md';



const Contact = () => {

    return ( 
        <>
        <Header name={"-Contact Us-"}/>

        <section className='contact container'>
        <article>
            <h3><MdLocationOn style={{color:"white"}}/> 14 Street, Krusevac, Serbia</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d19444.477164211!2d21.331666912839403!3d43.576575193270074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1653159464663!5m2!1ssr!2srs" style={{border:0, width:400,height:450}}   ></iframe>
        </article>

        <article>
            <hgroup>
                <h4>Contact Us</h4>
                <h2>Contact For Any Queries</h2>
            </hgroup>

            <form>
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Your Email" />
                <input type="text" placeholder="Your Subject" />
                <textarea name='Message' placeholder='Message' cols="30" rows="10" />
                <input type="submit" value="Send Message"/>
            </form>
        </article>

        </section>
        </>
     );
}
 
export default Contact;