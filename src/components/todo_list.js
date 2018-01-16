import React from 'react';

const TodosList = function(props) {
    return(
        <ul className="todoslist">{props.TodosList}</ul>
    );
}
export default TodosList;