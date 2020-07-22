import React, { Component } from 'react';
import Ninjas from './Ninjas';
import AddNinja from './AddNinja';

//container component
class App extends Component {
  state = {
    ninjas: [
      { name: 'Jon', age: 25, belt: 'blue', id: 1},
      { name: 'Sally', age: 35, belt: 'green', id: 2 },
      { name: 'Bob', age: 45, belt: 'black', id: 3 }
    ],
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }
  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id;
    });
    this.setState({
      ninjas: ninjas
    });
  }
  componentDidMount() {
    console.log('app.js component mounted');
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('app.js component updated');
    console.log(prevProps, prevState);
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <p>Welcome!!!!</p>
        <AddNinja addNinja={ this.addNinja } />
        <Ninjas ninjas={ this.state.ninjas } deleteNinja={ this.deleteNinja } />
      </div>
    );
  }
}

export default App;