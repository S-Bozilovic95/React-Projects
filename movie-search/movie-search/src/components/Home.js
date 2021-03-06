import React, { useEffect, useRef, useState } from 'react';
import API from '../assets/api';
import { ApiKey } from '../assets/ApiKey';
import Form from './Form';
import MovieList from './MovieList';
import cinnamon from '../img/cinnamon-roll-collor.png';
import Header from './Header';
import PageButtons from './PageButtons';
import Skeleton from './Skeleton';
import ScrollToTop from './ScrollToTop';



const Home = () => {
    // states
    const [movies,setMovies] = useState({
        data: [],
        loading: true,
        totalResult:0,
    });
    const [page, setPage] = useState(1);
    const prevName = useRef();


    // destructuring movies object
    const {data,loading,totalResult}= movies;

    // functions
    const getInfo = async (name) =>{

       if(prevName.current === name){
        let response = await API.get(`?s=${name}&page=${page}&${ApiKey}`)
        setMovies({...movies,data:response.data.Search, loading:false, totalResult:response.data.totalResults})
        localStorage.setItem("film",name);

       }else if(prevName.current !=name){
            setPage(1)
            setMovies({...movies, loading:true})
            let response = await API.get(`?s=${name}&page${page}1&${ApiKey}`)
            setMovies({...movies,data:response.data.Search, loading:false, totalResult:response.data.totalResults})
            localStorage.setItem("film",name); 
       }
    }
    

    const handlePages=(value)=>{
        if(value==="-" && page>1){
            setPage(page-1);
        }else if( value==="+" && page<Math.ceil(totalResult/10)){
            setPage(page+1);
        }
    }



    // useeffect
    useEffect(()=>{
        prevName.current=localStorage.film;
        getInfo(localStorage.film);
        window.scrollTo({top:0,behavior:'smooth'});
    },[page])


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
        <ScrollToTop/>
       </>
     );
}
 
export default Home;