import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle";
import { circles } from "./circles";

class App extends Component {
  state = {
    score: 0,
  };
  clickHandler = () => {
    this.setState({
      score: this.state.score + 10,
    });
  };

  render() {
    return (
      <div>
        <h1>SpeedGame</h1>
        <p>Your score:{this.state.score}</p>
        <div className="circles">
          {circles.map((c) => (
            <Circle
              key={c.id}
              color={c.color}
              id={c.id}
              click={this.clickHandler}
            />
          ))}
        </div>
        <div>
          <button>Start</button>
          <button>Stop</button>
        </div>
      </div>
    );
  }
}

export default App;
