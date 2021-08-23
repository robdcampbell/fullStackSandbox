import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const changeNumber = (e) => {
    if (e.target.name === "add") {
      setCount((prev) => (prev += 1));
    }
    if (e.target.name === "subtract") {
      setCount((prev) => (prev -= 1));
    }
    if (e.target.name === "reset") {
      setCount(0);
    }
  };

  return (
    <div>
      <h2>Count</h2>
      <p>{count}</p>
      <button name="add" onClick={(e) => changeNumber(e)}>
        +
      </button>
      <button name="subtract" onClick={(e) => changeNumber(e)}>
        -
      </button>
      <button name="reset" onClick={(e) => changeNumber(e)}>
        Reset
      </button>
    </div>
  );
}

export default Counter;
