import React from 'react';
import { Component } from 'react';

export class FormToDo extends Component {
  state = {};

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Create to-do
          </label>
          <input
            name="todo"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Add to-do
        </button>
      </form>      
    )
    
  };
};
