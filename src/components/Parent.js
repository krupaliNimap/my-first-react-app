import React, { useState } from "react";
import Child1 from "./Child1";

const Parent = () => {
  const [count, setCount] = useState(10);
  const increase_rate = () => {
    setCount((prev) => prev + 1);
  };
  const decrease_rate = () => {
    setCount((prev) => prev - 2);
  };
  return (
    <div>
      <Child1
        userDetails={{ userName: "Krupali", collegeName: "Ltcoe" }}
        rating={count}
      />
      <button
        onClick={() => {
          increase_rate();
          decrease_rate();
        }}
      >
        Add Rating
      </button>
      <button onClick={decrease_rate}>Subtract Rating</button>
    </div>
  );
};

export default Parent;
