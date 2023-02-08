import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.scss";
import './index.css';
import { App } from "./App";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <h1 className="text-xl text-red-500 font-bld underline"> Welcome Samson Chege </h1>
      <App />
    </div>
  </StrictMode>
);







/* import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/