import React, { useState, useEffect } from "react";
import Accessibility from "./Components/Accessibility/Accessibility";
import { useAccessibility } from "./hooks/useAccessibility";

function App() {
  useAccessibility();
  return (
    <div>
      <Accessibility />
      <header>
        <div>Hey</div>
      </header>
    </div>
  );
}

export default App;
