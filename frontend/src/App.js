import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FilterBar from './components/FilterBar';
import VehicleGrid from './components/VehicleGrid'; // Make sure this is correctly pointing to where your VehicleGrid component is located.
import Pagination from './components/Pagination';
import DealershipNavbar from './components/DealershipNavbar';
// Added
import { BrowserRouter, Route, Routes, useParams } from 'react-router-dom';
import DealershipNavBarLogged from './components/DealershipNavbarLogged';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// End added


function App() {
  
  const location = useLocation();
  const { previousUrl } = location.state || {};
  console.log(previousUrl);

  const {userId} = useParams();
  console.log("Use id is: ",  userId);
  
  return (
    <div className="app">
      {/* User will see Log In button if they are not logged in*/}
      {userId == undefined && <DealershipNavbar />}
      {/* User will see Log Out button if they are logged in*/}
      {userId != undefined && <DealershipNavBarLogged/>}
      <FilterBar />
      <VehicleGrid /> {/* This replaces the individual VehicleCard component to display a grid of vehicle cards */}
      <Pagination />
    </div>
  );
}

export default App;
