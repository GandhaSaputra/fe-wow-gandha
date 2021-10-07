import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App'
import {UserContextProvider} from './config/UserContext/UserContext'
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <Router>
        <App/>
      </Router>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
