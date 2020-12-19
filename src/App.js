import './App.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([{text : 'test'},{ item: []}]);

  const onSubmit = event => {

    setTodo({text: ''}, {item: todo.text})
    localStorage.setItem('todoLocalStorage', JSON.stringify(todo));
  }
  // const getItem = event => {
  //   localStorage.getItem('todoLocalStorage');
  // }
  console.log('text',todo.text)
  console.log('item',todo.item)
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" value={todo.text} onChange={(e) =>setTodo({ text: e.target.value})} />
      </form>

    </div>
  );
}

export default App;
