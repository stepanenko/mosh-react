
import React, { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

root.render(
  // <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </StrictMode>
);

// StrictMode renders components twice (on dev but not production) in order to detect
// any problems with your code and warn you about them (which can be quite useful).
