import React, { useState } from "react";

function App() {
  const [headText, setHeadText] = useState("Hello");
  const [mouseOverIs, setMouseOver] = useState(false);
  function clickMe() {
    setHeadText("Submitted");
  }
  function mouseOver() {
    setMouseOver(true);
  }
  function mouseOut() {
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{headText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button
        style={{ backgroundColor: mouseOverIs ? "black" : "white" }}
        onClick={clickMe}
        onMouseOver={mouseOver}
        onMouseOut={mouseOut}
      >
        Submit
      </button>
    </div>
  );
}

export default App;
