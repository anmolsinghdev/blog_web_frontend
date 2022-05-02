import React, { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { MainWrapper, Form, Main, GlobalStyle, theme, Toaster } from './style/style'
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


const Login = () => {

    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);
    const [isAuthenticated, setisAuthenticated] = useState(false); // eslint-disable-line
    const [token, setToken] = useState(null);  // eslint-disable-line
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(false);
    const notifyError = (mes) => toast.error(mes);
    const notifySuccess = (mes) => toast.success(mes);
    const nav = useNavigate();

    const setTokenStorage = (token) => {
        setToken(token);
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('isAuthenticated', 'true');
        sessionStorage.setItem('user', username);
    };

    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (username === null || password === null) {
            if (username === null) return notifyError('Please Enter Username');
            if (password === null) return notifyError('Please Enter password');
        } else {
            const res = await axios.post('http://localhost:4000/login', { 'username': username, 'password': password, });
            if (res.data) {
                if (res.data.status === true && res.data.token !== null) {
                    setTokenStorage(res.data.token);
                    setisAuthenticated(res.data.status);
                    setStatus(true);
                    setTimeout(() => {
                        toast.dismiss();
                        nav('/Main');
                    }, 2000);
                    return notifySuccess('Successfully Logged In!!');
                }
                if (res.data.status === false) return notifyError('Please Enter Correct credentials!!')
            }
        }
    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    }, [status]);

    return (
        <>
            {(loading === false) ? <MainWrapper>
                <Box >
                    <CircularProgress size={'5rem'} />
                </Box>
            </MainWrapper> : <>
                <GlobalStyle />
                <MainWrapper>
                    <Toaster />
                    <Main>
                        <h1>Login Form</h1>
                        <Form onSubmit={onFormSubmit}>
                            <ThemeProvider theme={theme}>
                                <TextField sx={{ input: { color: '#fff' } }} label="Please enter username & email" variant="standard" color='secondary' onChange={(e) => setUsername(e.target.value)} autoComplete="off" />
                                <TextField sx={{ input: { color: '#fff' } }} type='password' label="password" variant="standard" color='secondary' onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                                <Button sx={{ marginTop: '1rem' }} variant="contained" size="medium" endIcon={<SendIcon />} type='submit'>Submit</Button>
                            </ThemeProvider>
                        </Form>
                    </Main>
                </MainWrapper>
            </>
            }
        </>
    )
}

export default Login;