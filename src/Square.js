import React from 'react';

export function Square(props) {
  return (<button className="square" onClick={props.onClick} action={props.xHandler}>
    {props.value}
  </button>);
}
// send to Board