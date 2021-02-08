import React from 'react';
import ReactDOM from 'react-dom';
import "./Styless/Style.css"

import reportWebVitals from './reportWebVitals';
import Home from './container/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
