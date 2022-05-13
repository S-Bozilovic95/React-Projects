import './App.css';
import Form from './components/Form';
import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom'; 
import FiveDayWeather from './components/FiveDayWeather';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Form/>} />
          <Route path='/FiveDayWeather/:lat/:lon' element={<FiveDayWeather/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
