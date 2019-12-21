import React from "react";

class TodoForm extends React.Component {
  state = {
    todoName: ""
  };
  handleFormData = e => {
    console.log(e.target.value);
    //   this.state.todoName = e.target.value
    this.setState({ todoName: e.target.value });
  };
  handleFormSubmit = e => {
    console.log("Form Submitted");
    e.preventDefault();
    this.props.formData(this.state);
  };
  render() {
    return (
      <div className="card w-50 mx-auto mt-5 ">
        <div className="card-header">
          <h2>{this.props.title}</h2>
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
  }
}

export default TodoForm;
