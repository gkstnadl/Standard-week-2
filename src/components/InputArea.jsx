import React, { useState } from 'react';

const InputArea = ({ onTodo }) => {
  const [inputs, setInputs] = useState({
    title: '',
    content: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const handleAddTodoClick = (e) => {
    const { title, content } = inputs;
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
    onTodo(inputs.title, inputs.content);
    setInputs({ title: '', content: '' });
  };

  return (
    <form>
      <label>제목 : </label>
      <input name='title' value={inputs.title} onChange={handleInput}></input>
      <label>내용 : </label>
      <input name='content' value={inputs.content} onChange={handleInput}></input>
      <button onClick={handleAddTodoClick}>추가하기</button>
    </form>
  );
};

export default InputArea;