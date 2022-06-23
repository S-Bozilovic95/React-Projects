import React, { useEffect, useRef, useState } from 'react';
import API from '../assets/api';
import { ApiKey } from '../assets/ApiKey';
import Form from './Form';
import MovieList from './MovieList';
import cinnamon from '../img/cinnamon-roll-collor.png';
import Header from './Header';
import Footer from './Footer';
import PageButtons from './PageButtons';
import Skeleton from './Skeleton';



const Home = () => {
    const [movies,setMovies] = useState({
        data: [],
        loading: true,
        totalResult:0,
    });

    const [page, setPage] = useState(1);



    // destructuring
    const {data,loading,totalResult}= movies;

    const getInfo = async (name) =>{
       let response = await API.get(`?s=${name}&page=${page}&${ApiKey}`)
        setMovies({...movies,data:response.data.Search, loading:false, totalResult:response.data.totalResults})
        localStorage.setItem("film",name);
    }
    

    const handlePages=(value)=>{
        if(value==="-" && page>1){
            setPage(page-1);
        }else if( value==="+" && page<Math.ceil(totalResult/10)){
            setPage(page+1);
        }
    }


    
    useEffect(()=>{
        getInfo(localStorage.film);
    },[page])

let arr =[];
console.log(typeof arr);

    return ( 
       <>
         <section className='home container'>
            <div className='home__logo'>
                <h2><span>Cine</span>Mon</h2>
                <img src={cinnamon}/>
            </div>
            <Form getInfo={getInfo}/>
            <Header/>
            {!loading ? <MovieList list={data}/>: <Skeleton num={10}/>}
        </section>
        <PageButtons handlePages={handlePages} page={page} totalResult={totalResult}/>
        <Footer/>
       </>
     );
}
 
export default Home;