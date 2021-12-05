import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggleVisibility = this.toggleVisibility.bind(this)
  }
  toggleVisibility() {
    // Change code below this line
this.setState(state => {
  if (state.visibility === true) {
    return {visibility: false};
  }
  else {
    return {visibility: true};
  }
})
    // Change code above this line
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggleVisibility}>
            Click Me Nancee!
          </button>
          <h1>Now You see how I feel?</h1>
        </div>
      );
    }
    else {
      return (
        <div>
          <button onClick={this.toggleVisibility}>
            Click And See bro!
          </button>
        </div>
      );
    }
  }
};

export default App;
