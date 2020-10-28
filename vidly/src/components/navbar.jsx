
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/movies">Movies</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/posts">Posts</Link>
      </li>
    </ul>
  );
}

export default NavBar;
