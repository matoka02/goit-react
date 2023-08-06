import { nanoid } from 'nanoid';

import { Outlet } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';
import { Suspense, useState } from 'react';

import Header from './Header';
import Modal from './Modal';
import FormLogin from './FormLogin';


const Layout = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  // const [searchText, setSearchText] = useState('');

  const ShowModal = () => setIsShowModal(true);

  const CloseModal = () => setIsShowModal(false);

  function createUser(data) {
    // console.log(data);
    const newUser = {
      ...data,
      id: nanoid(),
    };
    console.log(newUser);
  };

  return (
    <div className="container">
      {/* <Toaster position="top-right" toastOptions={{ duration: 1500 }}></Toaster> */}
      <Header ShowModal={ShowModal} />

      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>

      {isShowModal && (
        <Modal CloseModal={CloseModal}>
          <FormLogin createUser={createUser} CloseModal={CloseModal} />
        </Modal>
      )}

      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
