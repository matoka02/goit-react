import { Component } from "react";



class FormFilterToDo extends Component {
  state = {
    todo: '',
  };

  handleChange = ({ target }) => {
    this.setState({
      // [имя ключа]: значение, откуда забирать
      [target.name]: target.value,
    });
  };

  render() {
    return (
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInput" className="form-label">
            Filter: 
          </label>
          <input
            name="todo"
            type="text"
            className="form-control"
            id="exampleInput"
            onChange={this.handleChange}
            // value={this.state.todo}
          />
        </div>

      </form>
    );
  }
}

export default FormFilterToDo;
