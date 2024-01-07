import React from "react";
import "./navigation.css";
import { Link } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";

const Navigation = () => {
  const { page, setPage, setIsDefaultPage } = useDataContext();

  return (
    <nav>
      <div className='nav-wrapper container'>
        <Link
          to='/'
          className='nav-logo'
          onClick={() => {
            setPage(0);
            setIsDefaultPage(true);
          }}
        >
          <h1>DiscoverFood</h1>
        </Link>
        <ul className='nav-links'>
          <li>
            <Link
              to='/'
              onClick={() => {
                setPage(0);
                setIsDefaultPage(true);
              }}
            >
              Home
            </Link>
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
