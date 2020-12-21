import './App.css';
import React, { useState }from 'react';

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       text: '',
//       list: []
//     }
//   }
//
//   handleSubmit = (e) => {
//     e.preventDefault();
//     this.setState({
//       list: [...this.state.list, this.state.text]
//     })
//   }
//
//   render() {
//     return (
//         <div>
//           <form onSubmit={this.handleSubmit}>
//             <input type='text'
//                    onChange={(e) => this.setState({text: e.target.value})}
//             />
//           </form>
//           {this.state.list.map((todo, i) => <li key={i}>{todo}</li>)}
//         </div>
//     )
//   }
// }

function App (){
  const [todo, setTodo] = useState("")
  const [list, setList] = useState([])

  const handleSubmit =(e)=>{
    e.preventDefault();
    setList([todo, ...list]);
  }
  const toggleTodo = id=> {
     console.log(id)
  }
    return(
   <div>
   <form onSubmit={handleSubmit}>
     <input type='text'
            onChange={(e) => setTodo({text:e.target.value, completed: false})}
            />
   </form>
     {list.map((todo, i) => <li key={i}
     onClick={toggleTodo(i)}
     >{todo.text}</li>)}
   </div>
    )
}
export default App;
