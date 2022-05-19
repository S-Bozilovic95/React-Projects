import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import {Home,About,Service,Price,Blog,Contact} from "./Pages/index"
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">

      <Router>
        <Navbar/>

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/service' element={<Service/>} />
          <Route path='/price' element={<Price/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
