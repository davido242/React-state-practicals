import React from 'react';
import './App.css';
import { useState } from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  componentWillUnmount(){
    {console.log("Davido")}
  }
  render() {
    return (
       <div>
        { /* Change code below this line */ }
    <GetInput input={this.state.inputValue}
    handleChange={this.handleChange}/>
    <RenderInput input={this.state.inputValue} />
    <Example />
    <FavoriteColor/>
        { /* Change code above this line */ }
       </div>
    );
  }
};

class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};


function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}


function FavoriteColor() {
  const [countt, setCount] = useState("red");

  return (
    <>
      <h1>My favorite color is {countt}!</h1>
      <button
        onClick={() => setCount("blue")}
      >Blue</button>
    </>
  )
}

export default App;
