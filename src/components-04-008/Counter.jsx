import React from 'react';
// import { Component } from 'react';
import { PureComponent } from 'react';
import { useState } from 'react';
import { useReducer } from 'react';


class Button extends PureComponent {

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

// // 1.1 одинаковое дейтвие
// function reducer(prevState, nextState){
//   return prevState + nextState;
// };

// // 1.2 изменение только 1 параметра
// function reducer(prevState, action){
//   if (action.type === 'increment') {
//     return prevState + action.payload;
//   } else {
//     return prevState - action.payload
//   };
// };

// // 1.3 изменение нескольких параметров
function reducer(prevState, action){
  if (action.type ==='createUser') {
    return {
      ...prevState, user: action.payload
    } 
  } else if (action.type === 'createCountry') {
    return {
      ...prevState, country: action.payload
    } 
  }
};

const Counter = () => {
  // // 1.0 начальный код
  const [total, setTotal] = useState(0);

  // // 1.2 изменение только 1 параметра
  // const [total, setTotal] = useReducer(reducer, 0);
  
  // // 1.3 изменение нескольких параметров
  // const [total, dispatch] = useReducer(reducer, {
  //   user: null,
  //   country: '',
  //   items: []
  // });

  // dispatch({type: 'createUser', payload: {name: 'Alex'}});
  // dispatch({type: 'createCountry', payload: {name: 'Ukraine'}});

  // 1.0 начальный код
  const handleClickPlus = () => setTotal((prevState) => prevState + 1);
  const handleClickMinus = () => setTotal((prevState) => prevState - 1);

  // // 1.1 одинаковое дейтвие
  // const handleClickPlus = () => setTotal(1);
  // const handleClickMinus = () => setTotal(1);

  // // 1.2 изменение только 1 параметра
  // const handleClickPlus = () => setTotal({type: 'increment', payload: 1});
  // const handleClickMinus = () => setTotal({type: 'decrement', payload: 1});

  return (
      <div className="position-absolute top-50 start-50 translate-middle">
        <div className="card bg-dark text-white " style={{ width: '600px' }}>
          <div className="card-body">
            <h5 className="card-title text-center fs-1">Counter</h5>
            <p className="card-text  text-center" style={{ fontSize: '80px' }}>
              {total}
            </p>
            <div className="d-flex justify-content-center px-5">
              <Button
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
};

export default Counter;
