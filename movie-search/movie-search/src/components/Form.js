import React,{useState} from 'react';
import {FaSearch} from 'react-icons/fa';

const Form = ({getInfo}) => {

    const [name,setName] = useState("Friends");

    const handleMovies = e =>{
        e.preventDefault();
        getInfo(name);
    }

    return ( 
        <nav className="navbar">
            <form  className='navbar__form'>
                <input className='navbar__form__input' type="text" placeholder='Search for Movies, TV Series...' onChange={(e)=>setName(e.target.value)}/>
                <i className='navbar__form__icon' onClick={(e)=>handleMovies(e)}><FaSearch/></i>
            </form>
        </nav>
     );
}
 
export default Form;