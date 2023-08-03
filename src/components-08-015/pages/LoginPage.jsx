import React from 'react';
import { useDispatch } from 'react-redux';
// import { login } from 'servises/auth-service';
import { loginThunk } from 'components-08-015/store/auth/thunk';

const LoginPage = () => {
  const dispatch = useDispatch();
  const handleSubmit = evt => {
    evt.preventDefault();
    // // рефакторинг с переносом в thunk
    // login({
    //   email: evt.target.elements.email.value,
    //   password: evt.target.elements.password.value,
    // }).then(() => {
    //   console.log(login);
    // });
    dispatch(loginThunk({
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value,      
    }))
  };

  return (
    <div
      className="card position-absolute top-50 start-50 translate-middle p-2"
      style={{ minWidth: '350px' }}
    >
      <h1 className="text-center">Login</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
