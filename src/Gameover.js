import React from "react";

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <button className="close_btn" onClick={props.close}>
          X
        </button>
        <h2>GAME OVER</h2>
        <p> Score was: {props.score} </p>
      </div>
    </div>
  );
};

export default GameOver;
