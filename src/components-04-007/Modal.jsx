import React from 'react';
import { useEffect } from 'react';
// import { Component } from "react"

// import { useEffect } from 'react'

// const Modal = (props) => {
const Modal = ({ CloseModal, children }) => {
  const handlePressEscape = evt => {
    if (evt.code === 'Escape') {
      // props.CloseModal()
      CloseModal();
    }
  };

  // хук useEffect
  useEffect(() => {
    // console.log('componentDidMount>>' );
    window.addEventListener('keydown', handlePressEscape);
    return () => {
      // console.log('componentWillUnmount>>') ;
      window.removeEventListener('keydown', handlePressEscape)
    };
  }, []);

  return (
    <div
      className="modal fade show"
      style={{ display: 'block', backdropFilter: 'blur(5px)' }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title"> Modal</h5>
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={CloseModal}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
};

// class Modal extends Component  {
//   state={ };

//   componentDidMount(){
//     window.addEventListener('keydown', this.handlePressEscape)
//   };

//   componentWillUnmount(){
//     window.removeEventListener('keydown', this.handlePressEscape)
//   };

//   handlePressEscape = (evt) => {
//     // console.log(evt);       //KeyboardEvent {isTrusted: true, key: 'Escape', code: 'Escape', location: 0, ctrlKey: false, …}
//     // console.log(Date.now());
//     if (evt.code==='Escape') {
//       this.props.CloseModal()
//     }
//   };

//   render(){
//     const {CloseModal, children} = this.props;
//     return (
//       <div
//         className='modal fade show'
//         style={{ display: 'block', backdropFilter: 'blur(5px)' }}
//       >
//         <div className='modal-dialog'>
//           <div className='modal-content'>
//             <div className='modal-header'>
//               <h5 className='modal-title'> Modal</h5>
//               <button
//                 type='button'
//                 className='btn-close'
//                 aria-label='Close'
//                 onClick={CloseModal}
//               ></button>
//             </div>
//             <div className='modal-body'>{children}</div>
//           </div>
//         </div>
//       </div>
//     )
//   };
// };

export default Modal;
