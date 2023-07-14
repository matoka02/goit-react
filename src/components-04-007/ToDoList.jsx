import React from 'react';
// import { Component} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

// import todo from 'assets/data-03-005.json';
import { nanoid } from 'nanoid';

import ToDo from './ToDo';
import FormToDo from './FormToDo';
import { toast } from 'react-hot-toast';

const ToDoList = () => {
  const [todoList, setTodoList] = useState('');
  // // рефакторинг с toast
  // const [isDelete, setIsDelete] = useState(false);
  // const [isCreate, setIsCreate] = useState(false);

  useEffect(()=>{
    const localTodo = localStorage.getItem('todo')
    if (localTodo){
      setTodoList(JSON.parse(localTodo)
    )};
  }, []);

  useEffect(()=>{
    // прописано условие, чтобы не грузилось сразу при первом рендере
    todoList && localStorage.setItem('todo', JSON.stringify(todoList));
  }, [todoList]);

  const handleCheckCompleted = (id) => {
    setTodoList((prevTodoList)=>{
      return prevTodoList.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    });
  };

  const handleDelete = (id) => {
    setTodoList((prevTodoList)=>{
      return prevTodoList.filter(todo => todo.id !== id)
    });
    // // рефакторинг с toast
    // setIsDelete(true);    
    // setTimeout(() => {
    //   setIsDelete(true);
    // }, 1500);

    toast.error('Delete successfully');
  };

  const addToDo = (value) => {
    setTodoList((prevTodoList)=>{
      return [
        ...prevTodoList,
        { id: nanoid(), title: value, completed: false },
      ]
    });
    // // рефакторинг с toast
    // setIsCreate(true);    
    // setTimeout(() => {
    //   setIsCreate(true);
    // }, 1500);

    toast.success('Create successfully');
  };

  return (
    <>
      <h1>My To-Do list</h1>
      <FormToDo addToDo={addToDo}></FormToDo>
      {todoList && (
        <ul className="list-group list-group-flush">
          {todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              handleCheckCompleted={handleCheckCompleted}
              handleDelete={handleDelete}
            />
          ))}
        </ul>
      )}
    </>
  );
};

// class ToDoList extends Component {
//   state = {
//     todoList: '',
//     isDelete: false,
//     isCreate: false,
//   };

//   componentDidMount() {
//     if (localStorage.getItem('todo')){
//     this.setState({
//       todoList: JSON.parse(localStorage.getItem('todo')),
//     })};
//   };

//   componentDidUpdate(_, prevState) {

//     if (prevState.todoList.length > this.state.todoList.length) {
//       console.log('Dell');
//       localStorage.setItem('todo', JSON.stringify(this.state.todoList));
//             this.setState({ isDelete: true });
//       setTimeout(() => {
//         this.setState({ isDelete: false });
//       }, 1500);
//     }
//     if (prevState.todoList.length < this.state.todoList.length) {
//       console.log('Create');
//       localStorage.setItem('todo', JSON.stringify(this.state.todoList));
//       this.setState({ isCreate: true });
//       setTimeout(() => {
//         this.setState({ isCreate: false });
//       }, 1500);
//     }
//   }

//   handleCheckCompleted = id => {
//     this.setState(prevState => ({
//       todoList: prevState.todoList.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   handleDelete = id => {
//     this.setState(prevState => ({
//       todoList: prevState.todoList.filter(todo => todo.id !== id),
//     }));
//   };

//   addToDo = value => {
//     this.setState(prevState => {
//       console.log(value);
//       console.log(prevState);
//       return {
//         todoList: [
//           ...prevState.todoList,
//           { id: nanoid(), title: value, completed: false },
//         ],
//       };
//     });
//   };

//   render() {
//     return (
//         <>
//           <h1>My To-Do list</h1>
//           {this.state.isDelete && (
//             <div class="alert alert-danger" role="alert">
//               To-do deleted successfully!
//             </div>
//           )}
//           {this.state.isCreate && (
//             <div class="alert alert-success" role="alert">
//               Create to-do successfully!
//             </div>
//           )}
//           <FormToDo addToDo={this.addToDo}></FormToDo>
//           {this.state.todoList && (
//             <ul className="list-group list-group-flush">
//             {this.state.todoList.map(todo => (
//               <ToDo
//                 key={todo.id}
//                 todo={todo}
//                 handleCheckCompleted={this.handleCheckCompleted}
//                 handleDelete={this.handleDelete}
//               />
//             ))}
//           </ul>)}
//         </>
//       )
//   };
// };

export default ToDoList;
