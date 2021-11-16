import React, { Component } from "react";
import "./App.css";
import Circle from "./Circle";
import GameOver from "./GameOver";
import { circles } from "./circles";

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

class App extends Component {
  state = {
    score: 0,
    current: 0,
    gameOver: false,
    pace: 1500,
    rounds: 0,
    gameStart: false,
    gameEnd: false,
  };

  timer = undefined;

  clickHandler = (id) => {
    //binding data with the event
    console.log("you clicked: ", id);

    if (this.state.current !== id) {
      //Check if the circle id is the one I clicked
      this.stopHandler();
      return; //stops anythinng from continuing
    }

    this.setState({
      score: this.state.score + 10,
      rounds: 0,
    });
  };

  nextCircle = () => {
    if (this.state.rounds >= 5) {
      this.stopHandler();
      return; //stops anythinng from continuing
    }
    let nextActive;

    do {
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
      pace: this.state.pace * 0.95,
      rounds: this.state.rounds + 1,
    });

    this.timer = setTimeout(this.nextCircle, this.state.pace);

    console.log("active circle is ", this.state.current);
    console.log("Round number ", this.state.rounds);
  };

  startHandler = () => {
    this.nextCircle();
    this.setState({ gameStart: true });
  };

  stopHandler = () => {
    clearTimeout(this.timer);
    this.setState({ gameEnd: true });

    this.setState({
      gameOver: true,
      current: 0,
      gameStart: false,
      gameEnd: false,
    });
  };

  closeHandler = () => {
    this.setState({
      gameOver: false,
      score: 0,
      pace: 1500,
      rounds: 0,
    });
  };

  render() {
    return (
      <div>
        {this.state.gameOver && (
          <GameOver score={this.state.score} close={this.closeHandler} />
        )}
        <h1>Test your Speed Game</h1>
        <p>Your score: {this.state.score}</p>
        <div className="circles">
          {circles.map((c) => (
            <Circle
              key={c.id}
              color={c.color}
              id={c.id}
              //Binding anonymous functionsthe data which circle we are clicking
              click={() => this.clickHandler(c.id)}
              active={this.state.current === c.id}
            />
          ))}
        </div>
        <div>
          <button disabled={this.state.gameStart} onClick={this.startHandler}>
            Start
          </button>
          <button disabled={this.state.gameEnd} onClick={this.stopHandler}>
            Stop
          </button>
        </div>
      </div>
    );
  }
}

export default App;
