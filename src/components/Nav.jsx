import React from "react";
import { AppBar, Toolbar, CssBaseline, Typography, useTheme, useMediaQuery } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DrawerComponent from "./Drawer";
import { NavHeader, Toaster } from './style/style.js'
import LoginPage from './Login';
import Main from './Main';
import Home from './Home';
import Signup from './Signup';
import { toast } from 'react-toastify';

const Nav = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const nav = useNavigate();

  const LoggedIn = () => {
    return <LoginPage />
  }
  const MainClick = () => {
    return <Main />
  }
  const HomeHandle = () => {
    return <Home />
  }
  const SignupHandle = () => {
    return <Signup />
  }

  function logoutHandle(e) {
    e.preventDefault();
    if (sessionStorage.length !== 0) {
      sessionStorage.removeItem('token');
      sessionStorage.removeItem('isAuthenticated');
      sessionStorage.removeItem('user');
      toast.success('Successfully Logged Out')
    }
    setTimeout(() => {
      toast.dismiss();
      nav('/')
    }, 2000);
  }

  return (
    <AppBar position="static">
      <Toaster />
      <CssBaseline />
      <Toolbar>
        <NavHeader >
          <Typography variant="h4" >
            BlogWeb
          </Typography>
          {isMobile ? (
            <DrawerComponent />
          ) :
            (
              (sessionStorage.getItem('isAuthenticated') === 'true') ? <>
                <div className="navlist">
                  <Link to="/" onClick={HomeHandle} >
                    Home
                  </Link>
                  <Link to="/signup" onClick={MainClick} >
                    Main
                  </Link>
                  <Link to="/" onClick={(e) => logoutHandle(e)} >
                    Logout
                  </Link>
                </div>
              </>
                : <div className="navlist">
                  <Link to="/" onClick={HomeHandle} >
                    Home
                  </Link>
                  <Link to="/signup" onClick={SignupHandle} >
                    Signup
                  </Link>
                  <Link to="/login" onClick={LoggedIn} >
                    Login
                  </Link>
                </div>
            )
          }
        </NavHeader>
      </Toolbar>
    </AppBar >
  );
}

export default Nav;
