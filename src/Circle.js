import React from "react";

const Circle = (props) => {
  return (
    <div
      style={{
        backgroundColor: props.color,
        pointerEvents: props.disabled ? "auto" : "none",
      }}
      className={`circle ${props.active ? "active" : ""}`}
      onClick={props.click}
    >
      {/* <p> {props.id}</p> */}
    </div>
  );
};

export default Circle;
