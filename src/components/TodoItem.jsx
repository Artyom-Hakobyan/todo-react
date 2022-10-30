import React from 'react';
import '../App.css';
import { RiCloseCircleLine } from "react-icons/ri"

const TodoItem = ({ todos, completeTodo, removeTodo }) => {

    return todos.map((todo, index) => (
        <div key={index} className="    ">
            <span className={todo.isComplete ? "todo-row complete" : "todo-row not-complete"} 
                  key={todo.key} 
                  onClick={() => completeTodo(todo.id)} 
                  style={{ display: "inline-block", position: "relative", bottom: "3px", cursor: "pointer" }}>
                {todo.text}
            </span>
            <div className='icons'>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)}
                                   className="delete-icon" />
            </div>
        </div>
    ))
}

export default TodoItem;