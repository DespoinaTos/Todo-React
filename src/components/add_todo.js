import React, { Component } from 'react';
import TodosList from './todo_list';

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
		const newtodos = this.state.todos.slice();
		newtodos.push(this.state.currentTodo);
		this.setState({
			todos : newtodos,
			currentTodo: '',
		});
	};

	onClickDelete = (i) => {
		const newtodosD = this.state.todos.slice();
		newtodosD.splice(i ,1);
		this.setState({
			todos: newtodosD,
		})
	}

	render() {
		let listTodosItems = this.state.todos.map((e, i) => {
			return (
				<li key={i}> {e}<button onClick={this.onClickDelete}>delete</button> </li>
			);
		});

		return(
			<div>
				<input onChange={this.onInputAdd} value={this.state.currentTodo} type="text" placeholder="add new todo..."/>
				<button onClick={this.onClickAdd}>Add</button>
				<br/>
				{this.state.todos.length === 0 ? 'Add a new todo' : 'You have some todos to do'}
				<TodosList TodosList={listTodosItems}/>
			</div>
		);
	}
}

export default AddTodo;