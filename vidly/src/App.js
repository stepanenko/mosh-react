
import React from 'react';
import './index.css';

import Movies from './components/movies';
import GroupList from './components/grouplist';

function App() {
  return (
    <>
      <header>
        <h1>VIDLY APP</h1>
      </header>
      <main className="container">
        <div class="row">
          <div class="col-3">
            <GroupList />
          </div>
          <div class="col-9">
            <Movies />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
