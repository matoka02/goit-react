// 03. Lifecycle. HTTP Requests
// Part 01

import Header from "components-03-006/Header";
import ToDoList from "components-03-006/ToDoList";
import Modal from "components-03-006/Modal";
import { Component } from "react";
import FormLogin from "components-03-006/FormLogin";
import { nanoid } from "nanoid";
// import Counter from "./Counter";

export class App extends Component {
  state={
    isShowModal: false
  };

  // componentDidMount(){
  //   console.log('Mount');
  // };

  ShowModal=()=>{
    this.setState({isShowModal: true})
  };

  CloseModal=()=>{
    this.setState({isShowModal: false})
  };
  
  createUser = (data) => {
    console.log(data);
    const newUser = {
      ...data,
      id: nanoid(),
    }
    console.log(newUser);
  };

  render(){
    return (
      <div className="container">
        <Header ShowModal={this.ShowModal}/>
        <ToDoList />
        {this.state.isShowModal && <Modal CloseModal={this.CloseModal}>
          <FormLogin createUser={this.createUser}  CloseModal={this.CloseModal}/>
          </Modal>}
        {/* <Counter></Counter> */}
      </div>
    );
  };
};

export default App;