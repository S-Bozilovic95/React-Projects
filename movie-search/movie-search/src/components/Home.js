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
        localStorage.setItem("film",name);
    }
    
    useEffect(()=>{
        getInfo(localStorage.film);
    },[])



    return ( 
        <section className='home'>
        <Form getInfo={getInfo}/>
        {!loading? <MovieList list={data.Search}/>:error}
        </section>
     );
}
 
export default Home;