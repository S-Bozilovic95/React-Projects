import React, { useEffect, useState } from 'react';
import API from '../assets/api';
import { ApiKey } from '../assets/ApiKey';
import Form from './Form';
import MovieList from './MovieList';



const Home = () => {
    const [movies,setMovies] = useState({
        data: [],
        loading: true,
        error: null,
    });

    const [name,setName] = useState("better call saul");

    // destructuring
    const {data,loading,error}= movies;

    const getInfo = async (name) =>{
        await API.get(`?s=${name}&${ApiKey}`)
        .then(res=>{
            if(res.data.Response==="True"){
                setMovies({
                    ...movies,
                    data:res.data, 
                    loading:false
                })
            }else{
                setMovies({
                    ...movies,
                    loading:false,
                    error: res.data.Error
                })
            }
        })
    }

    const handleMovies = e =>{
        e.preventDefault();
        getInfo(name);
    }
    
    useEffect(()=>{
        getInfo(name);
    },[])



    return ( 
        <>
        <Form handleMovies={handleMovies} setName={setName}/>
        {!loading? <MovieList list={data.Search}/>:error}
        </>
     );
}
 
export default Home;