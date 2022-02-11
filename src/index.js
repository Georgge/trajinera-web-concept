import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Montserrat/Montserrat-VariableFont_wght.ttf'
import './assets/fonts/Open_Sans/OpenSans-VariableFont_wdth\,wght.ttf'
import './assets/fonts/regular/la-regular-400.ttf'
import './assets/fonts/brands/la-brands-400.ttf'
import './assets/fonts/solid/la-solid-900.ttf'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
