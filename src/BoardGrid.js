import React from "react";
import { Board } from "./Board";

export class BoardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.resetGame = React.createRef();
    this.state = {
      xIsNext: true
    };
  }
  handleReset() {
    this.resetGame.current.reset();
  }
  handler() {
    this.setState({
      xIsNext: !this.state.xIsNext
    });
  }
  render() {
    const status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    return (
      <div>
        <div className="status">{status}</div>
        <div className="boards">
          <Board
            ref={this.resetGame}
            id={"board-1"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-2"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-3"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
        </div>
        <div className="boards">
          <Board
            ref={this.resetGame}
            id={"board-4"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-5"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-6"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
        </div>
        <div className="boards">
          <Board
            ref={this.resetGame}
            id={"board-7"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-8"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
          <Board
            ref={this.resetGame}
            id={"board-9"}
            xHandler={this.handler}
            xIsNext={this.state.xIsNext}
          />
        </div>
        <button onClick={this.handleReset}>Reset Game</button>
      </div>
    );
  }
}
// send to Game (index.js)
