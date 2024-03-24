import React from 'react';
import '../styles/VehicleCard.css'; // Ensure you have a CSS file for styling
import vehicleImage from '../images/image.png'; // Assuming your image is directly under src

function VehicleCard({ model, year, price, passengers, mileage }) {
  return (
    <div className="vehicle-card">
      <img src={vehicleImage} alt="vehicle" className="vehicle-image" />
      <div className="vehicle-details">
        <h5>{model} - {year}</h5> {/* Displaying car name and year */}
        <p>Seats: {passengers}</p>
        <p>Mileage: {mileage} miles</p>
        <p>Price: {price}</p>
        <button className="details-button">Details</button>
      </div>
    </div>
  );
}

export default VehicleCard;
