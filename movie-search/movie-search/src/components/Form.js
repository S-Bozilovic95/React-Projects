import React,{useState} from 'react';

const Form = ({getInfo}) => {

    const [name,setName] = useState("Friends");

    const handleMovies = e =>{
        e.preventDefault();
        getInfo(name);
    }

    return ( 
        <navbar className="navbar">
            <form onSubmit={(e)=>handleMovies(e)} className='form'>
                <input className='form__input' type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
                <input className='form__submit' type="submit"/>
            </form>
        </navbar>
     );
}
 
export default Form;