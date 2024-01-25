import React from 'react'
import Todo from './Todo.jsx';

const TodoList = ({todos, onDeleteTodo, onIsDoneToggle, title}) => {

  return (
    <div className='contents'>
        <h1>{title}</h1>
        <div className='content'>
            {todos.map(todo => (
                <Todo 
                    key={todo.id}
                    todo={todo}
                    onDeleteTodo={onDeleteTodo}
                    onIsDoneToggle={onIsDoneToggle}
                />
            ))}
        </div>
    </div>
  )
};

export default TodoList;