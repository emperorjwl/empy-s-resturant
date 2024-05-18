"use client";

import { useState } from "react";

export default function Home() {
  var [screen, updateScreen] = useState("");
  function handleButtonCLick(evt) {
    screen += evt.target.innerHTML;
    updateScreen(screen);
  }

  function handleEvaluation() {
    screen = eval(screen);
    updateScreen(screen);
  }

  function handleClear() {
    screen = "";
    updateScreen(screen);
  }

  return (
    <main>
      <div className="calcname">
        <h2>Empy's Calculator</h2>
      </div>

      <div className="res"> 
        <label>{screen}</label>
      </div>

      <div className="buttons">
        <button onClick={handleButtonCLick}>1</button>
        <button onClick={handleButtonCLick}>2</button>
        <button onClick={handleButtonCLick}>3</button>
        <button onClick={handleButtonCLick}>4</button>
        <button onClick={handleButtonCLick}>5</button>
        <button onClick={handleButtonCLick}>6</button>
        <button onClick={handleButtonCLick}>7</button>
        <button onClick={handleButtonCLick}>8</button>
        <button onClick={handleButtonCLick}>9</button>
        <button onClick={handleButtonCLick}>0</button>
        <button onClick={handleButtonCLick} className="operator">
          +
        </button>
        <button onClick={handleButtonCLick} className="operator">
          -
        </button>
        <button onClick={handleButtonCLick} className="operator">
          /
        </button>
        <button onClick={handleButtonCLick} className="operator">
          *
        </button>
        <button onClick={handleEvaluation} className="equal">
          =
        </button>
        <button onClick={handleClear} className="remove">
          CLEAR
        </button>
      </div>
    </main>
  );
}
