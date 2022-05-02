import React from 'react'
import LoginPage from './Login';
import Main from './Main';
import Home from './Home';
import Signup from './Signup';
import { Header, GlobalStyle, Li, Toaster } from './style/style.js'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';




const Navbar = () => {
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
        <>
            <GlobalStyle />
            <Toaster />
            <Header>
                <ul>
                    {(sessionStorage.getItem('isAuthenticated') === 'true') ? <>
                        <Li> <Link to='/' onClick={HomeHandle}>Home</Link></Li>
                        <Li><Link to='/Main' onClick={MainClick}>Main</Link></Li>
                        <Li><Link to={'/'} onClick={(e) => logoutHandle(e)} id='logout'>Logout</Link></Li>
                    </>
                        : <>
                            <Li> <Link to='/' onClick={HomeHandle}>Home</Link></Li>
                            <Li><Link to='/Signup' onClick={SignupHandle}>Signup</Link></Li>
                            <Li><Link to='/Login' onClick={LoggedIn}>Login</Link></Li>
                        </>
                    }
                </ul>
            </Header>
        </>
    )
};


export default Navbar;