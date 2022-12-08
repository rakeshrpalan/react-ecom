import './App.css';
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Signup from "./components/Signup";
import Login from './components/Login';



function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <div>
        <Home />
        <Login />
        <Signup />
      </div> */}
      <Router>
      <Navbar />
      <div className='container'>
      
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Signup />} />
            <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
