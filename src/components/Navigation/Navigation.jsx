import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <div className='nav-wrapper container'>
        <Link to='/' className='nav-logo'>
          <h1>DiscoverFood</h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
