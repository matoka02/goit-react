// 04. React Hooks. Routing
// Part 01

import Header from "./Header";
// import ToDoList from "./ToDoList";
// import Modal from "./Modal";
import { Component } from "react";
// import FormLogin from "./FormLogin";
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
      // fetch()
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
    this.setState({searchText})
  };

  render(){
    return (
      <div className="container">
        <Header ShowModal={this.ShowModal}/>
        <Search handleSearch={this.handleSearch}/>
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