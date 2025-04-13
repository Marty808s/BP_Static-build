import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
//import Test from './pages/TestPage';
import LoginPage from "@pages/LoginPage";
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginPage/>
    </BrowserRouter>
  </React.StrictMode>
);


reportWebVitals();
