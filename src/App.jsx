import React, { useState } from 'react';
import './css/reset.css';
import './css/App.css';
import InputArea from './components/InputArea.jsx';
import TodoList from './components/TodoList.jsx';

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title, content) => {
    setTodos([...todos, { id: crypto.randomUUID(), title, content, isDone: false }]);
  };

  const handleDeleteTodo = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const toggleTodoStatus = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo, isDone: !todo.isDone };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="body">
      <div>
        <span>My Todo List</span>
        <span>React_4기</span>
      </div>
      <InputArea onAddTodo={handleAddTodo} />
      <div>
        <TodoList
          todos={todos.filter((todo) => !todo.isDone)}
          onDeleteTodo={handleDeleteTodo}
          onIsDoneToggle={toggleTodoStatus}
          title="Working🔥"
        />
        <TodoList
          todos={todos.filter((todo) => !todo.isDone)}
          onDeleteTodo={handleDeleteTodo}
          onIsDoneToggle={toggleTodoStatus}
          title="Done✔️"
        />
      </div>
    </div>
  );
}

export default App;
