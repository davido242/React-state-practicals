import React from 'react';
import './App.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Davido"
    }
  }

  render() {
    return (
      <div>
        <NavBar name={this.state.name}/>
      </div>
    )
  }
}

class NavBar extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Welcome Monsior  {this.props.name}</h1>
      </div>
    )
  }
}

export default App;
