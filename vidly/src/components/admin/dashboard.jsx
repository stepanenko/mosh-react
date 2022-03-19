
import React from 'react';
import { Outlet } from 'react-router-dom';

import SideBar from './sidebar';

const Dashboard = () => {
  return (
    <>
      <h1>Admin Menu</h1>
      <SideBar />
      <Outlet />
    </>
  );
}

export default Dashboard;
