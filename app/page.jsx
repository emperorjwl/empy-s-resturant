"use client";

import { useState } from "react";

export default function Page() {
  var [num, update] = useState(0);

  function handleButtonClick() {
    num += 1000000;
    update(num);
  }

  function handleButtonClick2() {
    num -= 1000000;
    update(num);
  }

  return (
    <main>
      <h1>My Money Page</h1>
      <p>My Savings for the Year</p>
      <p className="money">NGN {num}</p>
      <button onClick={handleButtonClick}>+</button>
      <button className="button2" onClick={handleButtonClick2}>
        -
      </button>
    </main>
  );
}
