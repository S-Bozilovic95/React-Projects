import React from 'react';

const Header = () => {
    return ( 
        <header className='header'>
            <h1 className='header__title'><span>The Best</span> Online Movie Search and Info Engine</h1>
            <div className='header__text'>
            <p>CineMon is an online movie info and search engine with filters to find
                best movies and TV series for You. Use our website to get details about movies and casts</p>
            <p>Sort and filter series and movies based on release year, IMDB ratings. Click on the movie to get more details!</p>
            </div>
        </header>
     );
}
 
export default Header;