// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };


// // 01. Introduction to React. Stylization
// import { Card } from "components-01-002/Card";

// const App = () => {
//   return <Card isOnline/>
//   // return <Card/>
// };

// export default App;


// // 02. Events and States. Forms

import Header from "components-02-003/Header";
import Counter from "components-02-003/Counter";
// import ToDoList from "components-02-003/ToDoList";
import Modal from "components-02-003/Modal";
import { Component } from "react";

class App extends Component {
  state={
    isShowModal: true
  }
  render(){
    return (
      <div className="container">
        <Header />
        <Counter />
        {/* <ToDoList /> */}
        {this.state.isShowModal && <Modal>Some</Modal>}
      </div>
    );
  }
};

export default App;