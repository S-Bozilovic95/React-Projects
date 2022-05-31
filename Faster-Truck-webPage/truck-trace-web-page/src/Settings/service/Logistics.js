import React from 'react';
import { FaPlane, FaShip, FaStore, FaTruck } from 'react-icons/fa';

const Logistics = () => {

    return ( 
        <section className='logistics container'>
            <h3>Our Services</h3>
            <h2>Best Logistic Services</h2>

            <div>
                <article>
                    <h4> <i><FaPlane/></i> Air Freight</h4>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a type='button'>Read More</a>
                </article>
                <article>
                    <h4> <i><FaShip/></i> Ocean Freight</h4>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a type='button'>Read More</a>
                </article>
                <article>
                    <h4> <i><FaTruck/></i> Land Transport</h4>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a type='button'>Read More</a>
                </article>
                <article>
                    <h4> <i><FaStore/></i> Cargo Storage</h4>
                    <p>Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet diam sea est diam</p>
                    <a type='button'>Read More</a>
                </article>
            </div>
        </section>
     );
}
 
export default Logistics;