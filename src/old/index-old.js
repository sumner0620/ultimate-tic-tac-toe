import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

  function Square(props) {
    return (
      <button className="square" onClick={props.onClick} action={props.handlerToBind}>
        {props.value}
      </button>
    )
  }
  // function calculateWinner(squares) {
  //   const lines = [
  //     [0, 1, 2],
  //     [3, 4, 5],
  //     [6, 7, 8],
  //     [0, 3, 6],
  //     [1, 4, 7],
  //     [2, 5, 8],
  //     [0, 4, 8],
  //     [2, 4, 6],
  //   ];
  //   for (let i = 0; i < lines.length; i++) {
  //     const [a, b, c] = lines[i];
  //     if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
  //       return squares[a];
  //     }
  //   }
  //   return null;
  // }
  class Board extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        squares: Array(9).fill(null),
        xIsNext: this.props.xIsNext,
      }
      this.handlerToBind = this.props.handlerToBind
    }
    handleClick(i) {
      const squares = this.state.squares.slice();
      var activeI = 'board-'+i;
      var activeBoard = document.getElementById('board-'+i);
      console.log(typeof activeI);
      console.log(activeBoard);
      // activeBoard.className += 'activeBoard';
      // if(calculateWinner(squares) || squares[i]) {
      //   return;
      // }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        squares:squares,
        xIsNext:!this.state.xIsNext,
      });
     this.handlerToBind(this.state.xIsNext);
    }
    renderSquare(i) {
      return (
        <Square 
          value={this.state.squares[i]} 
          onClick={()=>this.handleClick(i)}
          className={"square-"+i}
        />
      );
    }
    render() {
      return (
        <div className="board" id="{i}">
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  class BoardGrid extends React.Component {
    constructor(props) {
      super(props);
      var handlerToBind = this.handlerToBind.bind(this);
      var j = 0;
    }
    handlerToBind(xIsNext) {
      this.setState({
        xIsNext: xIsNext,
      });
    }
    renderBoard(i) {
      this.j++;
      var handlerToBind = this.handlerToBind;
      return (
        <Board 
        id={'board-'+this.j} 
        handlerToBind={handlerToBind.bind(this)}
        />
      );
    }
    render() {
      return (
        <div>
          <div className="boards">
            {this.renderBoard(0)}
            {this.renderBoard(1)}
            {this.renderBoard(2)}
          </div>
          <div className="boards">
            {this.renderBoard(3)}
            {this.renderBoard(4)}
            {this.renderBoard(5)}
          </div>
          <div className="boards">
            {this.renderBoard(6)}
            {this.renderBoard(7)}
            {this.renderBoard(8)}
          </div>
        </div>
      );
    }
  }
  class Game extends React.Component {
    render() {
      // const winner = calculateWinner(this.state.squares);
      // let status;
      // if(winner) {
      //   status = 'Winner: '+ winner;
      // }else {
      //   status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      // }
      return (
        <div className="game">
          {/* <div className="status">{status}</div> */}
          <div className="game-board">
            <BoardGrid />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
          {/* <div class="reset">
            {this.renderReset()}
          </div> */}
        </div>
      );
    }
  } 
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );