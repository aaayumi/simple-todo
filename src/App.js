import './App.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([{text : 'test'},{ item: []}]);

  const onSubmit = event => {
    localStorage.setItem('todoLocalStorage', JSON.stringify(todo));
  }
  const getItem = event => {
    localStorage.getItem('todoLocalStorage');
  }

  console.log(localStorage.getItem('todoLocalStorage'))
  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" value={todo.text} onChange={(e) =>setTodo({ item: e.target.value})} />
      </form>

    </div>
  );
}

export default App;
