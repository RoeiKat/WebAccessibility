import React, { useState, useEffect } from "react";

function App() {
  let font = 16;

  const increaseFont = function () {
    font += 4;
    document.body.style.fontSize = `${font}px`;
  };

  const decreaseFont = function () {
    font -= 4;
    document.body.style.fontSize = `${font}px`;
  };

  const highlightLinks = function () {
    const elements = document.getElementsByTagName("a");
  };

  return (
    <div>
      <header>
        <div>Hey</div>
      </header>
    </div>
  );
}

export default App;
