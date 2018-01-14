import React, { Component } from 'react';
import Header from './header';
import AddTodo from './add_todo';

class App extends Component {
constructor(props) {
  super(props);

  this.state = { 
    todos: [], 
  };
}

  render() {
    return (
      <div className="App">
       <Header />
       <AddTodo />
      </div>
    );
  }
}

export default App;
