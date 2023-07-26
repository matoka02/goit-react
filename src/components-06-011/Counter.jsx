import React from 'react';
// import { Component } from 'react';
// import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { decrement, increment } from './store/counter/action';

const Counter = () => {
  // const [total, setTotal] = useState(0);
  // const handleClickPlus = () => setTotal((prevState) => prevState + 1);
  // const handleClickMinus = () => setTotal((prevState) => prevState - 1);

  // рефакторинг
  // const state = useSelector((state)=>state);
  // console.log(state);
  const { total } = useSelector(state => state.counter);
  const { step } = useSelector(state => state.counter);
  console.log(step);
  const dispatch = useDispatch();

  // const handleClickPlus = () => dispatch({ type: 'increment', payload: 1 });
  // const handleClickMinus = () => dispatch({ type: 'decrement', payload: 1 });

  // const handleClickPlus = () => dispatch({ type: 'increment', payload: step });
  // const handleClickMinus = () => dispatch({ type: 'decrement', payload: step });

  const handleClickPlus = () => dispatch(increment(step));
  const handleClickMinus = () => dispatch(decrement(step));

  return (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="card bg-dark text-white " style={{ width: '600px' }}>
        <div className="card-body">
          <h5 className="card-title text-center fs-1">Counter</h5>
          <p className="card-text  text-center" style={{ fontSize: '80px' }}>
            {total}
          </p>
          <div className="d-flex justify-content-center px-5">
            <button
              className="btn btn-outline-success me-5"
              onClick={handleClickPlus}
            >
              <i className="bi bi-plus-circle fs-1"></i>
            </button>
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
  );
};

export default Counter;
