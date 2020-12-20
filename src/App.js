import './App.css';
import React from 'react';

class App extends React.Component {
 constructor(props) {
   super(props);
   this.state = {
     text: '',
     list: ['sample', 'sample2']
   }
 }

 handleSubmit = (e) =>{
   e.preventDefault();
   this.setState({ list:[...this.state.list, this.state.text]
   })}

  render() {
   return (
       <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text'
                 onChange={(e) => this.setState({ text: e.target.value} )}
              />
        </form>
         {this.state.list.map((todo, i) => <li key={i}>{todo}</li>)}
       </div>
   )
  }
}

export default App;
