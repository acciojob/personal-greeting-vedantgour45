import React, { useState } from "react";
import "./Greet.css"

export default function Greet() {
  const [name, setName] = useState("");

  const inputChangeHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <div className="form">
        <label htmlFor="inputName">Enter your name:</label>
        <input type="text" onChange={inputChangeHandler} id="inputName" />
      </div>
      <div>
        <p>Hello {name}!</p>
      </div>
    </div>
  );
}
