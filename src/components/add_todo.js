import React, { Component } from 'react';

class AddTodo extends Component {
	constructor(props) {
		super(props);
	  
		this.state = { 
		  todos: [],
		  currentTodo: '',
		};
	  }
	
	onInputAdd = event => {
		this.setState({currentTodo: event.target.value});
	};

	onClickAdd = () => {
		this.state.todos.push(this.state.currentTodo);	
	};

	render() {
		return(
			<div>
				<input onChange={this.onInputAdd} type="text" placeholder="add new todo..."/>
				<button onClick={this.onClickAdd}>Add</button>
				{this.state.todos.length === 0 ? 'Add a new todo' : 'You have some todos to do'}
			</div>
		);
	}
}

export default AddTodo;