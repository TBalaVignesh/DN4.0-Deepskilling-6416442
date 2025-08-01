import React from "react";

const FlightList = () => {
  const flights = [
    { id: 1, name: "IndiGo 6E 123", from: "Chennai", to: "Delhi", price: 4500 },
    { id: 2, name: "Air India AI 202", from: "Mumbai", to: "Bangalore", price: 5500 },
    { id: 3, name: "SpiceJet SG 456", from: "Hyderabad", to: "Kolkata", price: 4000 }
  ];

  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map((flight) => (
          <li key={flight.id}>
            {flight.name} - {flight.from} → {flight.to} - Rs.{flight.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FlightList;
