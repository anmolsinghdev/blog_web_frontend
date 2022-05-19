import React, { useState, useEffect } from 'react'
import LoginPage from './Login';
import Main from './Main';
import Home from './Home';
import Signup from './Signup';
import { Header, GlobalStyle, Li, Toaster } from './style/style.js'
import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { grey } from '@mui/material/colors';
const Navbar = () => {
    const nav = useNavigate();
    const [user, setUser] = useState(null);
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


    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        return {
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }



    return (
        <>
            <GlobalStyle />
            <Toaster />
            <Header>
                <ul>
                    {(sessionStorage.getItem('isAuthenticated') === 'true') ? <>
                        <Li> <Link to='/' onClick={HomeHandle}>Home</Link></Li>
                        <Li><Link to='/main' onClick={MainClick}>Main</Link></Li>
                        <Li><Link to={'/'} onClick={(e) => logoutHandle(e)} id='logout'>Logout</Link></Li>
                        <Li><Stack direction="row" spacing={2}>
                            <Avatar
                                sx={{ bgcolor: grey[500], width: 35, height: 35 }}
                                alt={sessionStorage.getItem('user')}
                                src="/broken-image.jpg"
                            />
                        </Stack></Li>
                    </>
                        : <>
                            <Li> <Link to='/' onClick={HomeHandle}>Home</Link></Li>
                            <Li><Link to='/signup' onClick={SignupHandle}>Signup</Link></Li>
                            <Li><Link to='/login' onClick={LoggedIn}>Login</Link></Li>
                        </>
                    }
                </ul>
            </Header>
        </>
    )
};


export default Navbar;