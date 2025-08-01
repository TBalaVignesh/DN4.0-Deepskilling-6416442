
import React from "react";
import Counter from "./components/CounterPage";
import CurrencyConverter from "./components/CurrencyConverter";

function App() {
  return (
    <div className="App">
      <h1>Event Examples App</h1>
      <Counter />
      <hr />
      <CurrencyConverter />
    </div>
  );
}

export default App;
