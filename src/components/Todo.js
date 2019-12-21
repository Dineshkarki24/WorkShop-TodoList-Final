import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./Todolist";

class Todo extends React.Component {
  state = {
    todo: [
      { id: 1, todoName: "Programming" },
      { id: 2, todoName: "Playing" },
      { id: 3, todoName: "Football" }
    ]
  };
  recFormData = data => {
    let id = this.state.todo.length + 1;
    this.setState({ todo: [{ id, ...data }, ...this.state.todo] });
  };
  delete = id => {
    let filData = this.state.todo.filter(function(todo) {
      return todo.id !== id;
    });
    this.setState({ todo: filData });
  };
  edit = data => {
    let editData = this.state.todo.map(function(todo) {
      if (todo.id == data.id) {
        return data;
      }
      return todo;
    });
    this.setState({ todo: editData });
  };
  render() {
    let arr1 = [1, 2, 3];
    let arr2 = [...arr1, 4, 5, 6];
    console.log(arr2);
    return (
      <div>
        <TodoForm title="Add Daily Task" formData={this.recFormData} />
        {this.state.todo.map(todos => {
          return (
            <TodoList delete={this.delete} todo={todos} edit={this.edit} />
          );
        })}
      </div>
    );
  }
}

export default Todo;
