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

    );
  }
}

export default FormLogin;
