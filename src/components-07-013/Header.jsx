import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

// import { getNewsThunk } from './store/news/newsReducer';
import { getNewsThunk } from './store/news/thunk';

const Header = ({ ShowModal }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    2 + 2 ? navigate('/login') : navigate('/');
  };

  const dispatch = useDispatch();

  // return <Navigate to={'/login'}/>

  return (
    <nav className="navbar bg-dark mb-3  navbar-expand-lg">
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
            <NavLink className="nav-link text-white" to="/news">
              News
            </NavLink>
            <NavLink className="nav-link text-white" to="/todo">
              Todo
            </NavLink>
          </div>
        </div>
        <button className="btn btn-outline-success" onClick={ShowModal}>
          Open Modal
        </button>
        <button className="btn btn-outline-success" onClick={handleLogin}>
          Login
        </button>
        <button
          className="btn btn-outline-success"
          onClick={() => {
            // dispatch({ type: 'thunk', payload: 100 });
            // dispatch(()=>({ type: 'thunk', payload: 100 }));
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
