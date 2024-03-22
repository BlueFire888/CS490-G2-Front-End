import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// Added from here
import Login from './pages/Login';
import SignUp from './pages/SignUp';
//Added by Krishna
import LandingPage from './pages/LandingPage'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CustomerPurchaseHistory from './pages/CustomerPurchaseHistory';
import UserProfileMgmt from './pages/UserProfileMgmt';

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
  {
    path: "Landing",
    element : <LandingPage/>
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
