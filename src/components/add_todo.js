import React, { Component } from 'react';
import TodosList from './todo_list';
import logo from './img/msg.png';

class AddTodo extends Component {
	constructor(props) {
		super(props);
	  
		// setting the state
		this.state = { 
		  todos: [],
		  currentTodo: '',
		};
	  }

	
	  //function when the input state changes
	  onInputAdd = event => {
		this.setState({currentTodo: event.target.value});
	};

	//function when the user clicks the add todo button
	onClickAdd = () => {
		const newtodos = this.state.todos.slice();
		newtodos.push(this.state.currentTodo);
		this.setState({
			todos : newtodos,
			currentTodo: '',
		});
	};

	//function when the user clicks the delete todo button
	onClickDelete = (i) => {
		let newtodosD = this.state.todos.slice();
		newtodosD.splice(i, 1);
		this.setState({
			todos: newtodosD,
		});
	}

	render() {
		let listTodosItems = this.state.todos.map((e, i) => {
			return (
				<li className="lis" key={i}> {e} 
				<i className="fa fa-check-square-o" aria-hidden="true" ></i>
				<i onClick={() => this.onClickDelete(i)} className="fa fa-minus-square-o" aria-hidden="true"></i>
				 </li>
			);
		});

		return(
			<div>
				<TodosList TodosList={listTodosItems}/>
				<div className="addtodo">
				{this.state.todos.length === 0 ? <img src={logo} alt="logo"/> : null }
				<input className="input" onChange={this.onInputAdd} value={this.state.currentTodo} type="text" placeholder="add new todo..."/>
				<i onClick={this.onClickAdd} className="fa fa-plus-circle aItem" aria-hidden="true"></i>
				<br/>
				
				</div>
			</div>
		);
	}
}

export default AddTodo;