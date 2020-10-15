
import React from 'react';
import './index.css';

import Movies from './components/movies';
import Genres from './components/genres';

function App() {
  return (
    <>
      <header>
        <h1>VIDLY APP</h1>
      </header>
      <main className="container">
        <div className="row">
          <div className="col-3">
            <Genres />
          </div>
          <div className="col-9">
            <Movies />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
