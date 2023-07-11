// 03. Lifecycle. HTTP Requests
// Part 02

import Header from "components-03-006/Header";
// import ToDoList from "components-03-006/ToDoList";
// import Modal from "components-03-006/Modal";
import { Component } from "react";
// import FormLogin from "components-03-006/FormLogin";
import { nanoid } from "nanoid";
import Search from "./Search";
import ContentInfo from "./ContentInfo";
// import Counter from "./Counter";

export class App extends Component {
  state={
    isShowModal: false,
    searchText: '',
  };

  componentDidUpdate(prevProps, prevState){
    if (prevState !== this.props) {
      fetch()
    }
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
      id: nanoid(),
    }
    console.log(newUser);
  };

  handleSearch=(searchText) => {
    this.state.searchText({searchText})
  };

  render(){
    return (
      <div className="container">
        <Header ShowModal={this.ShowModal}/>
        <Search />
        <ContentInfo searchText={this.state.searchText} />
        {/* <ToDoList /> */}
        {/* {this.state.isShowModal && <Modal CloseModal={this.CloseModal}>
          <FormLogin createUser={this.createUser}  CloseModal={this.CloseModal}/>
          </Modal>} */}
        {/* <Counter></Counter> */}
      </div>
    );
  };
};

export default App;