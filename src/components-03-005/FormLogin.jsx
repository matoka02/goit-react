import React from 'react';
import { Component } from 'react';

class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    isChecked: false,
    gender: 'male',
  };

  // // возникает 1 раз, при загрузке элемента на страницу (открытие модального окна)
  // // при закрытии модального окна исчезнет
  // componentDidMount(){
  //   console.log('Mount');
  // };  

  // // возникает каждый раз при заполнении полей
  // componentDidUpdate(prevProps, prevState){
  //   console.log('Update');
  // };

  //   // возникает 1 раз, при удалении элемента со страницы (закрытие модального окна)
  // componentWillUnmount(prevProps, prevState){
  //   console.log('Unmount');
  // };

  handleChange = ({ target }) => {
    this.setState({
      // [имя ключа]: значение, откуда забирать
      [target.name]: target.value,
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.createUser({
      email: this.state.email,
      password: this.state.password,
      gender: this.state.gender,
    });
    this.setState({
      email: '',
      password: '',
    });
    this.props.CloseModal();
  };

  handleCheck = ({ target: { checked } }) => {
    console.log(checked);
    this.setState({
      isChecked: checked,
    });
  };

  handleRadio = ({ target }) => {
    console.log(target.value);
    this.setState({ gender: target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="mb-3">
          <label 
              htmlFor="exampleInputEmail1" 
              className="form-label">Email address</label>
          <input 
              name="email" 
              type="email" 
              className="form-control" 
              id="exampleInputEmail1" 
              aria-describedby="emailHelp" 
              // onChange={(evt) => console.log(evt.target.value)} 
              // value='123'
              onChange={this.handleChange} 
              value={this.state.email}
          />
          <div 
              id="emailHelp" 
              className="form-text">
                  We'll never share your email with anyone else.
          </div>
      </div>
      <div className="mb-3">
          <label 
              htmlFor="exampleInputPassword1" 
              className="form-label">
                  Password</label>
          <input 
              name="password" 
              type="password" 
              className="form-control" 
              id="exampleInputPassword1" 
              onChange={this.handleChange} 
              value={this.state.password}/>
      </div>
      <div className="mb-3 form-check">
          <input 
              type="checkbox" 
              className="form-check-input" 
              id="exampleCheck1" 
              checked={this.state.isChecked} 
              onChange={this.handleCheck}
              />
          <label 
              className="form-check-label" 
              htmlFor="exampleCheck1" 
              >I agree</label>
      </div>

      <div class="form-check">
          <input 
          class="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          id="flexRadioDefault1"             
          checked = {this.state.gender==='male'} 
          onChange={this.handleRadio} 
          value='male'
          />
          <label 
          class="form-check-label" 
          for="flexRadioDefault1">Male</label>
      </div>
      <div class="form-check">
          <input 
          class="form-check-input" 
          type="radio" 
          name="flexRadioDefault" 
          id="flexRadioDefault2" 
          checked = {this.state.gender==='female'} 
          onChange={this.handleRadio} 
          value='female'
          />
          <label 
          class="form-check-label" 
          for="flexRadioDefault2">Female</label>
      </div>

      <button 
          disabled={!this.state.isChecked} 
          type="submit" 
          className="btn btn-primary">Submit</button>
      </form>
    );
  }
}

export default FormLogin;