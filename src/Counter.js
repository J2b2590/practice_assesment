import React from "react";

const Counter = (props) => {
  console.log(props, "count");

  return (
    <div
      style={{
        margin: "0 auto",
        marginTop: "25%",
        textAlign: "center",
        width: "50%",
        border: "3px solid green",
      }}
    >
      <h1>{props.count}</h1>
      <button onClick={() => props.UpCount()}>UP</button>
      <button onClick={() => props.DownCount()}>Down</button>
      <button onClick={() => props.ResetCount()}>RESET</button>
    </div>
  );
};

export default Counter;
