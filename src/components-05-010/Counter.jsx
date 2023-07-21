import React from 'react';
// import { Component } from 'react';
import { PureComponent } from 'react';
import { useState } from 'react';

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

const Counter = () => {

  const [total, setTotal] = useState(0);

  const handleClickPlus = () => setTotal((prevState) => prevState + 1);
  const handleClickMinus = () => setTotal((prevState) => prevState - 1);

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
