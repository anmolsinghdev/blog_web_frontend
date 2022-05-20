import React, { useEffect, useState } from 'react';
import { GlobalStyle, MainScreenWrapper, Blogbtn } from './style/style.js';
import { Button, Grid, Card, CardContent, Typography, CardActionArea, CardMedia, CardActions } from '@mui/material';
import Footer from './Footer.js';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

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
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

const Main = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const data = () => {
            setUser(sessionStorage.getItem('user'));
        }
        data()
    }, [])

    return (
        <>
            <GlobalStyle />
            <MainScreenWrapper>
                <h2>Hello {user}</h2>
                <Blogbtn>

                </Blogbtn>
                <Button variant="contained">Create A Blog</Button>
                <Button variant="contained">Update A Blog</Button>
            </MainScreenWrapper>
            <Footer />
        </>
    )
}
export default Main;