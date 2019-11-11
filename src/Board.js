import React from 'react';
import { Square } from './Square';
import { calculateBoardWinner } from './calculateBoardWinner';

export class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      handler: this.props.xHandler.bind(this),
    };
  }
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateBoardWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.props.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
    });
    const winner = calculateBoardWinner(this.state.squares);
    let status;
    if (winner) {
      status = winner + " wins this board";
    }
    else {
      status = 'no winner';
    }
    console.log(status);
    this.props.xHandler();
    console.log(this.state.squares);
  }
  renderSquare(i) {
    return (<Square value={this.state.squares[i]} onClick={() => {
      this.handleClick(i);
    }} className={"square-" + i} />);
  }
  render() {
    return (<div className="board">
      <div className="board-row">
        {this.renderSquare(1)}
        {this.renderSquare(2)}
        {this.renderSquare(3)}
      </div>
      <div className="board-row">
        {this.renderSquare(4)}
        {this.renderSquare(5)}
        {this.renderSquare(6)}
      </div>
      <div className="board-row">
        {this.renderSquare(7)}
        {this.renderSquare(8)}
        {this.renderSquare(9)}
      </div>
    </div>);
  }
}
// send to BoardGrid