// 04. React Hooks. Routing
// Part 02

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
  const [isShowModal, setIsShowModal] = useState(false);
  const [searchText, setSearchText] = useState('');

  const ShowModal = () => setIsShowModal(true);

  const CloseModal = () => setIsShowModal(false);

  function createUser(data) {
    console.log(data);
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser);
  }

  const handleSearch = searchText => {
    setSearchText(searchText);
  };

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

// export default App;
export { App };
