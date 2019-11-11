import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BoardGrid } from './BoardGrid';

function Game(props) {
    return (
      <div className="game">
        <div className="game-board">
          <BoardGrid />
        </div>
      </div>
    );
} 
  
// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);