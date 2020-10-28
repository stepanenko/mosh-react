
import React from 'react';
import { Route } from 'react-router-dom';

import SideBar from './sidebar';
import Users from './users';
import Products from './products';

const Dashboard = () => {
  return (
    <>
      <h1>Admin Menu</h1>
      <SideBar />
      <Route path='/admin/users' component={Users} />
      <Route path='/admin/products' component={Products} />
    </>
  );
}

export default Dashboard;
