import React from 'react';
import ReactDOM from 'react-dom';
import "./Styless/Style.css"

import reportWebVitals from './reportWebVitals';
import RouterHome from './container/RouterHome/RouterHome';

ReactDOM.render(
  <React.StrictMode>
    <RouterHome />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
