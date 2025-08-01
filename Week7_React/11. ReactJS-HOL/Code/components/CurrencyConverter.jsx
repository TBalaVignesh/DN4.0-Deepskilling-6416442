
import React, { useState } from "react";

const CurrencyConverter = () => {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (!rupees) {
      alert("Enter amount in Rupees");
      return;
    }
    const euroValue = (parseFloat(rupees) / 90).toFixed(2); 
    setEuro(euroValue);
  };

  return (
    <div>
      <h2>Currency Converter (INR → EURO)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          value={rupees}
          onChange={(e) => setRupees(e.target.value)}
          placeholder="Enter Rupees"
        />
        <button type="submit">Convert</button>
      </form>
      {euro && <h3>Euro: €{euro}</h3>}
    </div>
  );
};

export default CurrencyConverter;
