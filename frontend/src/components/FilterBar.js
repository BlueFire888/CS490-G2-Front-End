import React from 'react';
import '../styles/FilterBar.css'; // Ensure the CSS file is imported

function FilterBar() {
  return (
    <div className="filter-bar">
      {/* First row */}
      <div className="filter-row">
        <select name="model" className="filter-select">
          <option value="">Model</option>
          {/* Add model options here */}
        </select>

        <input type="date" name="dateAdded" className="filter-input" placeholder="Date Added" />

        <select name="random" className="filter-select">
          <option value="">Random/Any</option>
          {/* Add random options here */}
        </select>
      </div>

      {/* Second row */}
      <div className="filter-row">
        <input type="text" name="carName" className="filter-input" placeholder="Car Name" />

        <select name="year" className="filter-select">
          <option value="">Year</option>
          {/* Add year options here */}
        </select>

        <select name="price" className="filter-select">
          <option value="">Price Range</option>
          {/* Add price range options here */}
        </select>
      
        <button className="search-button">Search</button>
      </div>
    </div>
  );
}

export default FilterBar;
