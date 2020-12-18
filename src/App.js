import './App.css';
import React, { useState } from 'react';

function App() {
  const [todo, setTodo] = useState("");
  console.log(todo)
  const onSubmit = event => {
    localStorage.setItem('todoLocalStorage', todo);
  }

  return (
    <div className="App">
      <form onSubmit={onSubmit}>
        <input type="text" value={todo} onChange={(e) =>setTodo(e.target.value)} />
      </form>
    </div>
  );
}

export default App;
