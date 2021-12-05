import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this)
    this.decrement = this.decrement.bind(this)
    this.reset = this.reset.bind(this)
  }
  increment() {
  this.setState(state => ({
      count: state.count + 1
    }));
  }

  decrement() {
    this.setState(state => ({
        count: state.count - 1
      }));
    }

    reset() {
      this.setState(state => ({
          count: 0
        }));
      }
  
  render() {
      return (
        <div>
          <button className="Increment" onClick={this.increment}>Increment</button>
          <button className="Reset" onClick={this.reset}>Reset</button>
          <button className="Decrement" onClick={this.decrement}>Decrement</button>
          <h2>{this.state.count}</h2>
        </div>
      );
    }

  };




export default App;
