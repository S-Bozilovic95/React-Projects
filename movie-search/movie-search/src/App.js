import './App.scss';
import Home from './components/Home';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import MovieDetails from './components/MovieDetails.js';
import Footer from './components/Footer';


function App() {


  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="MovieDetails/:imdbID" element={<MovieDetails/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
