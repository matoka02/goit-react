import React from 'react';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';

// import { login } from 'servises/auth-service';
import { getProfileThunk, loginThunk } from 'components-08-016/store/auth/thunk';
import { toast } from 'react-hot-toast';

const LoginPage = () => {
  // const isAuth = useSelector(state => state.auth.access_token);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // useEffect(() => {
  //   isAuth && navigate('/');
  // }, [isAuth, navigate]);

  // const handleSubmit = evt => {
  //   evt.preventDefault();
  //   dispatch(loginThunk({
  //     email: evt.target.elements.email.value,
  //     password: evt.target.elements.password.value,
  //   })).unwrap().then(()=>navigate('/')).catch()
  // };

  // рефакторинг
  const handleSubmit = evt => {
    evt.preventDefault();
    dispatch(
      loginThunk({
        email: evt.target.elements.email.value,
        password: evt.target.elements.password.value,
      })
    )
      .unwrap()
      // .then(() => navigate('/'))
      .then(() => {
        dispatch(getProfileThunk());
        navigate('/')
      } )
      .catch(()=>toast.error('Some error...'));
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

        <div>
          <Link to='/signUp'>Sign Up</Link>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
