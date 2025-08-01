// src/components/OfficeList.js
import React from "react";
import "./OfficeList.css"; // CSS file for styling

const OfficeList = () => {
  // Office space data
  const offices = [
    {
      name: "DBS",
      rent: 50000,
      address: "Chennai",
      image: "https://wallpaperaccess.com/full/4012588.jpg" 
    },
    {
      name: "Regus",
      rent: 75000,
      address: "Bangalore",
      image: "https://wallpaperaccess.com/full/4012588.jpg"
    },
    {
      name: "WeWork",
      rent: 60000,
      address: "Hyderabad",
      image: "https://wallpaperaccess.com/full/4012588.jpg"
    }
  ];

  return (
    <div>
      <h1>Office Space, at Affordable Range</h1>

      {offices.map((office, index) => {
        // Conditional color for rent
        const rentColor = office.rent <= 60000 ? "textRed" : "textGreen";

        return (
          <div key={index} className="office-card">
            <img
              src={office.image}
              alt={office.name}
              width="25%"
              height="25%"
            />
            <h2>Name: {office.name}</h2>
            <h3 className={rentColor}>Rent: Rs. {office.rent}</h3>
            <h3>Address: {office.address}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default OfficeList;
