import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Added from here
import {BrowserRouter} from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
//Added by Krishna
import LandingPage from './pages/LandingPage'

import {
  BrowserRouter as Router,
  createBrowserRouter,
  RouterProvider,
  Link,
  Route
} from "react-router-dom";
import CustomerPurchaseHistory from './pages/CustomerPurchaseHistory';
import UserProfileMgmt from './pages/UserProfileMgmt';
// Added from here 
import CustomerGarage from './pages/CustomerGarage';
// To here

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "Login",
    element: <Login/>
  },
  {
    path: "SignUp",
    element: <SignUp/>
  },
  {
    path: "CustomerPurchaseHistory",
    element: <CustomerPurchaseHistory />
  },
  {
    path: "UserProfileMgmt",
    element: <UserProfileMgmt/>
  },
  // App.js is inventory browsing => but this modification will carry user_id
  {
    path: "App/:userId",
    element: <App/>
  },
  {
    path: "CustomerGarage",
    element: <CustomerGarage />
  },
  {
    path: "Landing",
    element: <LandingPage/>
  }
]);
// to here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
  
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
