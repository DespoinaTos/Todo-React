// Created a functional component which will add all the lis of the todos array
//inside this ul

import React from 'react';

const TodosList = function(props) {
    return(
        <ul className="todoslist">{props.TodosList}</ul>
    );
}
export default TodosList;