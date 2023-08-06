import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

import { getNewsThunk } from './store/news/thunk';
import { dellToken } from 'servises/auth-service';
import { logOut } from './store/auth/authSlice';
// import { getProfileThunk } from './store/auth/thunk';

const Header = ({ showModal }) => {
  const { profile, access_token } = useSelector(state => state.auth);
  console.log(access_token);
  console.log(profile);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    // бекенд не дает разлогиниться, поэтому логика упрощена
    dispatch(logOut());
    dellToken();
  };

  // useEffect(() => {
  //   console.log('object');
  //   // console.log(profile.name);
  //   access_token && dispatch(getProfileThunk());
  // }, [access_token, dispatch]);

  return (
    <nav className="navbar bg-dark mb-3 navbar-expand-lg">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link text-white "
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
            { (              
              <>
                <NavLink className="nav-link text-white" to="/news">
                  News
                </NavLink>
                <NavLink className="nav-link text-white" to="/todo">
                  Todo
                </NavLink>
                <NavLink className="nav-link text-white" to="/products">
                  Products
                </NavLink>
              </>
            )}
          </div>
        </div>
        <button className="btn btn-outline-success" onClick={showModal}>
          Open Modal
        </button>

        {profile && <div className="text-white">{profile.name}</div>}
        <button
          className="btn btn-outline-success"
          onClick={profile ? handleLogOut : handleLogin}
        >
          {profile ? 'LogOut' : 'LogIn'}
        </button>

        <button
          className="btn btn-outline-success"
          onClick={() => {
            dispatch(getNewsThunk());
          }}
        >
          thunk
        </button>
      </div>
    </nav>
  );
};

export default Header;
