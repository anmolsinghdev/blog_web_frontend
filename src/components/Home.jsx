import React from 'react';
import { GlobalStyle, HomeWrapper } from './style/style.js';
import { Button, Grid } from '@mui/material';
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
                <Grid wrap="wrap" overflow='hidden' container spacing={5}>
                    <Grid item xs={12}>
                        <h1>Blog_Web</h1>
                    </Grid>
                    <Grid item xs={12}>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus libero ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus libero libero oicta non dolor voluptatum!</p>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="contained" onClick={OnButtonHandle}>Sign In</Button>
                    </Grid>
                </Grid>
            </HomeWrapper>
            <Footer />
        </>
    )
}
export default Home;