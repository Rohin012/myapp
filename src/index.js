import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Home } from './Home';
import MultipleState from './MultipleState';
import { APIDisplay } from './APIDisplay';
import FormFunction from './FormFunction';
import { Ecommerse } from './Ecommerse';
import Navbar from './Component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyForm from './myform';
import DataManagement from './DataManagement';
import SingUpForm from './ValidationForm';
import CustomerData from './axios/regi';
import Login from './axios/logIn';
import RegistrationForm from './axios/registration';
import { BrowserRouter } from 'react-router-dom';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<BrowserRouter>
<App/>
</BrowserRouter>
  </> 


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
