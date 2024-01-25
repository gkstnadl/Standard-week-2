import React from 'react';

const Todo = ({todo, onDeleteTodo, onIsDoneToggle}) => {
  const handleDelete = () => {
    if (window.confirm('이 항목을 삭제하시겠습니까?')) {
      onDeleteTodo(todo.id);
    }
  };

  const handleIsDoneToggle = () => {
    const action = todo.isDone ? '취소' : '완료';
    if (window.confirm(`이 항목을 ${action}하시겠습니까?`)) {
      onIsDoneToggle(todo.id);
    }
  };

  return (
        <div>
          <h2>{todo.title}</h2>
          <p>{todo.content}</p>
          <div>
            <button onClick={handleDelete}>삭제하기</button>
            <button onClick={handleIsDoneToggle}>{todo.isDone ? '취소' : '완료'}</button>
          </div>
        </div>
  );
};

export default Todo;
