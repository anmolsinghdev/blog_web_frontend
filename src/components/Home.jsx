import React from 'react';
import { GlobalStyle, HomeWrapper } from './style/style';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Footer from './Footer.js';
const Home = () => {
    const nav = useNavigate();
    const OnButtonHandle = () => {
        setTimeout(() => {
            nav("/Signup")
        }, 1000);
    }

    return (
        <>
            <GlobalStyle />
            <HomeWrapper>
                <h1>Landing Page</h1>
                <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus libero oicta non dolor voluptatum!</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus totam, dolorum ex dolore error iure id rerum  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus totam, dolorum ex dolsequi aspernatur ea, magni eveniet. Incidunt vitae consequuntur ex, ducimus ea eum.
                </p>
                <Button variant="contained" onClick={OnButtonHandle}>Sign In</Button>
            </HomeWrapper>
            <Footer />
        </>
    )
}
export default Home;