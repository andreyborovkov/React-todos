import React, { Component } from 'react';
import TodoList from './TodoList';
import AddBar from './AddBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      todos: ["A", "B", "C"],
      currentText:''
    };
  }
  setText = (e) => {
    const newValue = e.target.value;
    this.setState({currentText: newValue})
  }
  addTodo = () => {
    const newTodo = this.state.currentText;
    const newTodos = [...this.state.todos, newTodo]
    this.setState({todos: newTodos, currentText: '' })
  }
  render() {
    const {currentText, todos} = this.state;
      return (
        <div className="App">
            <AddBar 
            currentText={currentText}
            setText={this.setText}
            addTodo={this.addTodo}
            />
            <TodoList todos={todos} />
        </div>
      );
  }
}

export default App;
