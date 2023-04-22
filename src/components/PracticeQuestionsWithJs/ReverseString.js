import React, { useState } from "react";

const ReverseString = () => {
  let [str, setStr] = useState("Krupali");
  let revString = () => {
    let def = str.split("");
    let jkl = [];
    const ghi = def.map(reverse);
    function reverse(num) {
      jkl = num.concat(jkl);
    }
    mnl = jkl.join("")
    setStr(mnl)
  };
  return (
    <>
      <input type="text" value={str}></input>
      <button type="button" onclick='revString'>
        button
      </button>
      <p>The Reverse String is {str}</p>
    </>
  );
  
};

export default ReverseString;
