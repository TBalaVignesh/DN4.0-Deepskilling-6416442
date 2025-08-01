
import React from "react";
import FlightList from "./FlightList";

const GuestPage = () => {
  return (
    <div>
      <h1>Welcome Guest</h1>
      <p>You can browse available flights below:</p>
      <FlightList />
      <p style={{ color: "gray" }}>Login to book tickets</p>
    </div>
  );
};

export default GuestPage;
