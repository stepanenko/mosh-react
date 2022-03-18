
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';

import Movies from './components/movies';
import NavBar from './components/navbar';
import Customer from './components/common/customer';
import NotFound from './components/common/not_found';
import Dashboard from './components/admin/dashboard';
import Customers from './components/customers';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import AddMovie from './components/addMovie';
import EditMovie from './components/editMovie';


function App() {
  const navigate = useNavigate();

  return (
    <>
      <NavBar />
      <main className="container">
        <Routes>
          <Route path='/' element={<Movies />} />
          <Route path='movies' element={<Movies />} />
          <Route path='movies/new-movie' element={<AddMovie navigate={navigate} />} />
          <Route path='movies/:id' element={<EditMovie />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='register' element={<RegisterForm />} />
          <Route path='customers' element={<Customers />}>
            <Route exact path=':customer' element={<Customer />} />
            <Route path=':year?/:month?' element={props => <Customers myProp='cool' {...props} />} />
          </Route>
          <Route path='admin' element={<Dashboard />} />
          <Route path='not_found' element={<NotFound />} />
          {/*<Navigate to='not_found' /> */}
        </Routes>
      </main>
    </>
  );
}

export default App;
