import React from "react";
import FlightList from "./FlightList";

const UserPage = () => {
  const handleBook = () => {
    alert("Ticket booked successfully!");
  };

  return (
    <div>
      <h1>Welcome User</h1>
      <p>You can browse and book tickets below:</p>
      <FlightList />
      <button onClick={handleBook} style={{ marginTop: "10px" }}>
        Book Ticket
      </button>
    </div>
  );
};

export default UserPage;
