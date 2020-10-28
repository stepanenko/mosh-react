
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import './index.css';

import Movies from './components/movies';
import NavBar from './components/navbar';
import Home from './components/home';
import Posts from './components/posts';
import Post from './components/common/post';
import NotFound from './components/common/not_found';
import Dashboard from './components/admin/dashboard';

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path='/movies' component={Movies} />
          <Route path='/posts/:post' exact component={Post} />
          <Route path='/posts/:year?/:month?' render={props => <Posts myProp='cool' {...props} />} />
          <Route path='/admin' component={Dashboard}/>
          <Redirect from='/films' to='/movies' />
          <Route path='/not_found' component={NotFound} />
          <Route path='/' exact component={Home} />
          <Redirect to='not_found' />
        </Switch>
      </main>
    </>
  );
}

export default App;
