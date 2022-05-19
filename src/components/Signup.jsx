import React, { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { MainWrapper, Form, Main, GlobalStyle, theme, Toaster } from './style/style.js'
import axios from 'axios';
import { ThemeProvider } from '@mui/material/styles';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const Signup = () => {

    const [username, setUsername] = useState(null);
    const [firstname, setFirstname] = useState(null);
    const [lastname, setLastname] = useState(null);
    const [password, setPassword] = useState(null);
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState(null);
    const [repeatPassword, setRepeatPassword] = useState(null);
    const notifyError = (mes) => toast.error(mes);
    const notifySuccess = (mes) => toast.success(mes);
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //eslint-disable-line
    var minNumberofChars = 6;
    var maxNumberofChars = 16;
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    const nav = useNavigate()

    let formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('email', email);


    const onFormSubmit = async (e) => {
        e.preventDefault();
        if (firstname === null || lastname === null || username === null || password === null || repeatPassword === null || email === null) {
            if (firstname === null) return notifyError('Please Enter Firstname');
            if (lastname === null) return notifyError('Please Enter Lastname');
            if (username === null) return notifyError('Please Enter Username');
            if (password === null) return notifyError('Please Enter password');
            if (email === null) return notifyError('Please Enter email');
            if (repeatPassword === null) return notifyError('Please Enter Repeat password');
        } else if (!filter.test(email)) {
            notifyError('Please Enter a valid Email');
        } else if (password !== repeatPassword) {
            return notifyError("Password Doesn't Match");
        } else if (password.length < minNumberofChars || password.length > maxNumberofChars) {
            notifyError("Password should more than 6 words");
            return false;
        } else if (!regularExpression.test(password)) {
            notifyError("Password should contain atleast one number and one special character ");
            return false;
        } else {
            console.log('else')
            const res = await axios.post('http://localhost:4000/create', { 'firstname': firstname, 'lastname': lastname, 'username': username, 'password': password, 'email': email });
            console.log(res)
            notifySuccess('Successfully created!!');
            setTimeout(() => {
                toast.dismiss()
                nav('/login')
            }, 2500);
        }

    }
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    }, []);

    return (
        <>
            {(loading === false) ? <MainWrapper>
                <Box >
                    <CircularProgress size={'5rem'} color='secondary' theme={theme} />
                </Box>
            </MainWrapper> : <>
                <GlobalStyle />
                <MainWrapper>
                    <Toaster />
                    <Main>
                        <h1>Signup Form</h1>
                        <Form onSubmit={onFormSubmit}>
                            <ThemeProvider theme={theme}>
                                <TextField sx={{ input: { color: '#fff' } }} label="firstname" variant="standard" color='secondary' onChange={(e) => setFirstname(e.target.value)} autoComplete="off" />
                                <TextField sx={{ input: { color: '#fff' } }} label="lastname" variant="standard" color='secondary' onChange={(e) => setLastname(e.target.value)} autoComplete="off" />
                                <TextField sx={{ input: { color: '#fff' } }} label="username" variant="standard" color='secondary' onChange={(e) => setUsername(e.target.value)} autoComplete="off" />
                                <TextField sx={{ input: { color: '#fff' } }} label="email" variant="standard" color='secondary' onChange={(e) => setEmail(e.target.value)} autoComplete="off" />
                                <TextField sx={{ input: { color: '#fff' } }} type='password' label="password" variant="standard" color='secondary' onChange={(e) => setPassword(e.target.value)} autoComplete="off" />
                                <TextField sx={{ input: { color: '#fff' } }} type='password' label="repeat password" variant="standard" color='secondary' onChange={(e) => setRepeatPassword(e.target.value)} autoComplete="off" />
                                <Button sx={{ marginTop: '1rem' }} variant="contained" size="medium" endIcon={<SendIcon />} type='submit'>Submit</Button>
                            </ThemeProvider>
                        </Form>
                    </Main>
                </MainWrapper>
            </>}
        </>
    )
}

export default Signup;