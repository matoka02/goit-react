import React from 'react';
// import { Component } from 'react';
import { PureComponent } from 'react';
import { useState } from 'react';


class Button extends PureComponent {
  // shouldComponentUpdate(nextProps, prevState) {
  //   if (
  //     nextProps.handleClickPlus === this.props.handleClickPlus &&
  //     nextProps.obj === this.props.obj
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }

  render() {
    console.log('render Btn :>> ');
    return (
      <button
        className="btn btn-outline-success me-5"
        onClick={this.props.handleClickPlus}
      >
        <i className="bi bi-plus-circle fs-1"></i>
      </button>
    );
  }
};

const Counter = () => {
  const [total, setTotal] = useState(0);
  
  
  const handleClickPlus = () => {
    setTotal((prevState) => prevState + 1)
    // this.setState(prevState => ({ total: prevState.total + 1 }));
  };
  const handleClickMinus = () => {
    setTotal((prevState) => prevState - 1)
    // this.setState(prevState => ({ total: prevState.total - 1 }));
  };


  return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white " style={{ width: '600px' }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text  text-center" style={{ fontSize: '80px' }}>
              {total}
            </p>
            <div className="d-flex justify-content-center px-5">
              {/* <button
								className='btn btn-outline-success me-5'
								onClick={this.handleClickPlus}
							>
								<i className='bi bi-plus-circle fs-1'></i>
							</button> */}
              <Button
                // obj={{ name: 'asd' }}
                handleClickPlus={handleClickPlus}
              />
              <button
                className="btn  btn-outline-danger ms-5"
                onClick={handleClickMinus}
              >
                <i className="bi bi-dash-circle fs-1"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
  )
}






// class Button extends PureComponent {
//   shouldComponentUpdate(nextProps, prevState) {
//     if (
//       nextProps.handleClickPlus === this.props.handleClickPlus &&
//       nextProps.obj === this.props.obj
//     ) {
//       return false;
//     }
//     return true;
//   }

//   render() {
//     console.log('render Btn :>> ');
//     return (
//       <button
//         className="btn btn-outline-success me-5"
//         onClick={this.props.handleClickPlus}
//       >
//         <i className="bi bi-plus-circle fs-1"></i>
//       </button>
//     );
//   }
// }

// class Counter extends Component {
//   state = {
//     total: 0,
//   };

//   handleClickPlus = () => {
//     this.setState(prevState => ({ total: prevState.total + 1 }));
//   };
//   handleClickMinus = () => {
//     this.setState(prevState => ({ total: prevState.total - 1 }));
//   };
//   handleClickBtn = () => {
//     const { name, count } = this.props;
//     console.log('name :>> ', name);
//     const age = count ?? 10;
//     console.log('age :>> ', age);
//   };
//   render() {
//     console.log('render');
//     return (
//       <div className="position-absolute top-50 start-50 translate-middle">
//         <div className="card bg-dark text-white " style={{ width: '600px' }}>
//           <div className="card-body">
//             <h5 className="card-title text-center fs-1">Counter</h5>
//             <p className="card-text  text-center" style={{ fontSize: '80px' }}>
//               {this.state.total}
//             </p>
//             <div className="d-flex justify-content-center px-5">
//               {/* <button
// 								className='btn btn-outline-success me-5'
// 								onClick={this.handleClickPlus}
// 							>
// 								<i className='bi bi-plus-circle fs-1'></i>
// 							</button> */}
//               <Button
//                 // obj={{ name: 'asd' }}
//                 handleClickPlus={this.handleClickPlus}
//               />
//               <button
//                 className="btn  btn-outline-danger ms-5"
//                 onClick={this.handleClickMinus}
//               >
//                 <i className="bi bi-dash-circle fs-1"></i>
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// };

export default Counter;
