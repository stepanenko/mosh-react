
import React from 'react';
import './index.css';

import Movies from './components/movies';

function App() {
  return (
    <>
      <header>
        <h1>VIDLY APP</h1>
      </header>
      <main className="container">
        <Movies />
      </main>
    </>
  );
}

export default App;
