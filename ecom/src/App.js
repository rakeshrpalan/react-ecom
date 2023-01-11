import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/Products";
import Product from "./components/Product";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";
import Wishlist from "./components/Wishlist";
import About from "./components/About";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

// import "bootstrap/dist/css/bootstrap.min.css";
// import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';

// import Navbar from "./components/Navbar";
// import Home from "./components/Home";

// import Signup from "./components/Signup";
// import Login from './components/Login';

// <div className="App">
//       {/* <Navbar />
//       <div>
//         <Home />
//         <Login />
//         <Signup />
//       </div> */}
//       <Router>
//       <Navbar />
//       <div className='container'>

//         <Routes>
//             <Route path='/' element={<Home />} />
//             <Route path='/create' element={<Signup />} />
//             <Route path='/login' element={<Login />} />
//         </Routes>
//       </div>
//     </Router>
//     </div>
