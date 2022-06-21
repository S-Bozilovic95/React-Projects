import React from 'react';
import {FaLinkedin, FaGithub} from 'react-icons/fa';
import {SiGmail} from 'react-icons/si';

const Footer = () => {

    
    return ( 
        <footer>
            <p>&copy;2022 Designed By Svetozar Božilović</p>
                <div>
                    <a href='https://www.linkedin.com/in/svetozar-bo%C5%BEilovi%C4%87-668aa0129/'><FaLinkedin/></a>
                    <a href='https://github.com/S-Bozilovic95'><FaGithub/></a>
                    <a className='mail' href='mailto:svetozar95@gmail.com'><SiGmail/><span>svetozar95@gmail.com</span></a>
                </div>
        </footer>
     );
}
 
export default Footer;