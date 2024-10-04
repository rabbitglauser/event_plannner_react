import React from 'react';
import logo from './logo.svg';
import './App.css';


const Navbar = () => {
  return (

      <nav className="navbar">
        <div className="navbar-left">
          <a href="/" className="logo">
            Event Planner
          </a>
        </div>
        <div className="navbar-center">
          <ul className="nav-links">
            <li>
              <a href="/products">Events</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
          <div className="navbar-right">
              <a href="/cart" className="cart-icon">
                  <i className="bi bi-cart"></i>
                  <span className="cart-count">0</span>
              </a>
              <a href="/account" className="user-icon">
                  <i className="fas fa-user"></i>
              </a>
          </div>
      </nav>
  );
};


export default Navbar;
