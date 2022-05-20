import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Header, GlobalStyle, Li, Toaster, H3, Li2 } from './style/style.js'
import LoginPage from './Login';
import Main from './Main';
import Home from './Home';
import Signup from './Signup';
import { toast } from 'react-toastify';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
const Nav = () => {
    const nav = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

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
        toast.dismiss();
        nav('/')
    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };


    return (
        <>
            <GlobalStyle />
            <Toaster />
            <AppBar position="static">
                <Container maxWidth="100vh">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href='/'
                            sx={{
                                mr: 1,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'roboto',
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BlogWeb
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
                                <MenuIcon sx={{ backgroundColor: 'grey' }} />
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
                                    display: { xs: 'block', md: 'none', },
                                }}
                            >
                                <Header>
                                    <ul>
                                        {(sessionStorage.getItem('isAuthenticated') === 'true') ? <>
                                            <Li2> <Link to='/' onClick={HomeHandle}>Home</Link></Li2>
                                            <Li2><Link to={'/main'} onClick={MainClick} >Main</Link></Li2>
                                        </>
                                            : <>
                                                <Li2> <Link to='/' onClick={HomeHandle}>Home</Link></Li2>
                                                <Li2><Link to='/signup' onClick={SignupHandle}>Signup</Link></Li2>
                                                <Li2><Link to='/login' onClick={LoggedIn}>Login</Link></Li2>
                                            </>
                                        }
                                    </ul>
                                </Header>
                            </Menu>
                        </Box>

                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 1,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'roboto',
                                letterSpacing: '.2rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            BlogWeb
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent: 'space-between' } }}>
                            <Header>
                                <ul>
                                    {(sessionStorage.getItem('isAuthenticated') === 'true') ? <>

                                    </>
                                        : <>
                                            <Li><Link to='/signup' onClick={SignupHandle}>Signup</Link></Li>
                                            <Li><Link to='/login' onClick={LoggedIn}>Login</Link></Li>
                                        </>
                                    }
                                </ul>
                            </Header>
                        </Box>
                        {(sessionStorage.getItem('isAuthenticated') === 'true') && (
                            <Box sx={{ flexGrow: 0 }}>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt={sessionStorage.getItem('user')} src="/static/images/avatar/2.jpg" />
                                    </IconButton>
                                </Tooltip>
                                {/* <Menu
                                    sx={{ mt: '2.5rem' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'center',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    <MenuItem onClick={handleCloseUserMenu}>
                                        <ul>
                                            {(sessionStorage.getItem('isAuthenticated') === 'true') && (
                                                <>
                                                    <Li2><Link to={'/'} onClick={(e) => logoutHandle(e)} id='logout'>Logout</Link></Li2>
                                                    <Li2><Link to={'/main'} onClick={MainClick} >Main</Link></Li2>
                                                </>
                                            )
                                            }
                                        </ul>
                                    </MenuItem>
                                </Menu> */}
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={open}
                                    onClose={handleClose}
                                    onClick={handleClose}
                                    PaperProps={{
                                        elevation: 0,
                                        sx: {
                                            overflow: 'visible',
                                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                            mt: 1.5,
                                            '& .MuiAvatar-root': {
                                                width: 32,
                                                height: 32,
                                                ml: -0.5,
                                                mr: 1,
                                            },
                                            '&:before': {
                                                content: '""',
                                                display: 'block',
                                                position: 'absolute',
                                                top: 0,
                                                right: 14,
                                                width: 10,
                                                height: 10,
                                                bgcolor: 'background.paper',
                                                transform: 'translateY(-50%) rotate(45deg)',
                                                zIndex: 0,
                                            },
                                        },
                                    }}
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                    <MenuItem>
                                        <Avatar /> Profile
                                    </MenuItem>
                                    <MenuItem>
                                        <Avatar /> My account
                                    </MenuItem>
                                    <Divider />
                                    <MenuItem>
                                        <ListItemIcon>
                                            <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        Add another account
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Settings fontSize="small" />
                                        </ListItemIcon>
                                        Settings
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                            </Box>
                        )
                        }
                    </Toolbar>
                </Container>
            </AppBar >
        </>
    );
};
export default Nav;
