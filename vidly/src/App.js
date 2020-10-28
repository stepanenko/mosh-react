
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';

import Movies from './components/movies';
import Nav from './components/nav';
import Home from './components/home';
import Contact from './components/contact';

function App() {
  return (
    <>
      <Nav />
      <main className="container">
        <Switch>
          <Route path='/movies' component={Movies} />
          <Route path='/contact' component={Contact} />
          <Route path='/' component={Home} />
        </Switch>
      </main>
    </>
  );
}

export default App;
