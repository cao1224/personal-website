import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// Import our custom CSS
import '../src/scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
