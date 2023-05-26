import logo from './logo.svg';
import './App.css';
import Navbar from './componentss/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './componentss/Home';
import Add from './componentss/Add';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/> <br />
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/add' element={<Add/>}/>
      </Routes>
    </div>
  );
}

export default App;
