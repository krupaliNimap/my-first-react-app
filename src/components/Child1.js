import React from "react";

const Child1 = (props) => {
  console.log("props", props);
  return (
    <div>
      <p>Hi, My name is {props?.userDetails?.userName}</p>
      <p>My College name is{props?.userDetails?.collegeName}</p>
      <p>Rating : {props?.rating}</p>
    </div>
  );
};

export default Child1;
