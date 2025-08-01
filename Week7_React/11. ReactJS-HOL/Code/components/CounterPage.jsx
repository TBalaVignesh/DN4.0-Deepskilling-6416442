// src/components/Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    incrementValue();
    sayHello();
  };

  const incrementValue = () => setCount(count + 1);

  const sayHello = () => {
    alert("Hello! Static Message: Counter Incremented");
  };

 
  const handleDecrement = () => setCount(count - 1);

  const sayWelcome = (msg) => {
    alert(msg);
  };

  const handleSyntheticEvent = (e) => {
    alert("I was clicked");
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <br /><br />
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>
      <br /><br />
      <button onClick={handleSyntheticEvent}>Synthetic Event</button>
    </div>
  );
};

export default Counter;
