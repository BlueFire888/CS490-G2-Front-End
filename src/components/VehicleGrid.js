import React from 'react';
import VehicleCard from './VehicleCard';
import '../styles/VehicleGrid.css'; // For styling the grid

function VehicleGrid() {
  const vehicles = Array.from({ length: 15 }); // Replace with actual vehicle data if available

  return (
    <div className="vehicle-grid">
      {vehicles.map((_, index) => (
        <VehicleCard
          key={index}
          model={`Car Model ${index + 1}`}
          year={`202${index % 10}`} // Just example data
          price={`$${(index + 1) * 5000}`}
          passengers={4}
          mileage={`${(index + 1) * 10000} miles`}
        />
      ))}
    </div>
  );
}

export default VehicleGrid;
