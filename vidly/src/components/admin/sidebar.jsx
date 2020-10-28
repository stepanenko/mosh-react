
import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = ({ match }) => {
  return (
    <ul className="nav">
      <li className="nav-item">
        <Link className="nav-link active" to="/admin/products">Products</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/admin/users">Users</Link>
      </li>
    </ul>
  );
}

export default SideBar;
