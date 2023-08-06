import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';

import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

import { getNewsThunk } from './store/news/thunk';
import { dellToken } from 'servises/auth-service';
import { logOut } from './store/auth/authSlice';
// import { getProfileThunk } from './store/auth/thunk';

const pages = ['Home', 'News', 'Todo', 'Products'];

const Header = ({ showModal }) => {
  const { profile, access_token } = useSelector(state => state.auth);
  console.log(access_token);
  console.log(profile);

  const navigate = useNavigate();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = page => {
    setAnchorElNav(null);
    page === 'Home' ? navigate('/') : navigate(`${page.toLowerCase()}`);
  };

  const dispatch = useDispatch();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleLogOut = () => {
    // бекенд не дает разлогиниться, поэтому логика упрощена
    dispatch(logOut());
    dellToken();
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map(page => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map(page => (
              <Button
                role="link"
                key={page}
                // onClick={handleCloseNavMenu}
                onClick={() => handleCloseNavMenu(page)}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <Button
              role="link"
              sx={{
                my: 2,
                color: 'white',
                display: 'block',
              }}
              onClick={profile ? handleLogOut : handleLogin}
            >
              {profile ? 'LogOut' : 'LogIn'}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

// const Header = ({ showModal }) => {
//   const { profile, access_token } = useSelector(state => state.auth);
//   console.log(access_token);
//   console.log(profile);

//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const handleLogin = () => {
//     navigate('/login');
//   };

//   const handleLogOut = () => {
//     // бекенд не дает разлогиниться, поэтому логика упрощена
//     dispatch(logOut());
//     dellToken();
//   };

//   // useEffect(() => {
//   //   console.log('object');
//   //   // console.log(profile.name);
//   //   access_token && dispatch(getProfileThunk());
//   // }, [access_token, dispatch]);

//   return (
//     <nav className="navbar bg-dark mb-3 navbar-expand-lg">
//       <div className="container-fluid">
//         <span className="navbar-brand mb-0 h1 text-success">Navbar</span>
//         <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//           <div className="navbar-nav">
//             <NavLink
//               className="nav-link text-white "
//               aria-current="page"
//               to="/"
//             >
//               Home
//             </NavLink>
//             { (
//               <>
//                 <NavLink className="nav-link text-white" to="/news">
//                   News
//                 </NavLink>
//                 <NavLink className="nav-link text-white" to="/todo">
//                   Todo
//                 </NavLink>
//                 <NavLink className="nav-link text-white" to="/products">
//                   Products
//                 </NavLink>
//               </>
//             )}
//           </div>
//         </div>
//         <button className="btn btn-outline-success" onClick={showModal}>
//           Open Modal
//         </button>

//         {profile && <div className="text-white">{profile.name}</div>}
//         <button
//           className="btn btn-outline-success"
//           onClick={profile ? handleLogOut : handleLogin}
//         >
//           {profile ? 'LogOut' : 'LogIn'}
//         </button>

//         <button
//           className="btn btn-outline-success"
//           onClick={() => {
//             dispatch(getNewsThunk());
//           }}
//         >
//           thunk
//         </button>
//       </div>
//     </nav>
//   );
// };

export default Header;
