import React from "react";

const closeHandler = () => {
  window.location.reload();
};

const GameOver = (props) => {
  return (
    <div className="overlay">
      <div className="popup">
        <button className="top_btn" onClick={closeHandler}>
          X
        </button>
        <h2>GAME OVER</h2>
        <p> Your Score was: {props.score} </p>
      </div>
    </div>
  );
};

export default GameOver;
