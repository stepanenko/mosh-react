
import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to='/'>VIDLY</NavLink>
      <div className="navbar-nav">
        <NavLink className="nav-item nav-link" to='/movies'>Movies</NavLink>
        <NavLink className="nav-item nav-link" to='/customers'>Customers</NavLink>
        <NavLink className="nav-item nav-link" to='/rentals'>Rentals</NavLink>
        <NavLink className="nav-item nav-link" to='/admin'>Admin</NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
