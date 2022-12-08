import React from 'react'
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import { Link } from "react-router-dom";



export default function Navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {/* <li class="nav-item">
          <a class="nav-link active" aria-current="page" href={<Home />}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={<Login />}>Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href={<Signup />}>Signup</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Ecom</a>
        </li> */}
                       <li className='navbar-item'>
                            <Link to='/' className='nav-link' >Home</Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/login' className='nav-link' >Login </Link>
                        </li>
                        <li className='navbar-item'>
                            <Link to='/create' className='nav-link' >Signup </Link>
                        </li>  
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}
