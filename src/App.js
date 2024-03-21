import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FilterBar from './components/FilterBar';
import VehicleGrid from './components/VehicleGrid'; // Make sure this is correctly pointing to where your VehicleGrid component is located.
import Pagination from './components/Pagination';
import DealershipNavbar from './components/DealershipNavbar';

function App() {
  return (
    <div className="app">
      <DealershipNavbar />
      <FilterBar />
      <VehicleGrid /> {/* This replaces the individual VehicleCard component to display a grid of vehicle cards */}
      <Pagination />
    </div>
  );
}

export default App;
