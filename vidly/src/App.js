
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './index.css';

import Movies from './components/movies';
import NavBar from './components/navbar';
import Customer from './components/common/customer';
import NotFound from './components/common/not_found';
import Dashboard from './components/admin/dashboard';
import Customers from './components/customers';
import Movie from './components/common/movie';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import MovieForm from './components/movieForm';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path='/movies/new-movie' component={MovieForm} />
          <Route path='/movies/:id' component={Movie} />
          <Route path='/movies' component={Movies} />
          <Route path='/login' component={LoginForm} />
          <Route path='/register' component={RegisterForm} />
          <Route path='/customers/:customer' exact component={Customer} />
          <Route path='/customers/:year?/:month?' render={props => <Customers myProp='cool' {...props} />} />
          <Route path='/admin' component={Dashboard}/>
          <Route path='/not_found' component={NotFound} />
          <Redirect from='/' to='/movies' exact />
          <Redirect to='not_found' />
        </Switch>
      </main>
    </>
  );
}

export default App;
