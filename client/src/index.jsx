// import ReactDOM
// where we render App to the root or whatever we're calling it

import React from 'react';
import ReactDOM from 'react-dom';

// Can swap Hash Router for Browser Router

import { BrowserRouter as Router } from 'react-router-dom'
import App from './components/App';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { UserContextProvider } from './userContext'
import { BoozeContextProvider } from './boozeContext'
import { ImgUploadContextProvider } from './imageUploadsContext'


ReactDOM.render(
  <UserContextProvider>
    <BoozeContextProvider>
      <ImgUploadContextProvider>
        <Router>
          <App />
        </Router>
      </ImgUploadContextProvider>
    </BoozeContextProvider>
  </UserContextProvider>,
  document.getElementById('app'));