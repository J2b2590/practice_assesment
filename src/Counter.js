import React from "react";

const Counter = (props) => {
  console.log(props.count, "count");

  return (
    <div style={{ margin: "0", textAlign: "center" }}>
      <h1>{props.count}</h1>
    </div>
  );
};

export default Counter;
