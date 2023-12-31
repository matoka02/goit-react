// 02. Events and States. Forms
// Part 01
import Header from "components-02-003/Header";
import Counter from "components-02-003/Counter";
import ToDoList from "components-02-003/ToDoList";
import Modal from "components-02-003/Modal";
import { Component } from "react";

export class App extends Component {
  state={
    // переключатель для модального окна
    isShowModal: false
  };

  ShowModal=()=>{
    this.setState({isShowModal: true})
  };

  CloseModal=()=>{
    this.setState({isShowModal: false})
  };
  

  render(){
    return (
      <div className="container">
        <Header ShowModal={this.ShowModal}/>
        <Counter />
        <ToDoList />
        {this.state.isShowModal && <Modal CloseModal={this.CloseModal}>Some</Modal>}
      </div>
    );
  }
};

export default App;