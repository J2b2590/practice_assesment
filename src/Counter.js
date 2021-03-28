import React from "react";

const Counter = (props) => {
  console.log(props, "count");

  return (
    <div style={{ margin: "0", textAlign: "center" }}>
      <h1>{props.count}</h1>
      <button onClick={() => props.UpCount()}>UP</button>
      <button>Down</button>
    </div>
  );
};

export default Counter;
