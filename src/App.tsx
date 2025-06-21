import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

let colors = [" #00BFFF", " #DC143C", " #32CD32", " #FFD700", "	#DA70D6"];

function App() {
  const [ColorIndex, SetColorIndex] = useState(0);
  const ChangeColor = () => {
    SetColorIndex(
      (prevColorIndex: number) => (prevColorIndex + 1) % colors.length
    );
  };
  return (
    <div className="d-flex justify-content-center" style={{ height: "100vh" }}>
      <button
        type="button"
        className="btn"
        onClick={ChangeColor}
        style={{
          background: colors[ColorIndex],
        }}
      >
        Base class
      </button>
    </div>
  );
}

export default App;
