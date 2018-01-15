import React, { Component } from 'react';
import Header from './header';
import AddTodo from './add_todo';
import Footer from './footer';

class App extends Component {
constructor(props) {
  super(props);

  
}

  render() {
    return (
      <div className="App">
       <Header />
       <AddTodo />
       <Footer />
      </div>
    );
  }
}

export default App;
