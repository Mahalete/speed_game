import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle";
import { circles } from "./circles";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
  };

  timer = undefined;
  pace = 1500;

  clickHandler = () => {
    this.setState({
      score: this.state.score + 10,
    });
  };

  nextCircle = () => {
    let nextActive;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    });

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace);

    console.log("active circle is ", this.state.current);
  };

  startHandler = () => {
    this.nextCircle();
  };

  stopHandler = () => {
    clearTimeout(this.timer);
  };

  render() {
    return (
      <div>
        <h1>SpeedGame</h1>
        <p>Your score: {this.state.score}</p>
        <div className="circles">
          {circles.map((c) => (
            <Circle
              key={c.id}
              color={c.color}
              id={c.id}
              click={this.clickHandler}
              active={this.state.current === c.id}
            />
          ))}
        </div>
        <div>
          <button onClick={this.startHandler}>Start</button>
          <button onClick={this.stopHandler}>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;
