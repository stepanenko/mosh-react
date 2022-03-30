
// import React from 'react';
// import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import ErrorBoundary from './components/errorBoundary';
import App from './App';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';

const container = document.getElementById('app');
const root = ReactDOMClient.createRoot(container);

root.render(
  // <StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundary>
  // </StrictMode>
);

// StrictMode renders components twice (on dev but not production) in order to detect
// any problems with your code and warn you about them (which can be quite useful).

// Error boundaries work like a JavaScript catch {} block, but for components.
// Error boundaries only catch errors in the components below them in the tree.
