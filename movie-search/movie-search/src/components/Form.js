import React from 'react';

const Form = ({handleMovies,setName}) => {
    return ( 
        <form onSubmit={(e)=>handleMovies(e)}>
            <input type="text" placeholder='enter name' onChange={(e)=>setName(e.target.value)}/>
            <input type="submit"/>
        </form>
     );
}
 
export default Form;