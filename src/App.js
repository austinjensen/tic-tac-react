import React, { Component } from 'react';
import './App.css';
import Board from './Board'
// why does my css index and app always apply

class App extends Component {
  render() {
    return (
      <div>
        <Board />
      </div>
    );
  }
}

export default App;
