// 03. Lifecycle. HTTP Requests
// Part 01

import Header from "components-02-004/Header";
import ToDoList from "components-02-004/ToDoList";
import Modal from "components-02-004/Modal";
import { Component } from "react";
import FormLogin from "components-02-004/FormLogin";
import { nanoid } from "nanoid";

export class App extends Component {
  state={
    isShowModal: false
  };

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
      // id: useId(),   // хук,  не работает
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
        
      </div>
    );
  };
};

export default App;