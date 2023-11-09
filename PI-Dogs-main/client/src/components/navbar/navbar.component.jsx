import './navbar.styles.css';
import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Navbar() {


  return (
    
    <div className='navbar-cont'>
      <div className='navbar-cont-img'>
      <Link className="navbar-link" to="/"><img src="https://img.freepik.com/vector-gratis/cute-dog-logo_1051-3349.jpg?w=826&t=st=1699512698~exp=1699513298~hmac=71a8e2dc7ae8df3b7678c1f5051651d88570844962fc8a34f2b2469bd061138e" alt="imagen-Logo" /></Link>
        
      </div>
      <div className='navbar-cont-links'>
        <Link className="navbar-link" to="/home">Home</Link>
        <Link className="navbar-link" to="/form">Formulario</Link>
      </div>
    </div>
  )
}

export default Navbar;