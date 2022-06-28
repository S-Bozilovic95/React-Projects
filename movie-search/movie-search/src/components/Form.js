import React,{useState} from 'react';
import {FaSearch} from 'react-icons/fa';

const Form = ({getInfo}) => {

    const [name,setName] = useState("");

    const handleMovies = (e) =>{
        e.preventDefault();
        if(name.length!=0){
            getInfo(name);
            setName("");
        }
    }

    

    return ( 
        <nav className="navbar">
            <form  className='navbar__form'  onSubmit={(e)=>handleMovies(e)}>
                <input className='navbar__form__input' type="text" value={name} placeholder='Search for Movies, TV Series...' minLength={3} onChange={(e)=>setName(e.target.value)} required/>
                <button className='navbar__form__icon' type='submit'><FaSearch/></button>
            </form>
        </nav>
     );
}
 
export default Form;