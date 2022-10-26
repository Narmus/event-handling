import React, { useState } from "react";

function App() {
  let [greeting, setGreeting] = useState("");
  let [isMousedOver, setMousedOver] = useState(false);
  let [name, newName] = useState("");

  function greetGuest() {
    setGreeting(name);
  }

  function handleMouseOver() {
    console.log("moused over");
    setMousedOver(true);
  }

  function handleMouseOut() {
    console.log("moused out");
    setMousedOver(false);
  }

  function setUser(event) {
    newName(event.target.value);
  }

  return (
    <div className="container">
      <h1>Hello {greeting}</h1>
      <input onChange={setUser} type="text" placeholder="What's your name?" />
      <button
        onClick={greetGuest}
        style={{ backgroundColor: isMousedOver ? "black" : "white" }}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
