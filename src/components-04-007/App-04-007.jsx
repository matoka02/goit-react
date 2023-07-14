// 04. React Hooks. Routing
// Part 01

import Header from './Header';
import ToDoList from './ToDoList';
import Modal from './Modal';
// import { Component } from 'react';
import FormLogin from './FormLogin';
import { nanoid } from 'nanoid';
import Search from './Search';
import ContentInfo from './ContentInfo';
import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
// import { useId } from 'react';
// import Counter from "./Counter";

const App = () => {
  // const result = useState();
  // // для useState всегда 2 элемента в массиве: элемент и функция
  // console.log(result);      // Array(2)0: undefined1: ƒ ()length: 1name: "bound dispatchSetState"arguments: (...)caller: (...)[[Prototype]]: ƒ ()[[TargetFunction]]: ƒ dispatchSetState(fiber, queue, action)[[BoundThis]]: null[[BoundArgs]]: Array(2)length: 2[[Prototype]]: Array(0)

  // // деструктуризация
  // const [first, second] = useState(false);
  // console.log(first);       // false
  // console.log(second);      // ƒ dispatchSetState(fiber, queue, action) {{if (typeof arguments[3] === 'function') {error("State updates from the useState() and useReducer() Hooks don't support the " + 'sec…

  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');
  // const id = useId();
  // console.log(id);

  const ShowModal = () => setIsShowModal(true);

  const CloseModal = () => setIsShowModal(false);

  function createUser(data) {
    console.log(data);
    const newUser = {
      ...data,
      id: nanoid(),
      // id: `${id}+${data.name}`,
    };
    console.log(newUser);
  }

  const handleSearch = searchText => {
    setSearchText(searchText);
  };

  // return (
  //   <div>App</div>
  // );

  return (
    <div className="container">
      <Toaster position="top-right" toastOptions={{ duration: 1500 }}></Toaster>
      <Header ShowModal={ShowModal} />
      <Search handleSearch={handleSearch} />
      <ContentInfo searchText={searchText} />
      <ToDoList />
      {isShowModal && (
        <Modal CloseModal={CloseModal}>
          <FormLogin createUser={createUser} CloseModal={CloseModal} />
        </Modal>
      )}
      {/* <Counter></Counter> */}
    </div>
  );
};

// export class App extends Component {
//   state={
//     isShowModal: false,
//     searchText: '',
//   };

//   componentDidUpdate(prevProps, prevState){
//     if (prevState !== this.props) {
//       // fetch()
//     }
//   };

//   ShowModal=()=>{
//     this.setState({isShowModal: true})
//   };

//   CloseModal=()=>{
//     this.setState({isShowModal: false})
//   };

//   createUser = (data) => {
//     console.log(data);
//     const newUser = {
//       ...data,
//       id: nanoid(),
//     }
//     console.log(newUser);
//   };

//   handleSearch=(searchText) => {
//     this.setState({searchText})
//   };

//   render(){
//     return (
//       <div className="container">
//         <Header ShowModal={this.ShowModal}/>
//         <Search handleSearch={this.handleSearch}/>
//         <ContentInfo searchText={this.state.searchText} />
//         {/* <ToDoList /> */}
//         {/* {this.state.isShowModal && <Modal CloseModal={this.CloseModal}>
//           <FormLogin createUser={this.createUser}  CloseModal={this.CloseModal}/>
//           </Modal>} */}
//         {/* <Counter></Counter> */}
//       </div>
//     );
//   };
// };

// export default App;
export { App };
