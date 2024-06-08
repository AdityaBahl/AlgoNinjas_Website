import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { hydrate, render } from "react-dom";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate( <React.StrictMode><App /></React.StrictMode>, rootElement);
  } else {
    render( <React.StrictMode><App /></React.StrictMode>, rootElement);
    }
    
//     root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
