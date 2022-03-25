
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './index.css';

import Movies from './components/movies';
import NavBar from './components/navbar';
import Customer from './components/common/customer';
import NotFound from './components/common/notFound';
import Dashboard from './components/admin/dashboard';
import Customers from './components/customers';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import AddMovie from './components/addMovie';
import EditMovie from './components/editMovie';
import Rentals from './components/rentals';
import Users from './components/admin/users';
import Products from './components/admin/products';
import Countries from './components/countries';


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
          <Route path='countries' element={<Countries />} />
          <Route path='customers' element={<Customers />}>
            <Route exact path=':customer' element={<Customer />} />
            <Route path=':year?/:month?' element={props => <Customers {...props} />} />
          </Route>
          <Route path='rentals' element={<Rentals />} />
          <Route path='login' element={<LoginForm />} />
          <Route path='register' element={<RegisterForm />} />
          <Route path='admin' element={<Dashboard />}>
            <Route path='users' element={<Users />} />
            <Route path='products' element={<Products />} />
          </Route>
          <Route path='not-found' element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
