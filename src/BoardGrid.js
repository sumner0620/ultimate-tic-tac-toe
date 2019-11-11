import React from 'react';
import { Board } from './Board';

export class BoardGrid extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      xIsNext: true
    };
  }
  handler() {
    this.setState({
      xIsNext: !this.state.xIsNext
    });
  }
  render() {
    const status = 'Next player ' + (this.state.xIsNext ? 'X' : 'O');
    return (<div>
      <div className="status">{status}</div>
      <div className="boards">
        <Board id={'board-1'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
        <Board id={'board-2'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
        <Board id={'board-3'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
      </div>
      <div className="boards">
        <Board id={'board-4'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
        <Board id={'board-5'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
        <Board id={'board-6'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
      </div>
      <div className="boards">
        <Board id={'board-7'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
        <Board id={'board-8'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
        <Board id={'board-9'} xHandler={this.handler} xIsNext={this.state.xIsNext} />
      </div>
    </div>);
  }
}
// send to Game (index.js)