import React, { Component } from 'react'
import Todos from './Todos';
import AddTodo from './TodoForm';
 class App extends Component {
  state = {
    todos:[{id:1,content:'Buy milk'},{id:2,content:'Buy chocolate'}]
  };
    deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id
    });
    this.setState({
      todos
    });
  }
  addTodo = (todo)=>{
    todo.id = Math.random()
    let newTodo = [...this.state.todos,todo];
    this.setState({
     todos: newTodo
    })
  }
  render() {
    
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}
export default App;