import React, { useEffect, useState } from 'react';
import { GlobalStyle, MainScreenWrapper } from './style/style.js';
import Footer from './Footer.js';
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
                <h1>Hello {user}</h1>
                <span>ipsum dolor sit amet consectetur adipisicing elit. Optio, amet omnis doloremque minus libero oicta non dolor voluptatum!</span>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus totam, dolorum ex dolore error iure id rerum  Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat temporibus totam, dolorum ex dolsequi aspernatur ea, magni eveniet. Incidunt vitae consequuntur ex, ducimus ea eum.
                </p>
            </MainScreenWrapper>
            <Footer />
        </>
    )
}
export default Main;