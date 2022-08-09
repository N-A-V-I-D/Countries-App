import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Second from './Second'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom'
import { Routes, Route, useParams } from "react-router-dom";
import {createMemoryHistory} from 'history';
const root = ReactDOM.createRoot(document.getElementById('root'));

export const history = createMemoryHistory()
root.render(
  <BrowserRouter history={history} location={history.location} navigator={history} >
    <React.StrictMode>
      <App/>
    </React.StrictMode>x
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
/*
<Routes>
<Route path="/" element={<App />}/>
<Route path="/second" element={<Second />}/>
</Routes>
*/