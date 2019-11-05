import React, { Component } from 'react';
import './App.css';

// data
import { todos } from './todos.json';

// subcomponents
import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todo, i) => {
      return (
        <div className="col-md-4" key={i}>
          <div className="card mt-4">
            <div className="card-title text-center">
              <h3>{todo.carnet}</h3>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.schedule}
              </span>
              <span className="badge badge-pill badge-danger ml-2">
                {todo.tarde}
              </span>
            </div>
            <div className="card-footer">
              <button
                className="btn btn-danger"
                onClick={this.removeTodo.bind(this, i)}>
                Eliminar
              </button>
            </div>
          </div>
          
        </div>
      )
    });

    // RETURN THE COMPONENT
    return (
      <div className="App">

        <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row cartas">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
