import React from 'react';

const TodoItem = props => {
    return(
        <li className="list-group-item">
            {props.todo.task}
        </li>
    );
};

export default TodoItem;