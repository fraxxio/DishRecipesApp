import React from "react";
import "./navigation.css";
import { NavLink } from "react-router-dom";
import { useDataContext } from "../../context/dataContext";

const Navigation = () => {
  const { page, setPage, setIsDefaultPage } = useDataContext();

  return (
    <nav>
      <div className='nav-wrapper container'>
        <NavLink
          to='/'
          className='nav-logo'
          onClick={() => {
            setPage(0);
            setIsDefaultPage(true);
          }}
        >
          <h1>DiscoverFood</h1>
        </NavLink>
        <ul className='nav-links'>
          <li>
            <NavLink
              to='/'
              onClick={() => {
                setPage(0);
                setIsDefaultPage(true);
              }}
              className={({ isActive }) => (isActive ? "active" : null)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => (isActive ? "active" : null)}>
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
