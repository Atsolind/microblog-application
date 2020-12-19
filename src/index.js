import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; //Here the frontend react app is created

//ReactDom renders the app in the root in the index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 


