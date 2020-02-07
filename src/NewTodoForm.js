import React, { Component } from 'react';
import uuid from 'uuid/v4';

// Render a form with one text input for task

// When submitted, the todo should be created

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = { task: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.props.createTodo({ ...this.state, id: uuid(), completed: false });
    this.setState({ task: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='task'>New Todo</label>
        <input
          type='text'
          placeholder='new todo'
          id='task'
          name='task'
          value={this.state.task}
          onChange={this.handleChange}
        />
        <button>Add Todo</button>
      </form>
    );
  }
}

export default NewTodoForm;
