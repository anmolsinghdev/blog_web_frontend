import React from 'react';
import { GlobalStyle, HomeWrapper } from './style/style.js';
import { Button, Grid } from '@mui/material';
import { useNavigate } from "react-router-dom";
import Footer from './Footer.js';
const Home = () => {
    const nav = useNavigate();
    const OnButtonHandle = () => {
        setTimeout(() => {
            nav("/signup")
        }, 1000);
    }


    return (
        <>
            {
                (sessionStorage.getItem('isAuthenticated') === 'true') ? <>
                    <GlobalStyle />
                    <HomeWrapper>
                        <Grid wrap="wrap" overflow='hidden' container spacing={5}>
                            <Grid item xs={12}>
                                <h1>Blog Web</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus libero ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus libero libero oicta non dolor voluptatum!</p>
                            </Grid>
                        </Grid>
                    </HomeWrapper>
                    <Footer />
                </> : <>
                    <GlobalStyle />
                    <HomeWrapper>
                        <Grid wrap="wrap" overflow='hidden' container spacing={5}>
                            <Grid item xs={12}>
                                <h1>Blog Web</h1>
                            </Grid>
                            <Grid item xs={12}>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus libero ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus libero libero oicta non dolor voluptatum!</p>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" onClick={OnButtonHandle}>Sign up</Button>
                            </Grid>
                        </Grid>
                    </HomeWrapper>
                    <Footer />
                </>
            }
        </>
    )
}
export default Home;