import React from "react";

class TodoList extends React.Component {
  state = {
    isEditing: false,
    todoName: this.props.todo.todoName
  };
  handleDelete = () => {
    this.props.delete(this.props.todo.id);
  };
  handleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };
  handleFormData = e => {
    console.log(e.target.value);
    //   this.state.todoName = e.target.value
    this.setState({ todoName: e.target.value });
  };
  handleFormSubmit = e => {
    console.log("Form Submitted");
    e.preventDefault();
    let obj = {
      todoName: this.state.todoName,
      id: this.props.todo.id
    };
    this.props.edit(obj);
    this.setState({ isEditing: false });
  };
  render() {
    if (this.state.isEditing) {
      return (
        <div className="card w-50 mx-auto mt-5 ">
          <div className="card-header">
            <h2>EditForm</h2>
          </div>
          <div className="card-body">
            <form action="" onSubmit={this.handleFormSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add Daily Task"
                  onChange={this.handleFormData}
                  value={this.state.todoName}
                />
              </div>
              <button className="btn btn-primary btn-sm">Add</button>
            </form>
          </div>
        </div>
      );
    } else {
      return (
        <div className="card w-50 mx-auto mt-2">
          <ul className="list-group">
            <li className="list-group-item">
              {this.props.todo.todoName}
              <div className="float-right">
                <i
                  className="fas fa-trash-alt mr-3 "
                  onClick={this.handleDelete}
                ></i>
                <i className="fas fa-edit" onClick={this.handleEdit}></i>
              </div>
            </li>
          </ul>
        </div>
      );
    }
  }
}

export default TodoList;
