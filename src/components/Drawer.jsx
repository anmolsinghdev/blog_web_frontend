import React, { useState } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, Divider, Toolbar, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import LoginPage from './Login';
import Main from './Main';
import Home from './Home';
import Signup from './Signup';
import { toast } from 'react-toastify';
import { LiTitle } from './style/style.js'


function DrawerComponent() {
    const nav = useNavigate();
    const [openDrawer, setOpenDrawer] = useState(false);
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
            <Drawer
                anchor="top"
                sx={{ width: 250, color: "#fff" }}
                open={openDrawer}
                onClose={() => { setOpenDrawer(false) }}
            >
                <Toolbar sx={{ backgroundColor: "primary.main" }}>
                    <Typography variant="h4" sx={{ color: "#fff" }} >
                        BlogWeb
                    </Typography>
                </Toolbar>
                <Box sx={{ backgroundColor: "primary.main" }} >
                    {(sessionStorage.getItem('isAuthenticated') === 'true') ? <>
                        <List height="100%">
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <LiTitle>
                                    <Link to="/" onClick={HomeHandle} >
                                        Home
                                    </Link>
                                </LiTitle>
                            </ListItem>
                            <Divider />
                            <ListItem onClick={() => setOpenDrawer(false)} >
                                <LiTitle>
                                    <Link to="/main" onClick={MainClick} >
                                        Main
                                    </Link>
                                </LiTitle>
                            </ListItem>
                            <Divider />
                            <ListItem onClick={() => setOpenDrawer(false)}>
                                <LiTitle>
                                    <Link to="/" onClick={(e) => logoutHandle(e)} >
                                        Logout
                                    </Link>
                                </LiTitle>
                            </ListItem>

                        </List>
                    </>
                        : <>
                            <List height="100vh">
                                <ListItem onClick={() => setOpenDrawer(false)}>
                                    <LiTitle>
                                        <Link to="/" onClick={HomeHandle} className="litag" >
                                            Home
                                        </Link>
                                    </LiTitle>
                                </ListItem>
                                <Divider />
                                <ListItem onClick={() => setOpenDrawer(false)}>
                                    <LiTitle>
                                        <Link to="/signup" onClick={SignupHandle} >
                                            Signup
                                        </Link>
                                    </LiTitle>

                                </ListItem>
                                <Divider />
                                <ListItem onClick={() => setOpenDrawer(false)}>
                                    <LiTitle>
                                        <Link to="/login" onClick={LoggedIn} >
                                            Login
                                        </Link>
                                    </LiTitle>
                                </ListItem>

                            </List>
                        </>
                    }
                </Box>
            </Drawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon sx={{ color: "#fff" }} />
            </IconButton>
        </>
    );
}

export default DrawerComponent;
